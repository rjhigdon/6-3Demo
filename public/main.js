const btn = document.querySelector('button')

const clickHandler = () => {
    axios
    .get('/api/cat')
    .then((res) => alert(res.data))
    .catch((thesePaws) => alert ("There was Turbulence"))
}

btn.addEventListener('click', clickHandler)