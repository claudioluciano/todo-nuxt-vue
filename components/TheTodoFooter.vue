<template>
  <div>
    <b-progress
      :value="doneTodos"
      :max="todoLength"
      size="is-medium"
      :type="type"
    />
  </div>
</template>

<script>
export default {
  computed: {
    doneTodos () {
      return this.$store.getters['todo/DONE_TODO'].length
    },
    todoLength () {
      return this.$store.state.todo.listTodos.length
    },
    type () {
      const percent = (this.doneTodos / this.todoLength) * 100

      if (percent <= 20) { return 'is-danger' } else if (percent <= 40) { return 'is-warning' } else if (percent <= 80) { return 'is-info' } else if (percent > 80) { return 'is-success' }

      return ''
    }
  }
}
</script>

<style>

</style>
