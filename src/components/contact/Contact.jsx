import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import NavBar from '../navbar/NavBar'
import './contact.css'


function Contact() {

    const {handleChange,form,sendEmail} = useContext(Context)

  return (
    <>
        <NavBar/>

        <div className='DivContact' >
            <form action="" className='DivForm' ref={form} onSubmit={sendEmail}>
                <div className='DivContactForm'>
                    <label htmlFor="" className='Label'><h4 className='h4Contact'>FULL NAME</h4></label>
                    <input onChange={handleChange} type="text" name='name' placeholder='Enter your full name here' className='Input' aria-required/>
                </div>
                <div className='DivContactForm'>
                    <label htmlFor="" className='Label'><h4 className='h4Contact'>MAIL</h4></label>
                    <input onChange={handleChange} type="email" name='email' placeholder='Enter your mail here' className='Input' aria-required/>
                </div>
                <div className='DivContactForm'>
                    <label htmlFor="" className='Label'><h4 className='h4Contact'>MESSAGE</h4></label>
                    <textarea onChange={handleChange} type="text" name='mensaje' placeholder='Enter your message name here' className='Input' cols="30" rows="10" aria-required/>
                </div>
                <div className='divContactButton'>
                    <button className='ContactButton'>
                        SEND
                    </button>
                </div>               
            </form>
        </div>
    </>
  )
}

export default Contact