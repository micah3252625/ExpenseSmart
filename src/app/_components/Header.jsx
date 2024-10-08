'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useUser, UserButton } from '@clerk/nextjs'
import Link from 'next/link';


const Header = () => {
    const { user, isSignedIn } = useUser();
    return (
        <div className="p-5 flex justify-between items-center border shadow-sm">
            <div className="flex flex-row items-center">
                <span className="text-black-800 font-extrabold text-xl">ExpenseSmart</span>
            </div>
            {isSignedIn ?
                (<UserButton/>)
                :
                <div className="flex items-center gap-3">
                   <Link href='/dashboard'>
                       <Button variant="outline" className="rounded-full">
                           Dashboard
                       </Button>
                   </Link>
                    <Link href='/dashboard'>
                        <Button  className="rounded-full">
                            Get Started
                        </Button>
                    </Link>
                </div>
            }

        </div>
    )
}

export default Header