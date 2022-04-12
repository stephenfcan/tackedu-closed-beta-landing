import React from 'react';
import Image from "next/image";

function Header() {
  return <div className="hidden lg:block md:block sm:hidden">
      <header className='fixed w-full left-12 top-10 z-50 bg-transparent py-5 px-10 md:px-10'>
            <a href="https://tackedu.com">
                <Image src="https://tackedu.netlify.app/TackEdu%20Logo.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </a>
            
        </header>
  </div>;
}

export default Header;
