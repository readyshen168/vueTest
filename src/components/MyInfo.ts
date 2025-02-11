import { reactive, ref, toRef } from 'vue'

export default function () {
  const userinfo = reactive({
    age: 18,
    gender: 'male',
    job: 'devops',
    skills: ['js', 'css', 'html'],
  })

  const age = toRef(userinfo, 'age')
  const skills = toRef(userinfo, 'skills')

  const newskill = ref('')
  const show = ref(false)

  function addNewskill() {
    if (newskill.value) {
      userinfo.skills.push(newskill.value)
      newskill.value = ''
    }
  }

  function showInfo() {
    show.value = !show.value
    console.log(userinfo)
  }
  return { userinfo, age, skills, newskill, show, addNewskill, showInfo }
}
