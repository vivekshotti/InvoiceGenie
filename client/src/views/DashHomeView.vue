<script setup>
import NavDrawer from "../components/NavDrawer.vue";
import { onMounted, ref } from "vue";
import userAPI from "../api/user";
const users=ref(null);

  async function fetchData() {
    console.log("Fetching Now:");
    try {
      users.value = await userAPI.getAllUsers();
    } catch (error) {
      console.log(error)
    } finally {
      console.log("Fetched Successfully.")
    }
  }

  fetchData();

  
var current = new Date();
let greetingMessage;
if (current.getHours() >= 0 && current.getHours() <= 6)
{
  greetingMessage = "Early Morning Today User!🌌🌃🌌";
}
else if (current.getHours() >= 7 && current.getHours() <= 11)
{
  greetingMessage = "Hey There User! Good Morning!🌄🌞🌄";
}
else if (current.getHours() >= 12 && current.getHours() <= 17)
{
  greetingMessage = "Hey There User! Good Afternoon!🌄🌞🌄";
} else {
  greetingMessage = "Hey There User! Good Evening!🌆🌠🌆";
}

</script>

<template>
<div class="grid-container grid grid-cols-6 divide-x">
  <div class="h-screen col-span-1 shadow-md">
    <div class="m-2">
        <NavDrawer/>
    </div>
  </div>
  <div class="item2 col-span-5 bg-gray-100">
    <!--Breadcrumbs-->
    <div class="flex flex-col bg-white border-b-2">
      <div class="breadcrumbs mx-5 my-3">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </a>
            </li>
            <!-- <li>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
              </div>
            </li> -->
          </ol>
        </nav>
      </div>
    </div>   
    <div class="mx-5 my-3 text-center">
      <text class="text-2xl">
        {{ greetingMessage }}
      </text>
    </div>
  </div>
</div>

</template>

<style scoped>


</style>