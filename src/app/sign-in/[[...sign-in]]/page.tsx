import React from 'react'
import Navbar from '@/components/Navbar';
import { SignIn  } from '@clerk/nextjs'
const page = () => {
  return (
    <>
        <Navbar/>
        <div className='flex justify-center items-center  w-full my-[2rem] ' >
            <SignIn  appearance={
                {
                    variables:{
                        fontSize:"1.3rem"
                    },
                    elements:{
                        cardBox:"!w-[100%]",
                        rootBox:"!w-[30%]"
                    }
                }
            } />
        </div>
    </>
  )
}

export default page