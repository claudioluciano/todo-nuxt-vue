<template>
  <div class="columns is-mobile is-centered is-multiline">
    <div class="column is-full">
      <div class="columns is-centered">
        <div class="column is-half">
          <the-add-todo />
        </div>
      </div>
    </div>
    <div class="column is-full">
      <div class="columns is-centered">
        <div class="column is-half">
          <the-todo-list>
            <template v-slot:default="slotProps">
              <the-todo-item
                v-for="todo in slotProps"
                :key="todo.id"
                v-bind="todo"
              />
            </template>

            <template v-slot:footer>
              <the-todo-footer />
            </template>
          </the-todo-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// :id="todo.id"
// :text="todo.text"
// :done="todo.done"

import TheAddTodo from '@/components/TheAddTodo'
import TheTodoList from '@/components/TheTodoList'
import TheTodoItem from '@/components/TheTodoItem'
import TheTodoFooter from '@/components/TheTodoFooter'

export default {
  components: {
    TheAddTodo,
    TheTodoList,
    TheTodoItem,
    TheTodoFooter
  }
}
</script>

<style>

</style>
