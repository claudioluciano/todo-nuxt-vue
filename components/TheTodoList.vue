<template>
  <div class="box">
    <div class="columns is-multiline">
      <slot v-bind="todos">
        <div class="column content">
          <p class="notification is-info title is-4">
            Nada a fazer Yeaaahh!!!
          </p>
        </div>
      </slot>
    </div>
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  computed: {
    todos () {
      return this.$store.state.todo.listTodos
    }
  }
}
</script>

<style>

</style>
