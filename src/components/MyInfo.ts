import { reactive, ref, toRef, toRefs } from 'vue'

export default function () {
  const userinfo = reactive({
    age: 18,
    gender: 'male',
    job: 'devops',
    skills: ['js', 'css', 'html'],
  })

  const { age, skills } = toRefs(userinfo)

  const newskill = ref('')

  function addNewskill() {
    if (newskill.value) {
      userinfo.skills.push(newskill.value)
      newskill.value = ''
    }
  }

  return { userinfo, age, skills, newskill, addNewskill }
}
