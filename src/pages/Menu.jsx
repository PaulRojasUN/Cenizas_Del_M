import { motion } from 'framer-motion'
import { InitialTransition } from './InitialTransition'
import { useAuth } from '../context/AuthContext'
import { useState, useEffect } from 'react'
import { createUser, getUser, editUser} from '../db/user-collection'


const Menu = () => {
  const auth = useAuth()

  const [valuesUser, setValuesUser] = useState(null);

  const { displayName, email} = auth.userLogged;


  const getDataUser = async (email) => {
    const result = await getUser(email);

    return result
  }

  const saveDataUser = async (valuesUser) => {
    
    const result = await getDataUser(valuesUser.email)

    if (!result.success && !result.error) {
      await createUser(valuesUser)
    }
  }

  const editDataUser = async (email, valuesUser) => {
    const result = await editUser(email, valuesUser)
  }

  useEffect(() => {
    setValuesUser({
        email: email,
        name: displayName,
    });
  }, [email, displayName]);


  useEffect(() => {
    if (valuesUser) {
        saveDataUser(valuesUser);
    }
  }, [valuesUser])


  return (
    <div>
      <InitialTransition />
      <motion.div
        exit={{ opacity: 0 }}
        className='mb-20 flex flex-col gap-20 items-center'
      >
        <h2 className="text-novel text-4xl font-bold text-black uppercase">Logged-in as {displayName}</h2>
        <br />
        <button className='text-novel text-4xl font-bold text-black uppercase hover:cursor-pointer hover:text-gray-900 z-50'>
          Iniciar juego
        </button>
        <button className='text-novel text-4xl font-bold text-black uppercase hover:cursor-pointer hover:text-gray-900 z-50'>
          Cargar partida
        </button>
        <button className='text-novel text-4xl font-bold text-black uppercase hover:cursor-pointer hover:text-gray-900 z-50'>
          Controles
        </button>
      </motion.div>
    </div>
  )
}

export default Menu
