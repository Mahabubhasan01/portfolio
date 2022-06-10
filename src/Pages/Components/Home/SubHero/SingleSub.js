import React from 'react';


const SingleSub = ({icon,name}) => {
    return (
        <div class=" ">
          <div class="m-auto my-10 w-96 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-gray-900  shadow-xl">
          <div class="h-24"></div>
            <div class="-mt-20 flex justify-center bg-gray-900">
              
              <p className='p-5 border-2 rounded-full border-slate-400 '><span className='text-7xl text-pink-500 shadow-xl'>{icon}</span></p>
            </div>
            <div className=''>
            <div class="mt-5 mb-1 px-3 text-center text-2xl">{name}</div>
            <div class="mb-5 px-3 text-center text-sky-500">Title</div>
            <blockquote>
              <p class="mx-2 mb-7 text-center text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum cumque sit sequi optio incidunt temporibus voluptatum totam delectus quas error.</p>
            </blockquote>
            </div>
          </div>
        </div>
    );
};

export default SingleSub;