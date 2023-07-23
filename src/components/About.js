import React, {useState, useEffect, useRef} from 'react';
// import {Routes, Route, useNavigate} from 'react-router';
import { CgProfile } from 'react-icons/cg';
import Profile from './Profile';
import Register from './Register';

function About() {
  const [profile, setProfile] = useState(true);
  const handleProfile = () => {
    setProfile(!profile);
  }

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const handleInput = (e) => {
    e.preventDefault();
    console.log(`Submit ${login} + ${password}`, e.target);
  }

  let profileRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!profileRef.current.contains(e.target)) {
        setProfile(true);
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('scroll', handler)
  });

  // const navigate = useNavigate();
  // const navigateProfile = () => {
  //   // 👇️ navigate to /
  //   navigate('/profile');
  // };

  // const navigateRega = () => {
  //   // 👇️ navigate to /
  //   navigate('/register');
  // };


  return (
    <div className='h-[50vh]'>
      <div className='w-full flex'>
          <h1 className='pl-14 w-full text-5xl justify-center flex items-center text-[#d6aeff]'>FAIME</h1>
          
          <button onClick={handleProfile} className='mx-2 my-2 top-0 right-0 hover:animate-enlarge'>
            <CgProfile size='3rem' color='white'/>
              {/* {!profile ? <CgProfile size='3rem' color='white'/> : <CgProfile size='3rem' color='white'/>} */}
          </button>
          
          <div ref={profileRef} className={!profile ? 'bg-white top-16 right-14 w-[30%] h-[40%] fixed border-white rounded-2xl shadow-lg shadow-[#5e516c]' : 'hidden'}>
            <div className='flex flex-col items-center justify-center w-[100%] h-[100%]'>
              <div className='flex flex-col' onSubmit={handleInput}>
                <input className='p-1 border-black border-2 rounded-xl text-center'
                  type='login'
                  placeholder='e-mail'
                  value={login}
                  onChange={e => setLogin(e.target.value)}
                />
                <input className='p-1 border-black border-2 rounded-xl text-center'
                  type='password'
                  placeholder='пароль'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                </div>
              <button className='p-2 uppercase'>
                войти
              </button>
              <button className='p-5 uppercase'>
                регистрация
              </button>
              {/* <Routes>
                <Route path='/profile' element={<Profile />} />
                <Route path='/register' element={<Register />} />
              </Routes> */}
            </div> 
          </div>

      </div>
    </div>
    
  )
}

export default About