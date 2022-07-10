<script>
import SaleBanner from "../components/SaleBanner.vue";
import GlobalFooter from "../components/GlobalFooter.vue";

  export default {
  components: {
    SaleBanner,
    GlobalFooter
  },
  data() {
    return {

    }
  },
  methods:
  {

  },
}
</script>
<template>
<!-- Main Class -->

<div class="">
  <SaleBanner />
  <!-- flex Flex Cols -->
  <div class="flex flex-col md:mx-10 md:mt-5 md:mb-10">
    <div class="text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl md:mb-5">
      The world's 🗺️ best businesses are invoicing with InvoiceGenie. Where are you ?
    </div>
    <!-- 1st Col itself is a flex of rows -->
    <div class = "flex flex-rows space-x-10 ">
      <!-- Left Side Signup Page Image -->
      <div class="flex w-full flex-col space-y-4 md:border-solid md:border-2 md:border-blue-700">
        <div class="h-full bg-[url('../src/assets/background-pattern.svg')] h-full">
          <div class="bg-[url('../src/assets/signupPosterCurrent.svg')] bg-no-repeat bg-center h-full"></div>
        </div>
      </div>
      <div class="flex w-full flex-col space-y-4 py-5 px-10 md:border-solid md:border-2 md:border-blue-700">
        <div class = "text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl">
          <b>Signup</b>
        </div>
        <div class="h-auto">
          <div class="relative flex items-center">
            <div class="flex-grow border-t border-gray-400"></div>
                 <span class="flex-shrink mx-4 text-gray-400">Personal Details</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
          <div>
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Legal Name</label>
            <input type="text" id="legal_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Legal Name" required="">
          </div>
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@companyname.com" required="">
        </div>
        <div class="h-auto">
          <div class="relative flex items-center">
            <div class="flex-grow border-t border-gray-400"></div>
                 <span class="flex-shrink mx-4 text-gray-400">Buisness Details</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
          <div>
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company / Firm / Organization Name</label>
            <input type="text" id="legal_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Legal Name" required="">
          </div>
        </div>
        <div>
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Country of Origin</label>
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div>
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Nature Of Buisness</label>
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a nature</option>
            <option value="">Natural Resources</option>
            <option value="">Labor Providers</option>
            <option value="">Service Providers</option>
            <option value="">FMCG</option>
          </select>
        </div>
        <div>
          <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">GSTIN Number (for companies with Country of Origin : India)</label>
          <input type="text" id="legal_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="GSTIN Number" required="">
        </div>
        <div class="h-auto">
          <div class="relative flex items-center">
            <div class="flex-grow border-t border-gray-400"></div>
                 <span class="flex-shrink mx-4 text-gray-400">InvoiceGenie Portal Account Creation Details</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required="">
          </div>
        </div> 
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
          <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">       
        </div>
        <div class="center flex items-center">
          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
        </div>
        <div class="center LSHeader">
          <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">We take privacy very seriously. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-700">Privacy Policy</a> for more information.</p>
        </div>
        <div class="center LSHeader">
          <button type="submit" class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="authLogin">SignUp Now!</button>
        </div>
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
    <div class="mt-10">
      <GlobalFooter />
    </div>

  </div>

</div>


</template>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Brygada+1918:ital,wght@1,600&display=swap');

.textLogo {
  font-family: 'Brygada 1918', serif;
  font-weight: bolder;
  font-size: 25px;
} */

.headerDivider {
     border-left:1px solid #38546d; 
     height:80px;
     position:absolute;
     right:249px;
     top:10px; 
}

</style>