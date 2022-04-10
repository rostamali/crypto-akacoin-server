import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const CreateWallet = () => {
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const ref = useRef();

    const handleRemoveBtn = e =>{
        setPreviewImage('');
        ref.current.value = '';
    }

    const [imgError, setImgError] = useState('');    
    const [colorError, setColorError] = useState('');    

    const onSubmit = data => {
        
        if(data.bgColor){
            setColorError('')
            if(image){

                const formData = new FormData();

                formData.append('myFile', image)
                formData.append('walletTitle', data.walletTitle)
                formData.append('walletDescription', data.walletDescription)
                formData.append('walletBg', data.bgColor)

                axios.post('https://morning-atoll-58806.herokuapp.com/new-wallet', formData)
                .then(function (res) {
                    if(res.data.insertedId){
                        Swal.fire({
                            title: 'Create New Wallet',
                            icon: 'success',
                            showCloseButton: false,
                            showCancelButton: false,
                            focusConfirm: false,
                            confirmButtonText:'Great!',
                        })
                        reset()
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
                
                
            }else{
                setImgError('Please Upload Logo')
            }
        }else{
            setColorError('Please Select Color');
        }
        
    };


    return (
        <>
            <div id="wallet__adshboard">
                <form className='dashboard__form' onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <div className="text__group">
                        <div className="input__group">
                            <input required {...register("walletTitle")} className='form-control' type="text" placeholder='New Wallet Title' />
                        </div>
                        <div className="input__group">
                            <textarea required {...register("walletDescription")} className="form-control" cols="30" rows="3" placeholder='New Wallet Description'></textarea>
                        </div>
                        <div className="input__group">
                            <span className="form__text">Select Color*</span>
                            <div className="radio__group">
                                <input value="blue" {...register("bgColor")} type="radio" id='blueColor' />
                                <label htmlFor='blueColor'>
                                    <span className="radio__style"></span> Blue
                                </label>
                            </div>
                            <div className="radio__group">
                                <input value="yellow" {...register("bgColor")} type="radio" id='yellowColor' />
                                <label htmlFor='yellowColor'>
                                    <span className="radio__style"></span> Yellow
                                </label>
                            </div>
                            <span className="text-danger">{colorError}</span>
                        </div>
                        <button className="form__btn">Add New Wallet</button>
                    </div>
                    <div className="image__group">
                        <div className="input__group">
                            <label className='image__upload--box' htmlFor="heroSubtitle">
                                {
                                    previewImage ?
                                    <img src={previewImage} alt="Preview thumbnail" className='preview__image' />
                                    :
                                    <span className="form__label">New Wallet Logo</span>
                                
                                }
                            </label>
                            {
                                image ?
                                ''
                                :
                                <span className="text-danger">{imgError}</span>
                            }
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

export default CreateWallet;