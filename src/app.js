import axios from "axios";

const listOfNames = document.getElementById("list-of-names");


async function getDataMaps() {
    const URI = 'https://restcountries.com';
    const ENDPOINT = '/v2/all';

    try {

        const result = await  axios.get(URI +ENDPOINT )
        console.log(result)

        result.data.map((input)=> {
            console.log(input.name)
            console.log(input.population)
            console.log(input.region)
            function color() {
                if (input.region === "Asia"){
                    const asia = "Red";
                    item.setAttribute('class', 'country-name-red')
                }
                if (input.region === "Europe"){
                    item.setAttribute('class', 'country-name-yellow')
                }
                if (input.region === "Africa"){
                    item.setAttribute('class', 'country-name-blue')
                }
                if (input.region === "Americas"){
                    item.setAttribute('class', 'country-name-green')
                }
                if (input.region === "Oceania"){
                    item.setAttribute('class', 'country-name-purple')
                }
            }


            const item = document.createElement('li');
            color()
            item.innerHTML = `<p>${input.name} </p>
            <p>Has a population of ${input.population} people<p>`
            listOfNames.appendChild(item);
        })







    }catch ( err ) {
        console.log( err )
        const errorMessage = document.getElementById('error-message')
        if ( err.result.status === 404 ) {
            errorMessage.textContent = "Page not found 404"
        }
    }
}
getDataMaps()


