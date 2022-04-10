import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';

const HeroSection = () => {

    const [image, setImage] = useState();
    const [previewImage, setPreviewImage] = useState('');
    const { register, handleSubmit, reset } = useForm();

    const [heroId, setHeroId] = useState('');
    useEffect(()=>{
        fetch('https://morning-atoll-58806.herokuapp.com/get-hero')
        .then(res => res.json())
        .then(data => {
            setHeroId(data._id)
        })
    }, [])

    const onSubmit = data => {
        
        if(image){
            const formData = new FormData();

            formData.append('myFile', image)
            formData.append('heroTitle', data.heroTitle)
            formData.append('heroSubtitle', data.heroSubtitle)
            formData.append('heroDescription', data.heroDescription)

            const URL = `https://morning-atoll-58806.herokuapp.com/update-hero/${heroId}`

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
            const URL = `https://morning-atoll-58806.herokuapp.com/update-hero/${heroId}`

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
        
    };

    return (
        <>
            <div className="hero__dashboard">
                <form className='dashboard__form' onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <div className="text__group">
                        <div className="input__group">
                            <input {...register("heroTitle")} className='form-control' type="text" placeholder='Hero title' />
                        </div>
                        <div className="input__group">
                            <input {...register("heroSubtitle")} type="text" className="form-control" placeholder='Hero subtitle' />
                        </div>
                        <div className="input__group">
                            <textarea {...register("heroDescription")} className="form-control" cols="30" rows="3" placeholder='Description'></textarea>
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
                                    <span className="form__label">Set Hero Image</span>
                                
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
        </>
    );
};

export default HeroSection;