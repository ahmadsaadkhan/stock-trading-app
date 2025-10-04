import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 header">
        <div className="container header-wrapper">
            <Link href="/">
                <Image src="/logo.png" alt="Logo" width={120} height={30} className="object-contain"/>
            </Link>
            <nav className="hidden sm:block">
                
            </nav>
        </div>
    </header>
  )
}

export default Header