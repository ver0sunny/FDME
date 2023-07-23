import React,  { useState } from 'react'

function Subscribe() {
    const [email, setEmail] = useState("");
    
    const handleSubscribe = (e) => {
      e.preventDefault();
      console.log(`Submit ${email}`, e.target);
      // alert(`Submitting Name ${name}`)
    }

  return (    
    <div className='bg-gradient-to-t from-pink-500 w-full h-[50vh] flex justify-center items-center' onSubmit={handleSubscribe}>
        <form className='bg-purple-500 opacity-70 w-[50%] h-[60%] rounded-3xl flex flex-col justify-center items-center shadow-lg shadow-[#0C134F]'>
            <label className='text-center p-1 mb-3'>Если вы готовы стать участником проекта, только дайте знак</label>
            <input className='p-3 rounded-xl w-[90%]' 
                type='email'
                placeholder='Введите почту'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input type='submit' value='LET ME IN!!' className='mt-3 p-1 w-[30%] bg-[#D4ADFC] rounded-xl hover:bg-[#462963] hover:text-white'/>
        </form>
    </div>
  )
}

export default Subscribe