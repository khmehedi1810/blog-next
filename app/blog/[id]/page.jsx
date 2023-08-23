import { getSingleBlog } from '@/app/lib/getSingleBlog';
import React from 'react'

const page =async ({params}) => {
  let {id} = params;
  let details = await getSingleBlog(id)
  let single = details?.postDetails
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <img src={single?.img} alt="" />
            </div> 
            <div class="grid gap-8 lg:grid-cols-1">
                <article key={single?.id} class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{single?.title}</a></h2>
                    <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{single?.content}</p>
                    <div class="flex justify-between singles-center">
                        <div class="flex singles-center space-x-4">
                            <span class="font-medium dark:text-white">
                                Published: {single?.created_at}
                            </span>
                        </div>
                    </div>
                </article>               
            </div>  
            <center className='mt-8'>
              
            </center>
        </div>
      </section>
    </div>
  )
}

export default page