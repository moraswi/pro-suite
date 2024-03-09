import "../styles/ContactUs.css"
import React from 'react'
import TextField from '@mui/material/TextField';
 

export default function ContactUs() {
  return (
    <div className='ContactUsMainContainer'>

        
        <div className=' TextFieldContainer'>
        <h1>Contact Us</h1>
       
            <h3>email</h3>
            <TextField className='TextField' id="outlined-basic" variant="outlined" />

            <h3>physical address</h3>
            <TextField className='TextField' id="outlined-basic"  variant="outlined" />

            <h2>message</h2>
            <textarea
                id="outlined-basic"
                className='TextField'
                name="postContent"
                label="message"
                rows={10}
                cols={40}
            />
              <button>SUBMIT</button>
         </div>

     
       
    </div>
  )
}
