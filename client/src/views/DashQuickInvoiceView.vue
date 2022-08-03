<script setup>
import { onMounted, ref } from "vue";
import NavDrawer from "../components/NavDrawer.vue";
import BillingFormComponent from "../components/DashQuickInvoiceBillingForm.vue";

onMounted(() => {
  hidethesection1();
  hidethesection2();
});

const hideSection1Clicked= ref(false);
function hidethesection1() {
  hideSection1Clicked.value = !hideSection1Clicked.value;
}

const hideSection2Clicked= ref(false);
function hidethesection2() {
  hideSection2Clicked.value = !hideSection2Clicked.value;
}

</script>

<template>
<div class="grid-container grid grid-cols-6 divide-x">
  <div class="h-screen col-span-1">
    <div class="m-2">
        <NavDrawer/>
    </div>
  </div>
  <div class="item2 col-span-5 bg-gray-100">
    <div class="flex flex-col mb-5">
      <!-- BreadCrumbs -->
      <div class="flex flex-rows bg-white border-b-2">
        <div class="breadcrumbs mx-5 my-3">
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li class="inline-flex items-center">
                <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <div>
		                  <font-awesome-icon icon="fa-solid fa-jet-fighter-up" />
                      Quick Invoice
                  </div>
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- Quick Invoice Label -->
      <div class="mx-5 my-3">
        <text class="text-2xl">Quick Invoice : </text>
      </div>

      <!-- Quick Invoice Form -->
      <div class="mx-5 space-x-5 grid grid-rows h-1/4">
        <div class="w-full bg-white rounded-[0.5rem] border-2 flex items-center">
          <div class="px-5 py-4">
            <div class="quickInvForm">
              <div class="grid grid-col space-y-4">

                <!-- 1st Section - Client Information -->
                <div class="grid grid-cols-3 gap-4 w-full">
                  <div :class="hideSection1Clicked ? 'border-r': ''">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Client Information</h3>
                    <p class="mt-1 text-sm text-gray-600">Add necessary legal information about your client.</p>
                    <button id="hideBtn" @click="hidethesection1" class="mt-3 bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-700 hover:border-transparent rounded">
                      {{ hideSection1Clicked? 'Hide This Section' : 'Show This Section' }}
                    </button>
                  </div>
                  <div id="clientInfoForm" v-if="hideSection1Clicked" class="col-span-2">
                    <form action="#" method="POST">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                              <label for="first-name" class="block text-sm font-medium text-gray-700">Company Name / First name</label>
                              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                              <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>

                            <div class="col-span-6 sm:col-span-4">
                              <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                              <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                              <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                              <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>

                            <div class="col-span-6">
                              <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                              <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>

                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                              <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                              <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
                              <input type="text" name="region" id="region" autocomplete="address-level1" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                              <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                          </div>
                    </form>
                  </div>
                </div>

                <div :class="hideSection1Clicked ? 'border-t': ''">
                </div>

                <!-- 2nd Section - Bill -->
                <div class="grid grid-cols-3 gap-4 w-full">
                  <div :class="hideSection2Clicked ? 'border-r': ''">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Billing Details</h3>
                    <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                    <button id="hideBtn" @click="hidethesection2" class="mt-3 bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-700 hover:border-transparent rounded">
                      {{ hideSection2Clicked? 'Hide This Section' : 'Show This Section' }}
                    </button>
                  </div>
                  <div id="clientInfoForm" v-if="hideSection2Clicked" class="col-span-2">
                    <form action="#" method="POST">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6">
                          <BillingFormComponent />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div :class="hideSection2Clicked ? 'border-t': ''">
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped>

</style>

