import React from 'react'
import HomeLogo from './HomeLogo'
import ProjectsLogo from './ProjectsLogo'
import Switch from './Switch'
import { useLocation, Link } from "react-router-dom";
import ContactLogo from './ContactLogo';
import CvLogo from './CvLogo';

function onclick() {
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    } else {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    }
}

export default function Navbar() {
    var path = useLocation().pathname;
    { console.log(path) }
    return (
        <div className='flex flex-col h-full justify-between'>
            <section className='bg-powdery_pink dark:bg-gray_bg rounded-full py-16 flex flex-col items-center'>
                <Switch onclick={onclick} />
                <div className='justify-center py-11'>
                    <Link to="/">
                        {path === "/" ? <div className='p-0 m-0 border-r-4 w-full border-light_pink dark:border-gold_rose'>
                            <HomeLogo className='fill-light_pink dark:fill-gold_rose' />
                        </div> : <HomeLogo className='fill-smokey_purple' />}
                    </Link>
                    <Link to="/projects">
                        {path === "/projects" ? <div className='p-0 m-0 border-r-4 w-full border-light_pink dark:border-gold_rose'><ProjectsLogo className='fill-light_pink dark:fill-gold_rose' /></div> : <ProjectsLogo className='fill-smokey_purple' />}
                    </Link>
                    <Link to="/contact">
                        {path === "/contact" ? <div className='p-0 m-0 border-r-4 w-full border-light_pink dark:border-gold_rose'><ContactLogo className='fill-light_pink dark:fill-gold_rose' /></div> : <ContactLogo className='fill-smokey_purple' />}
                    </Link>
                    <Link to="/portfolio2024/cv.pdf">
                        {path === "/portfolio2024/cv.pdf" ? <div className='p-0 m-0 border-r-4 w-full border-light_pink dark:border-gold_rose'><CvLogo className='fill-light_pink dark:fill-gold_rose' /></div> : <CvLogo className='fill-smokey_purple' />}
                    </Link>
                </div>
            </section>
            <section className='bg-powdery_pink dark:bg-gray_bg rounded-full p-7'>
                <img src={process.env.PUBLIC_URL + '/lang.svg'}></img>
            </section>
        </div>
    )
}
