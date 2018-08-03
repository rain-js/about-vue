<template>
  <div>
    <div>count :{{ count }}</div>
    <div>doneTodos: {{ doneTodos }}</div>
    <div><button @click="incrementAlias()">加一</button></div>
    <div><button @click="increment(2)">加二</button></div>
    <div><button @click="$store.dispatch('plus', 5)">call actions dispatch(plus five)</button></div>
    <div><button @click="plus(6)">call actions mapActions(plus six)</button></div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

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
        'increment'       // this.increment() <=> this.$store.commit('increment')
      ]),
      ...mapActions([
        'plus'
      ])
    }
  }
</script>

<style></style>
