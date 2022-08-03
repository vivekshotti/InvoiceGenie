<script>
import { token } from '@formkit/utils'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    deleteField(index) {
      const listNode = this.$formkit.get(this.name)
      const nodeToDelete = listNode.at('$self.' + index)
      if (nodeToDelete) {
        console.log(nodeToDelete)
        nodeToDelete.destroy()
      }
    },
    addRow() {
     const listNode = this.$formkit.get(this.name)
     listNode.input([...listNode.value, { key: token() }])
    }
  }
}
</script>

<template>
  <div class="repeater">
    <FormKit
      type="list"
      :name="name"
      :id="name"
      v-slot="{ value }"
    >
      <!-- <small>
        <p>This value is automatically available from the parent:</p>
        <pre>{{ value }}</pre>
        <p>Notice the key property has been added. It is super important to always use a key in a v-for, especially for things like repeaters</p>
      </small> -->
      <FormKit
        type="group"
        v-for="(data, index) in value"
        :key="data.key"
      >
      <div class="grid grid-cols-11 gap-6">
        <div class="col-span-6 sm:col-span-6 lg:col-span-4">
          <FormKit
            type="text"
            name="item_description"
            label="Item Description"
            outer-class="mb-5"
            label-class="block text-sm font-medium text-gray-700"
            input-class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            help-class="text-xs text-gray-500"
          />
        </div>
        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
          <FormKit
            type="number"
            name="item_quantity"
            label="Item Quanitity"
            outer-class="mb-5"
            label-class="block text-sm font-medium text-gray-700"
            input-class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            help-class="text-xs text-gray-500"
          />
        </div>
        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
          <FormKit
            type="number"
            name="price_per_item"
            label="Price Per Item"
            outer-class="mb-5"
            label-class="block text-sm font-medium text-gray-700"
            input-class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            help-class="text-xs text-gray-500"
          />
        </div>
        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
          <FormKit
            type="number"
            name="total_amount"
            label="Total Amount"
            outer-class="mb-5"
            label-class="block text-sm font-medium text-gray-700"
            input-class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            help-class="text-xs text-gray-500"
          />
        </div>
        <div class="col-span-6 sm:col-span-6 lg:col-span-1 text-center m-auto">
          <button type="button" class="hover:text-red-600" @click="deleteField(index)">
            <font-awesome-icon icon="fa-solid fa-circle-minus" class="fa-lg"/>
          </button>
        </div>
      </div>
      </FormKit>
      <button type="button" @click="addRow" class="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-700 hover:border-transparent rounded">
        Add new row
      </button>
    </FormKit>

  </div>
</template>

<style scoped>

</style>