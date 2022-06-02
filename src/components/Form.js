import React from 'react';
import { useForm } from 'react-hook-form';


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

            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label>
                        <span>Email</span>
                    </label>
                    <input type="email" placeholder="Your Email" {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })} />
                    <label>
                        {errors.email?.type === 'required' && <span>{errors.email?.message}</span>}
                        {errors.email?.type === 'pattern' && <span>{errors.email?.message}</span>}
                    </label>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;