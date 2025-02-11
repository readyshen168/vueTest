import { ref } from 'vue'

export default function () {
  const nameInput = ref()

  function showNameInput() {
    console.log(nameInput)
    console.log(nameInput.value)
    console.log(nameInput.value.value)
  }
  const name = ref('roy')
  const salary = ref(13000)
  function addSalary() {
    salary.value = Number(salary.value) + 1000
    console.log(salary)
    showNameInput()
  }
  return { nameInput, name, salary, addSalary }
}
