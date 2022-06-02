import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';


const Form = () => {

    // use react hook form
    const { register, formState: { errors }, handleSubmit } = useForm();


    // form submit
    const onSubmit = data => {
        console.log(data);
    };


    return (
        <div>
            <h1>Please Fill The Form</h1>

            <div className='form-div'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })} />
                        <label>
                            {errors.name?.type === 'required' && <span>{errors.name?.message}</span>}
                        </label>
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
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

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Form;