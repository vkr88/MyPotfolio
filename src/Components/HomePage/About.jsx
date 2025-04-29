import React from 'react'
import css from '../logo/css.jpg'
import html from '../logo/html-BcydiEZz.png'
import oracle from '../logo/oracle-2_c88ZtJ.png'
import javascript from '../logo/javascript-BhRT2qxn.png'
import java from '../logo/java-9g1bAGd7.png'
import nodejs from '../logo/developer.png'
import mongodb from '../logo/mongodb.png'
import react from '../logo/physics.png'
import python from '../logo/python.png'
const About = () => {
  return (
<><div className='ml-20 mr-10'>
    
<p className='text-3xl text-blue-100 font-semibold'>About</p>
<div className='text-xl flex md:w-1/2  mt-10'>
Hello, I'm Akhil, a passionate Web developer with a keen eye for MERN Stack . 
With a background in IT, I strive to 
create impactful and visually stunning
 Software solutions that leave a lasting impression.
</div>

<div className='mt-11 grid grid-cols-1 md:grid-cols-5'>
    <div className='w-60 h-60 border border-amber-500 rounded-full mt-20  overflow-auto justify-center flex flex-col items-center bg-amber-50 p-6 text-xl font-semibold'><div>
    <img src={html} alt="" /></div>html</div>
    
    <div className='w-60 h-60 border border-amber-500 rounded-full  mt-20  overflow-hidden justify-center flex flex-col items-center bg-amber-50 p-6 text-xl font-semibold'><div>
    <img src={css} alt="" /></div>Css</div>
    
    <div className='w-60 h-60 border border-amber-500 rounded-full  mt-20  justify-center flex flex-col items-center bg-amber-50 p-6 text-xl font-semibold overflow-hidden'><div>
    <img src={javascript} alt="" className=''/></div>JavaScript</div>
    
    <div className='w-60 h-60 border border-amber-500 rounded-full  mt-20  overflow-hidden justify-center flex flex-col items-center bg-amber-50 p-6 text-xl font-semibold'><div>
    <img src={react} alt="" /></div>React</div>
    
    <div className='w-60 h-60 border border-amber-500 rounded-full  mt-20  overflow-hidden justify-center flex flex-col items-center bg-amber-50 p-6 text-xl font-semibold'><div>
    <img src={nodejs} alt="" /></div>Node Js</div>
    
    <div className='w-60 h-60 border border-amber-500 rounded-full  mt-20  overflow-hidden justify-center flex flex-col items-center bg-amber-50 p-6 text-xl font-semibold'><div>
    <img src={mongodb} alt="" /></div></div>
    
    
    
    <div className='w-60 h-60 border border-amber-500 rounded-full  mt-20  overflow-hidden justify-center flex flex-col items-center bg-amber-50 p-6 text-xl font-semibold'><div>
    <img src={oracle} alt="" /></div>Oracle</div>
    
    <div className='w-60 h-60 border border-amber-500 rounded-full  mt-20  overflow-hidden justify-center flex flex-col items-center bg-amber-50 p-6 text-xl font-semibold'><div>
    <img src={java} alt="" /></div>Java</div>

    <div className='w-60 h-60 border border-amber-500 rounded-full  mt-20  overflow-hidden justify-center flex flex-col items-center bg-amber-50 p-6 text-xl font-semibold'><div>
    <img src={python} alt="" /></div>Python</div>

    <div className='w-60 h-60 border border-amber-500 rounded-full  mt-20  overflow-hidden justify-center flex flex-col items-center bg-amber-50 p-6 text-xl font-semibold'><div>
    <img src={java} alt="" /></div>Java</div>

</div>
</div>

</>
  )
}

export default About