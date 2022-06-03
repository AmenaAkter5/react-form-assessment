import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';


const Form = () => {

    // validation state
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [aadharError, setAadharError] = useState('');
    const [panError, setPanError] = useState('');


    // use react hook form
    const { register, formState: { errors }, getValues, handleSubmit } = useForm({ shouldUseNativeValidation: true });



    // form submit
    const onSubmit = data => {
        console.log(data);
    };


    // name field on change handler
    const nameChange = (event) => {

        const name = getValues("name");
        if (name === '' || name.length < 2) {
            setNameError('Name is Required')
        }
        else {
            setNameError('');
        }
    }


    // email field on change handler
    const emailChange = event => {

        const email = getValues("email");
        const pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

        if (!pattern.test(email)) {
            setEmailError('Provide a valid Email');
        }
        else {
            setEmailError('');
        }
    }


    // aadhar field on change handler
    const aadharChange = (event) => {

        const aadharValue = getValues("aadhar");
        if (aadharValue < 0) {
            setAadharError('Sorry!! Input right number!');
            return;
        }
        else if (aadharValue === '' || aadharValue.length !== 12) {
            setAadharError('Aadhar Must be have in 12 characters');
        }
        else {
            setAadharError('');
        }
    }


    // PAN field on change handler
    const panChange = (event) => {

        const pan = getValues("pan");

        const pattern = /^(?=.*[A-Z].*[A-Z].*[A-Z].*[A-Z].*[A-Z])(?=.*[0-9].*[0-9].*[0-9].*[0-9])(?=.*[A-Z]).{10}$/;

        if (!pattern.test(pan)) {
            console.log(pattern.test(pan))
            setPanError('Input right PAN number');
        }
        else {
            setPanError('');
        }
    }


    return (
        <div>
            <h1>Please Fill The Form</h1>

            <div className='form-div'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label htmlFor="name"><b>Name</b></label>
                        <input type="text" id="name" placeholder="Your Name" {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            },
                            onChange: nameChange
                        })} />
                        <label htmlFor="name" className='name-validation'>
                            {errors.name && errors.name?.type === 'required' && <span><small>{errors.name?.message}</small></span>}
                            {nameError}
                        </label>
                    </div>

                    <div>
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="email" id="email" placeholder="Your Email" {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            },
                            onChange: emailChange
                        })} />
                        <label className='email-validation' htmlFor="email">
                            {errors.email?.type === 'required' && <span>{errors.email?.message}</span>}
                            {errors.email?.type === 'pattern' && <span>{errors.email?.message}</span>}
                            {emailError}
                        </label>
                    </div>

                    <div>
                        <label htmlFor="aadhar"><b>Aadhar</b> </label>
                        <input type="number" id="aadhar" placeholder="Aadhar No." {...register("aadhar", {
                            required: {
                                value: true,
                                message: 'Aadhar is Required'
                            },
                            minLength: {
                                value: 12,
                                message: 'Aadhar Must be have in 12 characters'
                            },
                            maxLength: {
                                value: 12,
                                message: 'Must be have 12 characters'
                            },
                            onChange: aadharChange
                        })} />
                        <label className='aadhar-validation' htmlFor="aadhar">
                            {errors.aadhar?.type === 'required' && <span>{errors.aadhar?.message}</span>}
                            {errors.aadhar?.type === 'minLength' && <span>{errors.aadhar?.message}</span>}
                            {aadharError}
                        </label>
                    </div>

                    <div>
                        <label htmlFor="pan"><b>PAN card</b></label>
                        <input type="text" id="pan" placeholder="PAN card No." {...register("pan", {
                            required: {
                                value: true,
                                message: 'PAN is Required'
                            },
                            pattern: {
                                value: /^(?=.*[A-Z].*[A-Z].*[A-Z].*[A-Z].*[A-Z])(?=.*[0-9].*[0-9].*[0-9].*[0-9])(?=.*[A-Z]).{10}$/,
                                message: 'Provide a valid PAN'
                            },
                            onChange: panChange
                        })} />
                        <label className='pan-validation' htmlFor="pan">
                            {errors.pan?.type === 'required' && <span>{errors.pan?.message}</span>}
                            {errors.pan?.type === 'pattern' && <span>{errors.pan?.message}</span>}
                            {panError}
                        </label>
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Form;