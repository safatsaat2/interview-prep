import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <section className='bg-gradient-to-r from-customGreen to-customBlue pt-20'>
            <div className='max-w-7xl mx-auto px-3 flex items-center'>
                <div className='text-center lg:text-left w-full lg:w-1/2'>
                    <h2 className='text-white font-raleway text-6xl font-bold'>
                    Ace Your Interviews with Confidence 
                    </h2>
                    <p className='text-white font-montserrat '>
                    From beginners to pros, we’ve got you covered.
                    </p>
                    <Link href="/" className='px-6 py-2 bg-customBlue text-white font-montserrat text-lg inline-block mt-4 shadow-lg hover:-translate-y-2 duration-150 rounded-md'>Get Started</Link>
                </div>
                <div className='text-center lg:text-right w-full lg:w-1/2 flex items-end justify-end'>
                    <Image src={'/Succeess.png'} width={500} height={500} alt='happy person' />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;