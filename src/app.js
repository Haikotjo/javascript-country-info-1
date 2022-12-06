import axios from "axios";

const listOfNames = document.getElementById("list-of-names");
const URI = 'https://restcountries.com';

async function getDataMaps() {
    const ENDPOINT = '/v2/all';

    try {

        const result = await  axios.get(URI +ENDPOINT)
        // console.log(result)

        result.data.map((name)=> {
            console.log(name.name)
            const item = document.createElement('li');
            item.setAttribute('class', 'country-name')
            item.textContent = name.name
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


