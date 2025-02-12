import { ref } from 'vue'

export default function () {
  const nameInput = ref()
  const name = ref('roy')
  const salary = ref(15000)
  const show = ref(false)

  function showNameInput() {
    console.log(nameInput)
    console.log(nameInput.value)
    console.log(nameInput.value.value)
  }
  function addSalary() {
    salary.value = Number(salary.value) + 1000
    console.log(salary)
    //showNameInput()
  }
  function showInfo() {
    show.value = !show.value
  }
  return { nameInput, name, salary, addSalary }
}
