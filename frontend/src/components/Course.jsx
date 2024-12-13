import React from 'react'
import Cards from './Cards';
import list from '../../public/list.json'
import { Link } from 'react-router-dom';
function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='pt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here!! :)</span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores iure tempore ad officiis itaque aperiam magnam beatae obcaecati blanditiis dicta, reprehenderit illo aspernatur molestiae labore ipsam rem hic nihil odit architecto omnis atque praesentium commodi ducimus voluptas? Perspiciatis optio error asperiores, beatae earum unde rerum similique molestias, cum blanditiis culpa!</p>
          <Link to="/">
            <button className='text-white bg-pink-500 px-4 py-2 rounded-md  mt-6 hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course;