import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

    const handleVideoSrc = () => {
        if(window.innerWidth < 700) {
            setVideoSrc(smallHeroVideo);
        } else {
            setVideoSrc(heroVideo);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrc);

        return () => {
            window.removeEventListener('resize', handleVideoSrc);
        }
    }, []);

    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 1.5,
            duration: 2,
        });
        gsap.to('#cta', {
            opacity: 1,
            y: -50,
            delay: 2,
            
        });
        gsap.fromTo('#camera', 
        {
            scale:1,
            ease: 'power1'
        },
        {
            scale:1.2,
             duration: 2
        }
    )

    }, [])

    return (

        <section className='flex justify-between h-[100vh] w-full px-[140px] max-md:pl-8 max-md:pr-[50px] mt-4 max-md:flex-col gap-8'>
        
        <div className='flex flex-col md:w-[50vw] h-full'>
        
        <div className='h-[60%] relative bg-violet-400 bg-cover rounded-3xl mb-4'>
         {/* <h1 className='text-black py-[4px] px-2 rounded-xl mt-4 ml-4 cursor-pointer text-2xl w-fit bg-violet-500'><a href="#">Apple Store</a></h1> */}
         
         
         <a 
         href="https://www.apple.com/in/store"
         className='inline-block'
         >
         <img 
         src="assets/images/link.svg" 
         alt="link"
         width={20}
         height={20} 
         className='ml-4 absolute'
         />
         </a>
         <h1 className='text-black lg:text-[180px] max-md:text-[120px] text-center font-light'>Apple</h1>
         
        </div>
            
        <div className='nav-height rounded-3xl flex pt-4 overflow-hidden'>
            <div className='w-full flex-center relative'>
             {/* <p className='hero-title' id='hero'>
                iPhone 15 Pro
             </p> */}
             {/* <div className='md:w-10/12 w-9/12'>
                <video 
                autoPlay 
                muted 
                playsInline={true} 
                key={videoSrc}
                className='pointer-events-none'
                >
                    <source src={videoSrc} type='video/mp4'/>
                </video>
               
             </div> */}
             <h1 className='absolute top-6 text-2xl left-6 py-2 capitalize z-10'>Capture life vividly.</h1>
             <img
               src='assets/images/lhero.jpg'
               className='rounded-3xl h-[100%]'
               id='camera'
             />
            </div>

            {/* <div 
            id='cta'
            className='flex flex-col items-center opacity-0 translate-y-20'>
               <a 
               href="#highlights"
               className='btn'
               >Buy</a>
               <p>From $199/month or $999</p>
            </div> */}
        </div>

        </div>
        
        <div className='md:w-[40%] h-full flex rounded-3xl bg-cover  relative'>

           <img
            src='/assets/images/sidehero.jpg'
            className='rounded-3xl max-md:w-full'
            width={600}
            height={600}
           />
         
         
         <h1 className='absolute px-2 py-[4px] rounded-lg top-8 left-8 text-3xl'>
            iPhone 15 Pro
            <a href="https://www.apple.com/in/store">
            <img 
            src="assets/images/link.svg" 
            alt="link" 
            width={20} 
            height={20} 
            className='inline-block ml-4 pb-2'/>
            </a>
            </h1>
         
        </div>
        </section>
    );

};

export default Hero;

//1:15:29 / 3:51:36