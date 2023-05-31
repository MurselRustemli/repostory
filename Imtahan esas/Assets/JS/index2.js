const crud_name = document.querySelector(".crud_name")
const crud_ikon = document.querySelector(".crud_ikon")
const crud_text = document.querySelector(".crud_text")
const crud_submit = document.querySelector(".crud_submit")

crud_submit.addEventListener("click", function (e) {
  e.preventDefault()
  fetch('http://127.0.0.1:5501/mb.json', {
    Method: 'post',
    Headers: {
      accept: 'application.json',
      'Content-Type': 'application/json'
    },
    Body: JSON.stringify({
      i: crud_ikon.value,
      name: crud_name.value,
      text: crud_text.value,
    }),
    Cache: 'default'
  })
  crud_name.value = ""
  crud_ikon.value = ""
  crud_text.value = ""
})