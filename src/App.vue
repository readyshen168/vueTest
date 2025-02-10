<template>
  <div>
    name:<input v-model="name" />{{ name }}<br />
    salary:<input type="number" v-model="salary" />{{ salary }}<br />
    <button v-on:click="addSalary">提交</button>
    <hr />

    <div>
      <h2>个人信息</h2>
      <p>age:<input type="number" v-model="userinfo.age" />{{ userinfo.age }}</p>
      <p>
        gender: <input type="radio" name="gender" v-model="userinfo.gender" />男
        <input type="radio" name="gender" v-model="userinfo.gender" />女
      </p>
      <p>
        岗位：
        <select name="jobs" v-model="userinfo.job">
          <option value="frontend">前端</option>
          <option value="backend">后端</option>
          <option value="devops">运维</option>
          <option value="testing">测试</option>
        </select>
      </p>
      <p>个人信息汇总：{{ userinfo }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: 'roy',
      salary: 15000,
      userinfo: {
        age: 18,
        gender: 'male',
        job: 'devops',
      },
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
