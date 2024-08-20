import React from 'react'

const About = () => {
  return (
    <div
     name="about"
     className='w-full h-screen bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique velit dolores, nostrum aut numquam sint consequuntur perspiciatis, voluptatum delectus commodi quas, aperiam eius rem! Alias ratione eum corporis nobis suscipit quaerat pariatur aliquid officiis officia vero placeat quidem similique, unde deleniti nisi tempora magni. Vitae consequuntur animi ipsa aspernatur?</p>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cupiditate in sed enim, porro blanditiis assumenda animi distinctio quia minus eos suscipit. Laborum unde impedit ratione sint quibusdam sit doloremque sed ullam ipsum exercitationem distinctio nisi, doloribus ut aperiam vitae rem quod amet nam dolores explicabo! Odit quo repellendus eligendi?</p>
        </div>
    </div>
  )
}

export default About