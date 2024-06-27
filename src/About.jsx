import React from 'react'

const About = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between mx-20 my-10'>

                <div className='flex-1'>
                    <img
                        src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"
                        alt="Our Story"
                        className='w-full h-auto rounded-lg shadow-lg'
                    />
                </div>
                <div className='flex-1 px-10 mt-6 md:mt-0'>
                    <h1 className='font-bold text-5xl relative mb-4'>
                        Our Story
                        <span className='block w-20 h-1 bg-orange-800 mt-2'></span>
                    </h1>
                    <p className='text-gray-600 leading-relaxed text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet aspernatur minus quis qui, suscipit iste tenetur exercitationem impedit. Aliquam quos culpa distinctio voluptatum? Odio commodi ullam quaerat ab, rerum corporis a nemo libero natus autem reprehenderit cupiditate eius voluptatem dolor quam pariatur temporibus dolorem illum soluta laborum? Voluptatem, adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat error quibusdam fugit unde voluptatum accusantium ipsum doloribus eveniet ducimus molestias fugiat accusamus est, perspiciatis exercitationem labore, aspernatur quas impedit corrupti, corporis quod sapiente quia ea qui non. Deserunt error modi amet sapiente incidunt atque adipisci, ab ipsam eligendi possimus. Minus.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default About
