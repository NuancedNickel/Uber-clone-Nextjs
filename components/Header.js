
"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
// import SignOutButton from "./SignOutButton";

function Header() {
    const route=useRouter();
    const headerMenu=[
        {
            id:1,
            name:'Ride',
            icon:'/taxi.webp'
        },
        {
            id:2,
            name:'Package',
            icon:'/box.webp'
        }
    ]
  return (
    <div className='p-5 pb-3 pl-10 border-b-[4px] border-gray-200 flex items-center justify-between'>
        <div className='flex gap-24 items-center'>
            <Image 
            src='/uber_logo.png'
            width={70} 
            height={70}
            alt='Logo' 
            className='cursor-pointer'
            onClick={()=>route.push('/')} />

            <div className='flex gap-6 items-center'>
                {headerMenu.map((item)=>(
                    <div className='flex gap-2 items-center'>
                        <Image src={item.icon}width={30} height={30}/>
                        <h2 className='text-[14px] font-medium'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
        <UserButton/>
    </div>
  )
}

export default Header