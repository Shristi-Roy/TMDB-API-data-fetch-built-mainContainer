import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignOut = () => {
signOut(auth).then(() => {
  // Sign-out successful
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
}

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const {uid,email, displayName, photoURL} = user
      dispatch(
      addUser({
        uid: uid,
        email:email, 
        displayName:displayName, 
        photoURL:photoURL
      })
      );
      navigate("/browse")

    } else {
      // User is signed out
      dispatch(removeUser());
      navigate("/")
    }
  });
  },[]);

  return (
      <div className='absolute w-screen px-8 py-2 bg-gradiant-to-b from-black z-10 flex justify-between' >
        <img 
        className='w-44' src={LOGO} alt='logo' />

       {user && ( 
       <div className='flex p-2'>
          <img 
          className='w-12 h-12'
          alt='userIcon'
          src={user.photoURL}
          />
          <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
        </div>
        )}
      </div>
  )
}

export default Header;