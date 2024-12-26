import React from 'react'
import Login from './Login';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Pricing = () => {
  const { token } = useContext(AuthContext);

  return (
    <div>
        {
            token ? 
            <div className='py-20'>Aa</div>
            : <Login/>
        }

    </div>
  )
}

export default Pricing