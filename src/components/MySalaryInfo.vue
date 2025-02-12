<template>
  <div class="salary">
    name:<input v-model="name" />{{ name }}<br />
    salary:<input type="number" v-model="salary" />{{ salary }}<br />
    <button v-on:click="addSalary">提交</button>
    <button @click="toggleShow">查看个人信息</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SalaryInfo',
}
</script>

<script setup lang="ts">
import MySalary from './MySalary'

const { name, salary, addSalary } = MySalary()

const props = defineProps({
  show: Boolean,
})

const emit = defineEmits(['update:show'])

function toggleShow() {
  emit('update:show', !props.show)
}
</script>

<style scoped></style>
