import React from 'react'
import facebook from '../logo/facebook.png'
import telegram from '../logo/telegram.png'
import youtube from '../logo/youtube.png'
import reactt from '../logo/physics.png'
import inkdend from '../logo/message.png'
import mongodb from '../logo/mongodb.png'
import ex from '../logo/ex.png'
import js from '../logo/developer.png'
import myPhoto from '../logo/my.webp'
const HomePage = () => {
  return (
    <>
      <div className='flex md:flex-row md:h-[90vh] w-full flex-col order-2 pt-20 md:pt-0'>
        <div className='div1main md:w-1/2 h-full md:pt-34 md:pl-20 pt-12 md:mt-10 pl-9 '>
          <p className='text-3xl font-semibold '>Welcome In My Feed</p>
          <div className='text-5xl font-semibold'>Hello, I'm a Developer</div>
          <div className='mt-10 font-serif text-justify md:pr-25 pr-6 text-yellow-100 text-xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam, recusandae consequatur. Accusamus sint libero
            eligendi laborum fuga repudiandae? Asperiores tempore eos animi dolores corrupti!
            Sint quos, mollitia architecto aliquam nesciunt, optio cum
            delectus sit voluptatum aut ratione quaerat veniam aperiam!

            <div className=' md:flex flex-row justify-around text-2xl mt-10 md:mt-20 w-full'>
              <div className='justify-center text-center text-2xl text-black font-semibold '>Available on
                <div className='flex flex-row h-6 justify-around mt-7 '>
                  <img src={youtube} alt="youtube" />
                  <img src={telegram} alt="telegram" />
                  <img src={facebook} alt="facebook" />
                  <img src={inkdend} alt="" />
                </div>
              </div>
              <div className=' justify-center text-center text-2xl text-black font-semibold mt-6 md:mt-0'> Currently working on
                <div className='flex flex-row h-6 justify-around mt-6'>
                  <img src={reactt} alt="react" />
                  <img src={ex} alt="ex" />
                  <img src={js} alt="js" />
                  <img src={mongodb} alt="mongodb" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center  md:w-1/2 h-full order-1'>
        <div className=" div2main w-90 h-90 md:w-120 md:h-120 ml-5  rounded-full overflow-hidden ">
  <img src={myPhoto} alt="" className="w-full h-full object-cover" />
</div>
</div>


      </div>
    </>
  )
}

export default HomePage
