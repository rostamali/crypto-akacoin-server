import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Guide = () => {

    const [image, setImage] = useState();
    const [previewImage, setPreviewImage] = useState('');
    const { register, handleSubmit, reset } = useForm();

    const [guideId, setGuideId] = useState([]);
    useEffect(()=>{
        fetch('https://morning-atoll-58806.herokuapp.com/get-guides')
        .then(res => res.json())
        .then(data => {
            setGuideId(data)
        })
    }, [])

    const onSubmitGuideForm = data => {
        
        if(data.guideNumber){
            if(image){
                const formData = new FormData();
    
                formData.append('myFile', image)
                formData.append('guideTitle', data.guideTitle)
                formData.append('guideDescription', data.guideDescription)
                formData.append('guideNumber', data.guideNumber)
    
                const URL = `https://morning-atoll-58806.herokuapp.com/update-guide/${data.guideNumber}`
    
                axios.put(URL, formData)
                .then(response => {
                    if(response.data.modifiedCount){
                        Swal.fire({
                            title: 'Successfully Updated',
                            icon: 'success',
                            showCloseButton: false,
                            showCancelButton: false,
                            focusConfirm: false,
                            confirmButtonText:'Great!',
                        })
                        reset()
                        setPreviewImage('')
                    }
                });
    
            }else{
                const URL = `https://morning-atoll-58806.herokuapp.com/update-guide/${data.guideNumber}`
    
                axios.put(URL, data)
                .then(response => {
                    if(response.data.modifiedCount){
                        Swal.fire({
                            title: 'Successfully Updated',
                            icon: 'success',
                            showCloseButton: false,
                            showCancelButton: false,
                            focusConfirm: false,
                            confirmButtonText:'Great!',
                        })
                        reset()
                        setPreviewImage('')
                    }
                });
            }
        }
        
    };

    return (
        <>
            <div id="dashboard__guide">
                <div className="hero__dashboard">
                    <form className='dashboard__form' onSubmit={handleSubmit(onSubmitGuideForm)} encType="multipart/form-data">
                        <div className="text__group">
                            <div className="input__group">
                                <input {...register("guideTitle")} type="text" className="form-control" placeholder='Guide Title' />
                            </div>
                            <div className="input__group">
                                <select defaultValue='' required {...register("guideNumber")} className="form-select" aria-label="Default select example">
                                    <option value=''>Select Guide Number</option>
                                    {
                                        guideId.map((item, index) => <option key={index} value={item._id}>{index +1}</option>)
                                    }
                                </select>
                            </div>
                            <div className="input__group">
                                <textarea {...register("guideDescription")} className="form-control" cols="30" rows="3" placeholder='Description'></textarea>
                            </div>
                            <button className="form__btn">Save now</button>
                        </div>
                        <div className="image__group">
                            <div className="input__group">
                                <label className='image__upload--box' htmlFor="heroSubtitle">
                                    {
                                        previewImage ?
                                        <img src={previewImage} alt="Preview thumbnail" className='preview__image' />
                                        :
                                        <span className="form__label">Set Guide Image</span>
                                    
                                    }
                                </label>
                                {
                                    previewImage &&
                                    <>
                                        <span className='info__text'>Click the image to edit or update</span>
                                        <button onClick={()=>setPreviewImage('')} className="remove__image">Remove image</button>
                                    </>
                                }
                                <input onChange={(e)=> [setImage(e.target.files[0]), setPreviewImage(URL.createObjectURL(e.target.files[0]))]} name="myFile" accept='image/*' type="file" id='heroSubtitle' className="form-control" placeholder='Hero subtitle' />
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    );
};

export default Guide;