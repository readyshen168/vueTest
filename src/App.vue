<template>
  <div>
    name:<input v-model="name" />{{ name }}<br />
    salary:<input type="number" v-model="salary" />{{ salary }}<br />
    <button v-on:click="addSalary">提交</button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: 'roy',
      salary: 15000,
    }
  },
  methods: {
    addSalary() {
      this.salary = Number(this.salary) + 1000
    },
  },
}
</script>

<style scoped></style>
