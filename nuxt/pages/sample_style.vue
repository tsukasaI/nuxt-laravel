<template>
  <div>
    <mdb-btn color="primary"  @click="testConnection">MDB Button</mdb-btn>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdbBtn } from 'mdbvue'

export default Vue.extend({
    components: {
    mdbBtn
  },

  data () {
    return {
      'message': '',
    }
  },

  methods: {
    async testConnection () {
      const res :any = await this.$axios.get('/api/test').catch(_ => {return false;});

      if (res) {
        console.log(res)
        this.message = res.data.data;
      }
    }
  }
})
</script>
