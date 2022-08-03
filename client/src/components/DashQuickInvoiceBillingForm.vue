<script>
import Repeater from "./DashQuickInvoiceBillingFormRepeater.vue"

export default {
  data() {
    return {
      formData: {
        infos: [{key: 'a'}]
      }
    }
  },
  components: {
      Repeater
  }
}
</script>

<template>
  <FormKit
    type="form"
    v-model="formData"
    :actions="false"
  >
    <div class="repeaters">
      <Repeater name="infos" />
    </div>
  </FormKit>
  <!-- <h2>All Form Data</h2>
  <pre>{{ formData }}</pre> -->
</template>

<style scoped>
.repeaters {
  display: flex;
}
</style>