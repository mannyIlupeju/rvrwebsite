'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'


type navLinkType = {
  name: string, 
  href: string,
}

interface NavLinksProps {
  links: navLinkType[];
}

const NavLink = ({name, href}:navLinkType) => {
  const [underlineVisible, setUnderlineVisible] = useState<boolean>(false)
  
  const handleNavItemClick = () => {
    console.log(underlineVisible)
    setUnderlineVisible(true)
  }



  const pathName = usePathname();
  const isActive = pathName?.startsWith(href);
  const className = isActive ? 'nav-Active' : 'nav-link';

  return ( 
    <div className="group ">
    <Link 
    className={`${className} relative `} 
    href={href}
    onClick={handleNavItemClick}
    onMouseEnter={()=>setUnderlineVisible(true)}
    onMouseLeave={()=> setUnderlineVisible(false)}
    >
      {name}
      <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-zinc-800 transform transition-transform origin-left ${underlineVisible ? 'scale-x-100' : 'scale-x-0'} ${isActive ? 'scale-x-100' : 'scale-x-0'} `}></span>
    </Link> 
    </div>
  );
};

const NavLinks: React.FC<NavLinksProps> = ({ links }) => (
	<div className='lg:flex lg:gap-20 gap-2 text-xs font-light lg:items-center hidden  '>
		{links.map(link => <NavLink key={link.name} {...link} />)}
	</div>
);



const Navigation = () => {
  const navLinks = ['Home', 'Shop', 'Gallery', 'Blog', 'About', 'Contact'].map(name=> ({
    name, href: `/${name.toLowerCase()}`
  }))

  return (
    <nav className="flex justify-center bg-gray-200 p-4">
      <NavLinks links={navLinks}/>
    </nav>
  )
}

export default Navigation;