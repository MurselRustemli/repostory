const nav_btn=document.querySelector(".nav_btn")
const nav_click=document.querySelector(".nav_click")
const nav_exit=document.querySelector(".nav_exit")

nav_btn.addEventListener("click",function () {
    nav_click.style.width="50%"
})

nav_exit.addEventListener("click",function () {
    nav_click.style.width="0"
})


fetch("http://127.0.0.1:5501/mb.json")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.posts);
        let a = data.posts
        a.forEach(element => {
            console.log(element)
            const crud_carts = document.querySelector(".crud_carts")
            const div = document.createElement("div")
            const i = document.createElement("i")
            const h3 = document.createElement("h3")
            const p = document.createElement("p")
            i.className = element.i
            h3.innerText = element.name
            p.innerText = element.text
            div.append(i, h3, p)
            crud_carts.append(div)
            div.className="crud_div"

        });
    })