import React from 'react'

const ContectMe = () => {
    return (
        <>
        <hr className='mt-20'/>

            <div name="Contact" class="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
                <h1 class="text-3xl font-bold mb-4">Contact me</h1>
                <span>Please fill out the form below to contact me</span>
                <div class=" flex flex-col items-center justify-center mt-5">
                    <form class="bg-slate-200 w-80 px-8 py-6 rounded-xl">
                        <h1 class="text-xl font-semibold mb-4">Send Your Message</h1>
                        <div class="flex flex-col mb-4">
                            <label class="block text-gray-700">FullName</label>
                            <input name="name" class="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your fullname"/>
                            </div><div class="flex flex-col mb-4"><label class="block text-gray-700">Email Address</label>
                            <input name="email" class="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter your email address"/>
                            </div><div class="flex flex-col mb-4"><
                                label class="block text-gray-700">Message</label>
                                <textarea name="message" class="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="Enter your Query">
                                    </textarea></div>
                                    <button type="submit" class="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Send</button>
                                    </form></div></div>
        </>
    )
}

export default ContectMe