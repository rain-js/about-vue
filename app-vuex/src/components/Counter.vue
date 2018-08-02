<template>
  <div>
    <div>count :{{ count }}</div>
    <div>doneTodos: {{ doneTodos }}</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      count() {
        return this.$store.state.count
      },
      ...mapGetters([
        'doneTodos'
      ])
    }
  }
</script>

<style></style>
