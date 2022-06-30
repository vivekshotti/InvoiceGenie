<script>
  export default {
      name: 'GlobalFooter',
  } 
</script>

<template>

<footer class="p-4 bg-white rounded-lg border-2 border-blue-700">
<div class="sm:flex sm:items-center sm:justify-between">
<a href="#" class="flex items-center mb-4 sm:mb-0">
<!-- <img src="/docs/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo"> -->
<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">InvoiceGenie</span>
</a>
<ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
<li>
<a href="about/" class="mr-4 hover:underline md:mr-6 ">About Developer</a>
</li>
<li>
<a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
</li>
<li>
<a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
</li>
<li>
<a href="#" class="hover:underline">Contact</a>
</li>
</ul>
</div>
<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
<center>
<span class="block text-xs md:text-sm text-gray-500 sm:text-center dark:text-gray-400">©2022 <a href="https://www.linkedin.com/in/vivekhotti/" class="hover:underline"> Vivek Shivakumar Hotti</a>™. All Rights Reserved.</span>
</center>  
<div class="visible md:hidden block text-xs md:text-sm text-gray-500 sm:text-center dark:text-gray-400">
  <center>
    <span class="text block text-xs md:text-sm text-gray-500 sm:text-center dark:text-gray-400">The site is best experienced on a computer</span>
    <span class ="icon text-xs md:text-sm text-gray-400"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" /></svg></span>
  </center>
</div>
<!-- <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Made with love in Mumbai, India. 🇮🇳 ❤️</span> -->
</footer>


</template>

<style>
  .text,
  .icon {
    vertical-align: middle;
    display: inline-block;
    align-items: center;
    justify-content: center;
  }

  .center{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>