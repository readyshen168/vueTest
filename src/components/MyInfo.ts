import { ref } from 'vue'

export default function () {
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
  return { userinfo, newskill, show, addNewskill, showInfo }
}
