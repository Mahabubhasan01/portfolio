import React from 'react';

const CustomBlog = () => {
    return (
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBce4yZJ8hcHa23LIy-vVjSg_MSXWCyQk1Q&usqp=CAU"/>
      </div>
      <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
      <p class="text-slate-800 leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
      <a class="text-pink-500 inline-flex items-center mt-3 cursor-pointer">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
    );
};

export default CustomBlog;