import React from 'react';
const Contact = ()=>{
    return(
        <div>
            <h1 className='font-bold text-3xl p-4 m-4'>Contact Us</h1>

            <form>
                <input className='border border-black p-2 m-2' placeholder='name'></input>
                <input className='border border-black p-2 m-2' placeholder='phno'></input>
                <button className='border border-black p-2 m-2'>Submit</button>
            </form>
        </div>
    )
}

export default Contact;