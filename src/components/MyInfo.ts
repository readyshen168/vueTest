import { reactive, ref } from 'vue'

export default function () {
  const userinfo = reactive({
    age: 18,
    gender: 'male',
    job: 'devops',
    skills: ['js', 'css', 'html'],
  })
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
  return { userinfo, newskill, show, addNewskill, showInfo }
}
