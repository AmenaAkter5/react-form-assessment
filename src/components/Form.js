import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';
/* import Validate, { ValidationItems, ValidationButton } from 'react-real-time-form-validation';

const formValidation = new Validate(); */


const Form = () => {

    const [formError, setFormError] = useState('');

    // use react hook form
    const { register, formState: { errors }, handleSubmit } = useForm({ shouldUseNativeValidation: true });


    // form submit
    const onSubmit = data => {
        console.log(data);
    };


    // name field on change handler
    const nameChange = (event) => {
        console.log(event.target.value);
        const name = event.target.value;
        if (name === '' || name.length <= 2) {
            setFormError('Name is Required')
        }
        else {
            setFormError('');
        }
    }

    /* const nameChange = (event) => {
        console.log(event.target.value);
        const name = event.target.value;
    } */

    /* const nameChange = (event) => {
        formValidation.onChangeStatus(event.target.value);
        // formValidation.onChangeStatus(getValues("name"));
    } */

    /* const componentDidMount = () => {

        formValidation.createValidation('name', 'notBlank', 'Name cannot be blank');

        // formValidation.createValidation('gpa', (gpa) => gpa <= 4, 'Gpa must be less than or equal to 4');
        // formValidation.createValidation('gpa', (gpa) => gpa >= 0, 'Gpa must be greater than or equal to 0');
    }
 */

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
                        <label className='name-validation'>
                            {errors.name && errors.name?.type === 'required' && <span><small>{errors.name?.message}</small></span>}
                            {formError}
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
                            }
                        })} />
                        <label htmlFor="email">
                            {errors.email?.type === 'required' && <span>{errors.email?.message}</span>}
                            {errors.email?.type === 'pattern' && <span>{errors.email?.message}</span>}
                        </label>
                    </div>

                    <div>
                        <label htmlFor="aadhar"><b>Aadhar</b> </label>
                        <input type="number" id="aadhar" placeholder="Aadhar No." {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} />
                        <label htmlFor="email">
                            {errors.email?.type === 'required' && <span>{errors.email?.message}</span>}
                            {errors.email?.type === 'pattern' && <span>{errors.email?.message}</span>}
                        </label>
                    </div>

                    <div>
                        <label htmlFor="pan"><b>PAN card</b></label>
                        <input type="text" id="pan" placeholder="PAN card No." {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} />
                        <label htmlFor="email">
                            {errors.email?.type === 'required' && <span>{errors.email?.message}</span>}
                            {errors.email?.type === 'pattern' && <span>{errors.email?.message}</span>}
                        </label>
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' placeholder="Your Password" {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })} />
                        <label>
                            {errors.password?.type === 'required' && <span>{errors.password?.message}</span>}
                            {errors.password?.type === 'minLength' && <span>{errors.password?.message}</span>}
                        </label>
                    </div>

                    <input disabled={formError} type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Form;