import { ref } from 'vue'

export default function () {
  const name = ref('roy')
  const salary = ref(13000)
  function addSalary() {
    salary.value = Number(salary.value) + 1000
    console.log(salary)
  }
  return { name, salary, addSalary }
}
