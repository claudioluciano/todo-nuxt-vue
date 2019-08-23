<template>
  <div>
    <b-field>
      <b-input
        v-model="todo"
        expanded
        placeholder="Digite alguma coisa :)"
        size="is-large"
        icon="pencil"
      />
      <p class="control">
        <b-button
          :disabled="canAdd"
          size="is-large"
          type="is-success"
          icon-right="send"
          @click="addTodo"
        />
      </p>
    </b-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todo: ''
    }
  },
  computed: {
    canAdd () {
      return this.todo === ''
    }
  },
  methods: {
    addTodo () {
      this.$store.commit('todo/ADD_TODO', this.todo)
      this.todo = ''
    }
  }
}
</script>

<style>

</style>
