import React from 'react'
import { useSelector } from 'react-redux'
export default function Profile() {
  const user = useSelector(state => state.auth.userData) ;

  return (
    <div className='m-auto border w-fit mt-30 p-10 rounded-2xl'>
      <img src={user.photoUrl} alt={user.displayName} className='w-50 rounded-full m-auto ' />
      <h1 className='mt-2 font-medium'><span className='font-bold'>Name :</span> {user.displayName}</h1>
      <h1 className='mt-1 font-medium'><span className='font-bold'>Email :</span> {user.email}</h1>
      <h1 className='mt-1 font-medium'><span className='font-bold'>Role :</span> {user.role}</h1>    
    </div>
  )
}
