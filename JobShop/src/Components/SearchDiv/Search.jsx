import React from 'react'
import { AiOutlineCloseCircle, AiOutlineSearch} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
        <form className='flex flex-row ' action=''>
            <div className='firstDiv grow flex justify-between items-center  gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
                <div className='flex gap-2 w-[100%] items-center'>
                    <AiOutlineSearch className='text-[25px] icon'/>
                    <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Jobs'/>
                    <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>
            </div>
            <div className='firstDiv grow flex justify-between items-center  gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
                <div className='flex gap-2 w-[100%] items-center'>
                    <BsHouseDoor className='text-[25px] icon'/>
                    <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Jobs'/>
                    <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>
            </div>
            <div className='firstDiv grow flex justify-between items-center  gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
                <div className='flex gap-2 w-[100%] items-center'>
                    <CiLocationOn className='text-[25px] icon'/>
                    <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Jobs'/>
                    <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>
            </div>
            <span className='w-10'></span>
            <button className='bg-blueColor h-full gap-5 p-5 px-10 rounded-[10px] text-white cursor-pointer'>Search</button>
            
            
        </form>

        <div className='secDiv flex items-center gap-10 justify-center'>

            <div className='singleSearch flex items-center gap2'>
                <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort by:</label>
                <select name='' id='relevance' className='bg-white rounded-[3px] mx-4 px-4 py-1'>
                    <option value="">Relevance</option>
                    <option value="">Inclusive</option>
                    <option value="">Starts with</option>
                    <option value="">Contains</option>
                </select>
            
            </div>

            <div className='singleSearch flex items-center gap2'>
                <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort by:</label>
                <select name='' id='relevance' className='bg-white rounded-[3px] mx-4  px-4 py-1'>
                    <option value="">Full-Time</option>
                    <option value="">Part-Time</option>
                    <option value="">Contract</option>
                    <option value="">Remote</option>
                </select>
            
            </div>

            <div className='singleSearch flex items-center gap2'>
                <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort by:</label>
                <select name='' id='relevance' className='bg-white rounded-[3px] mx-4 px-4 py-1'>
                    <option value="">Senior</option>
                    <option value="">Beginner</option>
                    <option value="">Intermediate</option>
                    <option value="">Advocate</option>
                </select>
            
            </div>
            
            <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>

        </div>
    </div>
  )
}

export default Search