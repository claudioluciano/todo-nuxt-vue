<template>
  <div class="column is-full">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <b-checkbox size="is-medium" :value="done" @input="doneTodo">
            <p>
              {{ text }}
            </p>
          </b-checkbox>
        </div>
      </div>

      <div class="level-right">
        <b-button
          size="is-medium"
          type="is-danger"
          icon-right="close"
          @click="removeTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    doneTodo (value) {
      this.$store.commit('todo/TOGGLE_TODO_DONE', { id: this.id, done: value })
    },
    removeTodo () {
      this.$store.commit('todo/REMOVE_TODO', this.id)
    }
  }
}
</script>

<style>

</style>
