<template>

<!-- <div class = "">
    <div class="grid grid-rows-10 gap-0">
        <div class="shadow h-20 row-span-1">
            <div class="center textLogo text-3xl md:text-5xl pt-4">
              InvoiceGenie
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 row-span-9">
          <div class="m-3">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@companyname.com">
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@companyname.com">
            </div>
          </div>
          <div class="bg-[url('../src/assets/coral.jpg')] h-full">

          </div>
        </div>
    </div>
</div> -->

<!-- Main Class -->
<div class="">
  <!-- flex Flex Cols -->
  <div class="flex flex-col">
    <!-- 1st Col -->
    <!-- <div class="shadow h-20">
      <div class="center textLogo text-3xl md:text-5xl pt-4">
        InvoiceGenie
      </div>
    </div> -->
    <!-- 2nd Col is a flex of rows -->
    <div class = "flex flex-rows h-screen">
      <div class="flex w-full flex-col space-y-4">
        <div class="h-full bg-[url('../src/assets/background-pattern.svg')] h-full">
          <div class="bg-[url('../src/assets/signupPosterCurrent.svg')] bg-no-repeat bg-center h-full"></div>

        </div>
      </div>
      <div class="flex w-full flex-col space-y-4 bg-blue-100 py-5 px-10">
        <!-- <div class="h-fit bg-blue-200">
          <div class = "textLogo text-center">
            Take your business to the next level
          </div>

        </div>
        <div class="h-1/4 bg-blue-500"></div>
        <div class="h-1/4 bg-blue-500"></div>
        <div class="h-1/4 bg-blue-500"></div> -->
      </div>

    </div>
    <!-- <div class = "flex flex-rows h-screen">
      <div class="flex w-full flex-col space-y-4">
        <div class="h-full bg-[url('../src/assets/background-pattern.svg')] h-full">
          <div class="bg-[url('../src/assets/signupPosterCurrent.svg')] bg-no-repeat bg-center h-full"></div>

        </div>
      </div>
      <div class="flex w-full flex-col space-y-4 bg-blue-200">
        <div class="h-3 bg-blue-500"></div>
        <div class="h-48 bg-blue-500"></div>
        <div class="h-48 bg-blue-500"></div>
        <div class="h-48 bg-blue-500"></div>
        <div class="h-48 bg-blue-500"></div>
      </div>

    </div> -->

  </div>

</div>

</template>

<style scoped>
.textLogo {
  font-family: "Imbue", Arial, Helvetica, sans-serif;
}

.headerDivider {
     border-left:1px solid #38546d; 
     height:80px;
     position:absolute;
     right:249px;
     top:10px; 
}

</style>