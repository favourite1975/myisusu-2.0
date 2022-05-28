import React from 'react'
import {blogimg} from '../assets'
import { Footer, Navbar } from '../component'
import { FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'

const Blog = () => {
    return (
      <div>
        <Navbar />
        <div>
          <div className='text-center mt-10'>
            <h1 className='text-3xl font-bold text-logoColor uppercase'>
              monday motivation
            </h1>
            <h2 className='text-xl mt-2 md:mx-0 mx-2 text-logoColor'>
            Attack the hill passionately, it’s a Monday morning!
            </h2>
          </div>
          <div className='flex flex-col place-items-center mt-6 '>
            <img
              src={blogimg}
              alt='man-suit'
              height={508}
              align='center'
              className='w-full lg:w-9/12 md:w-3/6 sd:w-3/6 overflow-hidden'
            />
          </div>
          <div className=''>
            <blockquote
              className='md:w-8/12 mx-auto mt-10 text-logoColor text-right'
            >
              <p className='text-center'>
              “It’s good to have money and the things that money can buy,
               but it’s good, too, to check up once in a while and make sure that you haven’t 
               lost the things that money can’t buy.”
              </p>
              <cite className=' text-logoColor font-bold'>-- George Lorimer </cite>
            </blockquote>

            <div className='md:text-center md:w-7/12 mx-auto text-center text-logoColor md:px-2 md:px-2'>
              <p className='mt-3'>
              This day has generously provided another unique sets of opportunities to leverage upon, 
              achieving your desires. Your goals won’t come in to you, you have to reach out to get it, 
              but you can trust MyIsusu as a partner holding out with you to reach your goals. We help to fulfil desires.
              </p>
              <p className='mt-5'>
              So this Monday morning, look at the “hill” before you and boldly confront it with energy and passion.
              We are rooting for your success!
              </p>
              <div>#Monday #Motivation #Money #Passion #Success #Employee #Charge #Energy</div>
              <div className='flex pl-4 mb-32 gap-2 mt-5 sm:justify-end mr-3 '>
              <a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
                <FiTwitter className='footer_icons' />
              </a>
              <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
                <FaInstagram className='footer_icons' />
              </a>
              <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
                <AiOutlineLinkedin className='footer_icons' />
              </a>
            </div>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    )
}

export default Blog
