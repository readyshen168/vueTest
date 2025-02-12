<template>
  <div>
    <MySalaryInfo ref="mySalaryInfo" v-model:show="show"></MySalaryInfo>
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
import MySalaryInfo from './components/MySalaryInfo.vue'
import MyInfo from '@/components/MyInfo'
import { nextTick, onMounted, ref } from 'vue'

const mySalaryInfo = ref()
const show = ref(false)

const { userinfo, age, skills, newskill, addNewskill } = MyInfo()

onMounted(async () => {
  await nextTick()
  if (mySalaryInfo.value) {
    show.value = mySalaryInfo.value.show
  } else {
    console.log('mySalaryInfo is not ready')
  }
})
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
