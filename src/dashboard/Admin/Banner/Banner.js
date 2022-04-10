import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Banner = () => {

    const { register, handleSubmit, reset } = useForm();

    const [wallet, setWallet] = useState([]);
    useEffect(()=>{
        fetch('https://morning-atoll-58806.herokuapp.com/get-banner')
        .then(res => res.json())
        .then(data => {
            setWallet(data)
            console.log(data)
        })
    }, [])

    const onSubmit = data => {
        
        const URL = `https://morning-atoll-58806.herokuapp.com/update-banner/${data.bannerNumber}`

        axios.put(URL, data)
        .then(response => {
            console.log(response)
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
            }
        });
    };

    return (
        <>
            <div id="wallet__adshboard">
                <form className='dashboard__form' onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <div className="text__group">
                        <div className="input__group">
                            <input {...register("bannerTitle")} className='form-control' type="text" placeholder='Banner title' />
                        </div>
                        <div className="input__group">
                            <select required {...register("bannerNumber")} className="form-select" aria-label="Default select example">
                                <option value=''>Select Banner Number</option>
                                {
                                    wallet.map((item, index) => <option key={index} value={item._id}>{index +1}</option>)
                                }
                            </select>
                        </div>
                        <div className="input__group">
                            <textarea {...register("bannerDescription")} className="form-control" cols="30" rows="3" placeholder='Banner Description'></textarea>
                        </div>
                        <button className="form__btn">Save now</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Banner;