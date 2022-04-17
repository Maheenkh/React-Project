/* import React from "react";
import PizzaLeft from "../assets/web-pic.png";
import "../styles/Contact.css";



function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact; 
*/


import React from "react";
import PizzaLeft from "../assets/web-pic.png";
import "../styles/Contact.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import emailjs from "emailjs-com"

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  /*age: yup.number().positive().integer().required(),  
  password: yup.string().min(4).max(15).required(),
confirmPassword: yup.string().oneOf([yup.ref("password"), null]), */
  msg: yup.string().required(),
});

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const SERVICE_ID= "service_pkpe7p7";
  const TEMPLATE_ID="template_k4adol8";
  const USER_ID="DEjHxz2P52oDpqh-o";
  /*const submitForm = (data) => {
    console.log(data); */
    /*const Contact = () => { */
      const submitForm = (e) => {
        
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully"
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: "error",
        title: "Ooops, something went wrong",
        text: error.text,
      })
    });
    e.target.reset()
  };
  
  return (
      <div className="contact">
      {  /* <div className="title">Sign Up</div>
        <div className="inputs"> */ }
         <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }} />
        <div className="rightSide">
          <h1> Contact</h1>
        <form onSubmit={handleSubmit(submitForm)}>
        {/*<form onSubmit={handleOnSubmit}> */}
            <input
              type="text"
              name="firstName"
              {...register('firstName', { 
                required: true })}
              placeholder="First Name..."
            />
           <p> {errors.firstName?.message} </p> 


            <input
              type="text"
              name="lastName"
              placeholder="Last Name..."
              {...register("lastName", {
                required: true })}
            />
            <p> {errors.lastName?.message} </p> 

            <input
              type="email"
              name="email"
              placeholder="Email..."
              {...register("email", {
                required: true
              })}
            />
           <p> {errors.email?.message} </p> 
          

         {/*  <input 
            type="text" 
            name="age" 
            placeholder="Age..." 
            {...register("age", {
                required: true
              })} 
          /> 
            <p> {errors.age?.message} </p> 

            <input
              type="password"
              name="password"
              placeholder="Password..."
              {...register("password", {
                required: true
              })}
            />
           <p> {errors.password?.message} </p> 
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password..."
              {...register("confirmPassword", {
                required: true
              })}
            />
           <p> {errors.confirmPassword && "Passwords Should Match!"} </p>
            <input type="submit" id="submit" /> */}
            <input
            type="text"
            name="msg"
            placeholder="Type your message here!"
            {...register("msg", { 
              required: true 
            })}
            />
            <p> {errors.msg?.message} </p> 
            <input
             type="submit" id="submit" /> 
          </form>
        </div>
      </div>
    
  );
}

export default Contact;




/*import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.min.css';
import React from "react";
import PizzaLeft from "../assets/web-pic.png";
import "../styles/Contact.css";




const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form 
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name'
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
              
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a subject'
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>

                <button className='submit-btn' disabled={disabled} type='submit'>
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}; 


export default ContactForm;
*/
