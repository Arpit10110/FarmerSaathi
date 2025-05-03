'use client'

import Navbar from '@/components/Navbar'
import { SignOutButton, UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => (
 <>
    <Navbar/>
    <div className='flex justify-center items-center  w-full my-[2rem] flex-col ' >
    <div className='w-[80%] flex justify-end  '>
                    <SignOutButton>
                        <button className=' cursor-pointer px-[2rem] py-[0.5rem] text-[1.3rem] hover:scale-[1.02] transition-all rounded-md text-white bg-gray-900 ' >SignOut</button>
                    </SignOutButton>
                </div>
    <UserProfile appearance={
                        {
                            variables:{
                                fontSize:'1.3rem'
                            },
                            elements:{
                                avatarBox:"w-[3rem] h-[3rem]",
                                cardBox:"!w-[60rem]",
                                navbar:"w-[30rem] flex-0 basis-[20rem] max-w-[50rem] "
                            },
                        }
                    } />
    </div>
 </>
)

export default UserProfilePage