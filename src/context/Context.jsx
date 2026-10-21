import React,{createContext, useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


export const Context = createContext()

function ContextProvider({children}) {

    const [contact,setContact]=useState({
      name: "",
      email: "",
      mensaje: ""
  })

  function handleChange(e) {
      const field = e.target.name;
      const value = e.target.value;

      setContact({
          ...contact,
          [field]:value,
  
      })
      
  } 

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      if ( contact.name === "") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Please fill in all the form fields'
          })
    }

    else if (contact.email === "") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Please fill in all the form fields'
          })
    }
    else if (contact.mensaje === "") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Please fill in all the form fields'
          })
    }
    else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Message sent'
          })

          emailjs.sendForm('service_6jaeoun', 'template_px4j7b8', form.current, 'qz1-4pKUlGcUfd2CX')
    
          e.target.reset()
          
          setTimeout(() => {
            window.location.href="/";
          }, 50000); 
    }
    

    };
  

  return (
    <>
        <Context.Provider value={{contact,handleChange,form,sendEmail}}>
            {children}
        </Context.Provider>
    </>
  )
}

export default ContextProvider;