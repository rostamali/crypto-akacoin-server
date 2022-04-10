import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const UpdateWallet = () => {
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const ref = useRef();

    const handleRemoveBtn = e =>{
        setPreviewImage('');
        ref.current.value = '';
    }

    const [wallet, setWallet] = useState([]);
    useEffect(()=>{
        fetch('https://morning-atoll-58806.herokuapp.com/get-wallet')
        .then(res => res.json())
        .then(data => {
            setWallet(data)
        })
    }, [])

    const onSubmit = data => {
        
        if(image){
            const formData = new FormData();

            formData.append('myFile', image)
            formData.append('walletTitle', data.walletTitle)
            formData.append('walletDescription', data.walletDescription)

            const URL = `https://morning-atoll-58806.herokuapp.com/update-wallet/${data.walletNumber}`

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
            const URL = `https://morning-atoll-58806.herokuapp.com/update-wallet/${data.walletNumber}`

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
            <div id="wallet__adshboard">
                <form className='dashboard__form' onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <div className="text__group">
                        <div className="input__group">
                            <input {...register("walletTitle")} className='form-control' type="text" placeholder='Wallet title' />
                        </div>
                        <div className="input__group">
                            <select defaultValue='' required {...register("walletNumber")} className="form-select" aria-label="Default select example">
                                <option value=''>Select Wallet Number</option>
                                {
                                    wallet.map((item, index) => <option key={index} value={item._id}>{index +1}</option>)
                                }
                            </select>
                        </div>
                        <div className="input__group">
                            <textarea {...register("walletDescription")} className="form-control" cols="30" rows="3" placeholder='Wallet Description'></textarea>
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
                                    <span className="form__label">Set Wallet Logo</span>
                                
                                }
                            </label>
                            {
                                previewImage &&
                                <>
                                    <span className='info__text'>Click the image to edit or update</span>
                                    <button onClick={handleRemoveBtn} className="remove__image">Remove image</button>
                                </>
                            }
                            <input ref={ref} onChange={(e)=> [setImage(e.target.files[0]), setPreviewImage(URL.createObjectURL(e.target.files[0]))]} name="myFile" accept='image/*' type="file" id='heroSubtitle' className="form-control" placeholder='Hero subtitle' />
                        </div>
                    </div>
                    
                </form>
            </div>
        </>
    );
};

export default UpdateWallet;