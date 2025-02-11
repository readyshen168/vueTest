<template>
  <div>
    name:<input v-model="name" />{{ name }}<br />
    salary:<input type="number" v-model="salary" />{{ salary }}<br />
    <button v-on:click="addSalary">提交</button>
    <button @click="showInfo">查看个人信息</button>
    <hr />

    <div class="userinfo" v-show="show">
      <h2>个人信息</h2>
      <p>age:<input type="number" v-model="age" />{{ age }}</p>
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
        技术：<span v-for="skill in skills" :key="skill">{{ skill }}</span>
      </p>
      <p>
        <input type="text" v-model="newskill" /><button @click="addNewskill">add new skill</button>
      </p>
      <p>个人信息汇总：{{ userinfo }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import MySalary from '@/components/MySalary'
import MyInfo from '@/components/MyInfo'

const { name, salary, addSalary } = MySalary()
const { userinfo, age, skills, newskill, show, addNewskill, showInfo } = MyInfo()
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
