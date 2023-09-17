import React, { useEffect, useState } from 'react';

import NtwistDark from './photos/ntwistLogo.png';
import PicOne from './photos/PicOne.png';
import PicTwo from './photos/PicTwo.jpeg';
import PicThree from './photos/PicThree.jpeg';
import PicFour from './photos/PicFour.jpeg';
import PicFive from './photos/PicFive.png';
import NtwistLight from './photos/ntwistlight.png';
import LinkedInLogo from './photos/icons8-linkedin-48.svg';
import TwitterLogo from './photos/icons8-twitter.svg';
import ScrollUpLogo from './photos/icons8-scroll-up-90.png';
import DownArrowLight from './photos/icons8-down-button-32-light.png';
import DownArrowDark from './photos/icons8-down-button-32-dark.png';

const Ntwist = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverBool, setHoverBool] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <div className='flex flex-col font-sans'>
      <div className='flex justify-center items-center relative z-20'>
        {isVisible && (
          <div className='fixed bottom-10 right-10' onClick={goToBtn}>
            <img src={ScrollUpLogo} className='w-16' />
          </div>
        )}
      </div>
      {isVisible && (
        <header className='fixed w-screen flex justify-between bg-white z-20' onMouseLeave={()=>setHoverBool(false)}>
          <div className='ml-8'>
            <img src={NtwistDark} className='w-44' />
          </div>
          <ul className='flex mr-8'>
            <li className='text-xl m-4  hover:underline underline-offset-8'>
              Home
            </li>
            <li
              className='text-xl m-4 hover:underline underline-offset-8 flex items-center'
              onMouseEnter={() => setHoverBool(true)}
            >
              Industries
              <img src={DownArrowDark} className='w-4 h-4 ml-2' />
            </li>
            <li className='text-xl m-4 hover:underline underline-offset-8'>
              AI Software
            </li>
            <li className='text-xl m-4 hover:underline underline-offset-8'>
              Blog
            </li>
            <li className='text-xl m-4 hover:underline underline-offset-8'>
              Contact Us
            </li>
          </ul>
        </header>
      )}
      <nav
        className='fixed bg-white top-14 right-60 rounded'
        id='navigation'
        style={{ display: `${hoverBool ? 'block' : 'none'}` }}
        onMouseLeave={() => setHoverBool(false)}
        onMouseOver={()=>setHoverBool(true)}
      >
        <ul>
          <li className='p-4 hover:underline underline-offset-8'>
            Sustainability
          </li>
          <li className='p-4 hover:underline underline-offset-8'>
            Mineral Processing
          </li>
          <li className='p-4 hover:underline underline-offset-8'>
            Mine-To-Mill-To-Mine Optimization
          </li>
          <li className='p-4 hover:underline underline-offset-8'>Oil & Gas</li>
        </ul>
      </nav>
      <div className="bg-[url('./photos/backgroundImage.png')] min-h-screen">
        <div className='fixed z-10 w-screen'>
          <header className='flex justify-between' onMouseLeave={()=>setHoverBool(false)}>
            <div className='ml-8'>
              <img src={NtwistLight} className='w-44' />
            </div>
            <ul className='flex text-white mr-8'>
              <li className='text-xl m-4  hover:underline underline-offset-8'>
                Home
              </li>
              <li
                className='text-xl m-4 hover:underline underline-offset-8 flex items-center'
                onMouseEnter={() => setHoverBool(true)}
              >
                Industries
                <img src={DownArrowLight} className='w-4 h-4 ml-2' />
              </li>
              <li className='text-xl m-4 hover:underline underline-offset-8'>
                AI Software
              </li>
              <li className='text-xl m-4 hover:underline underline-offset-8'>
                Blog
              </li>
              <li className='text-xl m-4 hover:underline underline-offset-8'>
                Contact Us
              </li>
            </ul>
          </header>
        </div>
        <article className='flex justify-between mt-56 mx-28 '>
          <div className='self-center w-3/7'>
            <p className='text-white text-5xl font-bold'>
              {`Data-powered Solutions \n for Industrial Excellence`}
            </p>
            <button className='bg-blue-600 p-2 px-8 rounded text-white mt-8'>
              Read More
            </button>
          </div>
          <div className='w-4/7'>
            <img src={PicOne} className='' />
          </div>
        </article>
      </div>

      <main className='mx-24'>
        <article className='flex justify-between mt-12'>
          <div className='w-1/2 flex flex-col justify-center mr-10'>
            <h3 className='text-redOrange text-5xl '>
              Mine-To-Mill-To-Mine Optimization
            </h3>
            <p className='mt-6'>
              NTWIST’s newest product unlocks up to $250/oz in previously
              inaccessible value in open pit gold mines by connecting siloed
              data sources like block models, fleet management systems,
              stockpile surveys, and plant instruments. This allows your company
              to better track material flow, and feed properties, identify
              plan/production discrepancies, and correct resource models and
              production plans.
            </p>
            <button className='bg-redOrange p-2 w-32 mt-4 rounded text-white'>
              Read More
            </button>
          </div>
          <div className='w-1/2'>
            <img src={PicTwo} />
          </div>
        </article>
        <article className='flex justify-between mt-20'>
          <div className='w-1/2 '>
            <img src={PicThree} />
          </div>
          <div className='w-1/2  flex flex-col justify-center ml-10'>
            <h3 className='text-redOrange text-5xl'>Sustainability</h3>
            <p className='mt-8'>
              Environmental stewardship is a priority for NTWIST. We help our
              customers to minimize their sustainability impact on the planet.
              Emissions or environmental targets are used alongside productivity
              targets to define success for our customers.
            </p>
            <p className='mt-2'>
              With the increasing relevance of carbon accounting and emissions
              tracking, NTWIST offers a suite of tools to increase visibility
              into environmental performance and help processing plants track,
              manage, optimize, and report key metrics.
            </p>
            <button className='bg-redOrange p-2 mt-4 w-32 rounded text-white'>
              Read More
            </button>
          </div>
        </article>
        <article className='flex justify-between mt-20'>
          <div className='w-1/2 flex flex-col justify-center mr-10'>
            <h3 className='text-redOrange text-5xl '>Mineral Processing</h3>
            <p className='mt-6'>
              NTWIST offers a number of solutions for mills, concentrators, and
              leach plants. Our solutions help operations to reduce the effect
              of feed variability, avoid downtime and increase peak throughput
              while decreasing energy and reagent consumption.
            </p>
            <button className='bg-redOrange p-2 w-32 rounded text-white mt-4'>
              Read More
            </button>
          </div>
          <div className='w-1/2'>
            <img src={PicFour} />
          </div>
        </article>
        <article className='flex justify-between mt-20'>
          <div className='w-1/2'>
            <img src={PicFive} />
          </div>
          <div className='w-1/2 flex flex-col justify-center ml-10'>
            <h3 className='text-redOrange text-5xl '>Oil & Gas</h3>
            <p className='mt-8'>
              Oil and Gas plants require a high level of control and robustness
              in their operation due to the high risks to people and
              environment.
            </p>
            <p className='mt-2'>
              NTWIST helps Oil & Gas customers to analyze historical data,
              identify opportunities for process control improvements, and
              reduce variability in any part of the process, thus providing
              enhanced reliability and safety.
            </p>
            <button className='bg-redOrange p-2 mt-4 w-32 rounded text-white'>
              Read More
            </button>
          </div>
        </article>
      </main>
      <footer className='bg-[#081528] flex flex-col items-center mt-16'>
        <div>
          <img src={NtwistLight} className='w-44 mt-12' />
        </div>
        <ul className='text-white flex mt-4'>
          <li className='p-4'>Home</li>
          <li className='p-4'>About Us</li>
          <li className='p-4'>Contact Us</li>
          <li className='p-4'>Private Policy</li>
          <li className='p-4'>Sitemap</li>
        </ul>
        <p className='text-gray-500 mt-6'>
          9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
        </p>
        <div className='flex mt-6'>
          <img src={LinkedInLogo} className='w-6 mx-4' />
          <img src={TwitterLogo} className='w-6 mx-4' />
        </div>
        <p className='text-gray-500 my-6'>© 2022. Ntwist Inc.</p>
      </footer>
    </div>
  );
};

export default Ntwist;
