import React from 'react'

const page = () => {
  return (
    <>
      <section class="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6 ">
            <div class="flex flex-wrap ">
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div class="relative lg:max-w-md">
                        <img src="https://i.postimg.cc/rF0MKfBV/pexels-andrea-piacquadio-3760263.jpg" alt="aboutimage"
                            class="relative z-10 object-cover w-full rounded h-96" />
                        <div
                            class="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                            <p class="text-lg font-semibold md:w-72">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    class="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                    </path>
                                </svg> Successfully Providing business solutions from 25 years
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                    <div class="pl-4 mb-6 border-l-4 border-blue-500 ">
                        <span class="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                        <h1 class="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                            About Us
                        </h1>
                    </div>
                    <p class="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                        amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                        amet. amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                        amet.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet.
                    </p>
                    <a href="#"
                        class="px-4 py-2 text-gray-100 bg-blue-500 rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
      </section>

      <hr />
      
      <div class=" text-center bg-stone-100  dark:bg-gray-800 pt-24">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
      </div>

      <section class="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
        <div class="justify-center flex-1 px-4 pb-6 mx-auto max-w-7xl lg:pb-4 md:px-6">
            <div class="flex flex-wrap ">
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div class="mb-10 lg:max-w-lg lg:mb-0">
                        <span
                            class="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-600 bg-blue-100 rounded-md dark:bg-gray-700 dark:text-gray-400">
                            Team</span>
                        <h2 class="mb-4 text-3xl font-bold md:text-4xl dark:text-gray-300">
                            Lorem ipsum dolor sit amet
                        </h2>
                        <p class="mb-6 leading-loose text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem ea necessitatibus
                            voluptates
                            aliquid rerum officiis explicabo laborum molestiae id Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Cum quidem ea necessitatibus voluptates aliquid rerum officiis explicabo
                            laborum molestiae...
                        </p>
                        <a href="#" class="px-4 py-2 text-gray-100 bg-blue-600 rounded-md ">Read More</a>
                    </div>
                </div>
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full px-4 mb-10 text-center lg:w-1/2 sm:w-1/2">
                            <div
                                class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-500 rounded-full w-44 h-44 sm:w-64 sm:h-64">
                                <img class="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/JzmrHQmk/pexels-pixabay-220453.jpg" alt="" />
                            </div>
                            <h2 class="text-xl font-bold dark:text-gray-400">Henry Robinson</h2>
                            <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Director</p>
                            <div class="flex items-center justify-center mt-4">
                                <a class="inline-block mr-5 text-gray-800 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400"
                                    href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-6 h-6 bi bi-facebook " viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="inline-block mr-5 text-gray-800 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400"
                                    href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                                        <path
                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="inline-block text-gray-800 dark:text-gray-400 hover:text-pink-400 dark:hover:text-pink-400 "
                                    href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-6 h-6 bi bi-instagram" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="w-full px-4 mb-10 text-center lg:w-1/2 sm:w-1/2">
                            <div
                                class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-500 rounded-full w-44 h-44 sm:w-64 sm:h-64">
                                <img class="object-cover w-full h-full transition-all hover:scale-110"
                                    src="https://i.postimg.cc/bNyr5cJq/pexels-anastasia-shuraeva-5704720.jpg" alt=""/>
                            </div>
                            <h2 class="text-xl font-bold dark:text-gray-400">Sriyana Berley</h2>
                            <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Founder</p>
                            <div class="flex items-center justify-center mt-4">
                                <a class="inline-block mr-5 text-gray-800 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400"
                                    href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-6 h-6 bi bi-facebook " viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="inline-block mr-5 text-gray-800 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400"
                                    href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                                        <path
                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="inline-block text-gray-800 dark:text-gray-400 hover:text-pink-400 dark:hover:text-pink-400 "
                                    href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-6 h-6 bi bi-instagram" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default page