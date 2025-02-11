<template>
  <div>
    name:<input v-model="name" />{{ name }}<br />
    salary:<input type="number" v-model="salary" />{{ salary }}<br />
    <button v-on:click="addSalary">提交</button>
    <button @click="showInfo">查看个人信息</button>
    <hr />

    <div class="userinfo" v-show="show">
      <h2>个人信息</h2>
      <p>age:<input type="number" v-model="userinfo.age" />{{ userinfo.age }}</p>
      <p>
        gender: <input type="radio" name="gender" v-model="userinfo.gender" value="male" />男
        <input type="radio" name="gender" v-model="userinfo.gender" value="female" />女
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
      <p>
        技术：<span v-for="skill in userinfo.skills" :key="skill">{{ skill }}</span>
      </p>
      <p>
        <input type="text" v-model="newskill" /><button @click="addNewskill">add new skill</button>
      </p>
      <p>个人信息汇总：{{ userinfo }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import MySalary from './components/MySalary'

const name = ref('roy')
const salary = ref(12000)
function addSalary() {
  salary.value = Number(salary.value) + 1000
}

const userinfo = ref({
  age: 18,
  gender: 'male',
  job: 'devops',
  skills: ['js', 'css', 'html'],
})
const newskill = ref('')
const show = ref(false)

function addNewskill() {
  if (newskill.value) {
    userinfo.value.skills.push(newskill.value)
    newskill.value = ''
  }
}

function showInfo() {
  show.value = !show.value
}
</script>

<style scoped>
.userinfo {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
}
.userinfo span {
  background-color: yellow;
  margin-left: 10px;
  border-radius: 5px;
}
</style>
