import React from 'react';
import { useStore } from '../Store/Zustand';

export const Profile: React.FC = () => {
  const fullName = useStore(s => s.user.fullName)
  const email = useStore(s => s.user.email)
  const updateUser = useStore(s => s.updateUser)
  
  return (
    <div>
      <input 
        type="text"
        value={fullName}
        onChange={(ev) => updateUser({fullName: ev.target.value})}
        placeholder="Nome"
      />
      <input 
        type="email"
        value={email}
        onChange={(ev) => updateUser({email: ev.target.value})}
        placeholder="Email"
      />
    </div>
  )
}