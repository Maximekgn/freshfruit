import React from 'react'
import { FaFacebook, FaInstagram, FaLeaf, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary/20 p-5 mt-5">
        <div className="container flex justify-between items-center">
            <div className="text-2xl font-bold upper flex items-center gap-2">
                <p className="text-primary">Fruit </p>
                <p className="text-secondary">Store</p>
                <FaLeaf className="text-green-500 "/>
            </div>
            <div className='flex gap-3'>
                <FaInstagram className='text-3xl'/>
                <FaTwitter className='text-3xl'/>
                <FaFacebook className='text-3xl'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer