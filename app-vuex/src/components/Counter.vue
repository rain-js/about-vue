<template>
  <div>
    <div>count :{{ count }}</div>
    <div>doneTodos: {{ doneTodos }}</div>
    <div><button @click="incrementAlias()">加一</button></div>
    <div><button @click="increment(2)">加二</button></div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    computed: {
      count() {
        return this.$store.state.count
      },
      ...mapGetters([
        'doneTodos'
      ])
    },
    methods: {
      incrementAlias() {
        this.$store.commit('increment')
      },
      ...mapMutations([
        'increment'
      ]),
    }
  }
</script>

<style></style>
