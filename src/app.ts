const compteur = document.querySelector('#compteur')
let i = 0;

const increment = (e: Event) => {
    e.preventDefault()
    i++
    const span = compteur?.querySelector('span')
    if (span) {
        span.innerText = i.toString()
    }
    
}

//exemple of narrowing
function printIn(id: string | number){
    if (typeof id === "number"){
        console.log((id*3).toString())
    } else {
        console.log(id.toUpperCase())
    }
}

compteur?.addEventListener('click', increment)