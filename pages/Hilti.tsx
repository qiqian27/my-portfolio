import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import NextLink from 'next/link';
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

const Hilti = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    // Check the window width and update slidesToShow
    const handleResize = () => {
      if (window.innerWidth > 1047) {
        setSlidesToShow(4); // Large screens
      } else if (window.innerWidth > 843) {
        setSlidesToShow(3); // Medium screens
      } else if (window.innerWidth > 640) {
        setSlidesToShow(2); // Small screens
      } else {
        setSlidesToShow(1); // Mobile view
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='backgroundimg2'>


      <Head>
        <title>Chai Qi Qian Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed top-0 w-full z-50">
        <nav className="py-4 px-5 flex justify-between animate-slide-in-top text-base md:text-xl bg-white border-b-2 border-gray-500">
          <NextLink href="/">
            <div className='flex text-xl md:text-3xl '>Chai Qi Qian • Portfolio </div>
          </NextLink>
          <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen)
          }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li className='flex md:mt-2 mt-1'>
              <a href="mailto: qichaiqian27@outlook.com" className="ml-5">Contact</a>
              <a href="/public/ChaiQiQian.pdf" target="_blank" rel="noopener noreferrer" className="ml-5">Resume</a>
            </li>
          </ul>
        </nav>
      </div>

      <main className='md:px-16 px-5 mt-20'>
        <section>
          <div className='w-full flex justify-center items-center animate-slide-in-right'>
            <Image src="/c2.png" alt="" width={300} height={300} className='w-20 h-20 mt-5' />
          </div>
          <h3 className='text-2xl md:text-3xl mt-3 text-black text-center animate-slide-in-right'>Hilti ITC Competition</h3>

          <div className='shadow-lg p-6 rounded-xl my-1 hover:scale-105 animate-slide-in'>
            <h3 className='text-lg md:text-2xl py-1 text-black'>Introduction</h3>
            <p className='text-base md:text-lg py-2 leading-5 md:leading-8 text-gray-800 text-justify' >
              The competition also focuses on developing a mobile application using Flutter and Dart, named Hilti_XXX. Hilti_XXX is an application designed to incorporate Virtual Reality (VR) and Augmented Reality (AR) functionalities, aimed at enhancing the safety and usability of equipment for workers and users. Additionally, the app offers training courses and facilitates product sales, presenting a lucrative opportunity to boost Hilti Company&apos;s revenue and propel the company to new heights.
            </p>
            <h3 className='text-lg md:text-2xl py-1 text-black'>Features</h3>
            <p className='text-base md:text-lg py-2 leading-5 md:leading-8 text-gray-800 text-justify' >
              <a className='pl-6'>• Traning Courses <br /></a>
              <a className='pl-6'>• Artificial Intelligence <br /></a>
              <a className='pl-6'>• Virtual Reality <br /></a>
              <a className='pl-6'>• Augmented Reality <br /></a>
            </p>
          </div>
        </section>

        <section>
          <div className='shadow-lg p-10 rounded-xl my-1 '>
            <h3 className='text-xl md:text-2xl text-center py-5 text-black'> Screenshots of the Project</h3>
            <Slider {...settings}>
              <div>
                <Image src="/h1.png" alt="" className="mx-auto max-h-full mb-7 md:mb-0" width={200} height={200} />
              </div>
              <div>
                <Image src="/h2.png" alt="" className="mx-auto max-h-full mb-7 md:mb-0" width={200} height={200} />
              </div>
              <div>
                <Image src="/h3.png" alt="" className="mx-auto max-h-full mb-7 md:mb-0" width={200} height={200} />
              </div>
              <div>
                <Image src="/h4.png" alt="" className="mx-auto max-h-full mb-7 md:mb-0" width={200} height={200} />
              </div>
              <div>
                <Image src="/h5.png" alt="" className="mx-auto max-h-full mb-7 md:mb-0" width={200} height={200} />
              </div>
              <div>
                <Image src="/h6.png" alt="" className="mx-auto max-h-full mb-7 md:mb-0" width={200} height={200} />
              </div>
              <div>
                <Image src="/h7.png" alt="" className="mx-auto max-h-full mb-7 md:mb-0" width={200} height={200} />
              </div>
              <div>
                <Image src="/h8.png" alt="" className="mx-auto max-h-full mb-7 md:mb-0" width={200} height={200} />
              </div>
              <div>
                <Image src="/h9.png" alt="" className="mx-auto max-h-full mb-7 md:mb-0" width={200} height={200} />
              </div>
              <div>
                <Image src="/h10.png" alt="" className="mx-auto max-h-full mb-7 md:mb-0" width={200} height={200} />
              </div>
            </Slider>
          </div>
        </section>

        <section>
          <div className='flex justify-center items-center'>
            <NextLink href="https://github.com/zerox555/Hilti_XXX" target="_blank" rel="noopener noreferrer">
              <div className='flex justify-center mt-10 mb-10'>
                <p className='bg-blue-500 text-white px-9 py-2 rounded-md'>Project</p>
              </div>
            </NextLink>
            <NextLink href="/">
              <div className='flex justify-center mt-10 mb-10'>
                <p className='bg-blue-500 text-white px-9 py-2 rounded-md ml-5'>Home</p>
              </div>
            </NextLink>
          </div>
        </section>

        <footer>
          <div className='flex items-center justify-center'>
            <a href="https://www.instagram.com/qiqian_02/" target="_blank" rel="noopener noreferrer" className='md:mt-2 mt-1 md:md-2 hover:scale-[110%]  transition-transform'><AiFillInstagram size={30} /></a>
            <a href="https://www.facebook.com/qiqianchai/" target="_blank" rel="noopener noreferrer" className='md:mt-2 mt-1 md:md-2 md:ml-10 ml-10 hover:scale-[110%]  transition-transform'><AiFillFacebook size={30} /></a>
            <a href="https://www.linkedin.com/in/chai-qi-qian-a5094520a/" target="_blank" rel="noopener noreferrer" className='md:mt-2 mt-1 md:md-2 md:ml-10 ml-10 hover:scale-[110%]  transition-transform'><AiFillLinkedin size={30} /></a>
          </div>
          <div className='text-lg text-center items-center justify-center mt-5 mb-5'>
            <p >© 2023 No rights reserved. Celebrating Freedom in Our World 🌍🕊️</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Hilti
