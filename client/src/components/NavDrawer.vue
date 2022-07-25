<script setup>
import router from '../router';

function redirectToHome()
{
  router.push({ name: 'dash-home' })
}

function redirectToDashboard()
{
  router.push({ name: 'dash-dashboard' })
}

function redirectToQuickinvoice()
{
  router.push({ name: 'dash-quickInvoice' })
}

function redirectToAllInvoices()
{
  router.push({ name: 'dash-allInvoices' })
}

function redirectToAnalytics()
{
  router.push({ name: 'dash-analytics' })
}

function redirectToHelp()
{
  router.push({ name: 'dash-help' })
}

function redirectToSettings()
{
  router.push({ name: 'dash-settings' })
}

function logout()
{
  router.push({ name: 'home'})
}

</script>

<template>
<div class="whole h-full p-3">
    <div class="flex flex-col space-y-3">
      <div class="textLogo text-center text-4xl">
        InvoiceGenie
      </div>
      <div>

        <button @click="redirectToHome" type="button" class="text-gray-900 bg-white hover:text-blue-700 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 w-full">
          <div class="flex flex-row space-x-3">
            <div><font-awesome-icon icon="fa-solid fa-house" /></div>
            <div>Home</div>
          </div>
        </button>

        <button @click="redirectToDashboard" type="button" class="text-gray-900 bg-white hover:text-blue-700 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 w-full">
          <div class="flex flex-row space-x-3">
            <div><font-awesome-icon icon="fa-solid fa-chart-line" /></div>
            <div>Dashboard</div>
          </div>
        </button>

        <button @click="redirectToQuickinvoice" type="button" class="text-gray-900 bg-white hover:text-blue-700 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 w-full">
          <div class="flex flex-row space-x-3">
            <div><font-awesome-icon icon="fa-solid fa-jet-fighter-up" /></div>
            <div>Quick Invoice</div>
          </div>
        </button>

        <button @click="redirectToAllInvoices" type="button" class="text-gray-900 bg-white hover:text-blue-700 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 w-full">
          <div class="flex flex-row space-x-3">
            <div><font-awesome-icon icon="fa-solid fa-folder-open" /></div>
            <div>All Invoices</div>
          </div>
        </button>

        <button @click="redirectToAnalytics" type="button" class="text-gray-900 bg-white hover:text-blue-700 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 w-full">
          <div class="flex flex-row space-x-3">
            <div><font-awesome-icon icon="fa-solid fa-chart-pie" /></div>
            <div>Analytics</div>
          </div>
        </button>

        <button @click="redirectToHelp" type="button" class="text-gray-900 bg-white hover:text-blue-700 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 w-full">
          <div class="flex flex-row space-x-3">
            <div><font-awesome-icon icon="fa-solid fa-circle-question" /></div>
            <div>Help</div>
          </div>
        </button>

        <button @click="redirectToSettings" type="button" class="text-gray-900 bg-white hover:text-blue-700 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 w-full">
          <div class="flex flex-row space-x-3">
            <div><font-awesome-icon icon="fa-solid fa-gear" /></div>
            <div>Settings</div>
          </div>
        </button>

        <button @click="logout" type="button" class="text-gray-900 bg-white hover:text-blue-700 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 w-full">
          <div class="flex flex-row space-x-3">
            <div><font-awesome-icon icon="fa-solid fa-right-from-bracket" /></div>
            <div>Logout</div>
          </div>
        </button>

      </div>
      <div class="navFooter space-y-3">
        <div class="flex flex rows space-x-3 text-xs text-gray-400">
          <button class="hover:text-black">T&C</button>
          <button class="hover:text-black">Privacy Policy</button>
        </div>
        <div class="text-xs text-gray-400">
          ©2022 Vivek Shivakumar Hotti. All Rights Reserved.
        </div>
      </div>
    </div>
</div>


</template>

<style scoped>

.navFooter {
 /* TODO : Place all items of NavFooter on Footer Bottom */
}
.textLogo {
  font-family: "Imbue", Arial, Helvetica, sans-serif;
}

.imgBtn {
  width: 20px;
}

</style>