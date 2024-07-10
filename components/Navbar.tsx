import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
       <Link href="/" className='flex items-center gap-1'>
        <Image
         src="/assets/icons/logo.svg"
         width={20}
         height={20}
         alt='logo'

        />
<p className='nav-logo'>
  
  Let's <span className='text-primary'>Save</span>

</p>
        
       </Link>
        </nav>
    </header>
  )
}

export default Navbar
