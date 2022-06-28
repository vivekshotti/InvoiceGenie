<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

  // export default {
  //     name: 'HomeLoginSignup',
  // } 

  async function authLogin() {
    router.push({ name: "dashboard" })
  }
</script>

<template> <!--items-center-->

    <div class="md:flex md:flex-col md:space-y-4">
        <!-- <div class="md:m-10 relative flex py-5 items-center" data-v-239c5482=""><div class="flex-grow border-t border-gray-400" data-v-239c5482=""></div><div class="flex-grow border-t border-gray-400" data-v-239c5482=""></div></div> -->
      <div class="LSHeader">
            <div class="flex flex-col md:text-3xl md:tracking-tight md:font-extrabold md:text-gray-900 text-2xl tracking-tight font-extrabold text-gray-900">
                <div class="LSHeader">
                    💸🚀💸
                </div>
                <div class="LSHeader">
                    Onwards to the moon, start here
                </div>
            </div>
      </div>

      <div class="LSHeader1">
        <h1 class="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">InvoiceGenie</h1>
        <h1 class="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">Portal</h1>
      </div>

      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@companyname.com" required="">
      </div>

      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">       
      </div>

      <!-- <div>
        <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
      </div> -->
    <div class="LSHeader">
      <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">We take privacy very seriously. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-700">Privacy Policy</a> for more information.</p>

    </div>

    <div class="LSHeader">
      <button type="submit" class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="authLogin">Submit</button>
    </div>
    </div>

    <div class="relative flex py-5 items-center">
            <div class="flex-grow border-t border-gray-400"></div>
                 <span class="flex-shrink mx-4 text-gray-400">OR</span>
            <div class="flex-grow border-t border-gray-400"></div>
    </div>
    <div class="SignupText">
        <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">If you want to create a new account, please visit the <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-700">New Accounts Registration</a> page.</p>     
    </div>

    


</template>
    
<style scoped>
    .SignupText{
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .LSHeader{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .LSHeader1{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

    <!-- <div class="flex flex-col">
        <div class="flex flex-col text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-3xl">
            <text class="items-center">💸🌝💸</text>
            Onwards to the moon, start here<br/>
            
    </div>
        <div class="">
            
            <form>
                <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="">
                </div>
                <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                </div>
                <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="">
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>

        <div>03</div>
        
    </div>
    <div class="outer">
      
    </div> -->
