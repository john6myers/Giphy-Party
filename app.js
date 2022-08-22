console.log("Let's get this party started!");

const search = document.getElementById("searchGiphy");
const form = document.getElementById('form');
const newImgDiv = document.getElementById('newImgArea');
const apiKey = 'eManTqoqrDFCzp1CIXSS8CCIU3VcbVVS';


async function getGipApi(){
    const res = await axios.get('https://api.giphy.com/v1/gifs/search?', {params: {
        q: search.value,
        api_key: apiKey
    }})
    const newImg = document.createElement('img');

    newImg.src = `${res.data.data[Math.floor(Math.random() * 50)].images.original.url}`;
    newImgDiv.append(newImg);
    console.log(res);
}

addEventListener('submit', (e) => {
    e.preventDefault();
    getGipApi();
    form.reset();
    
});

document.getElementById('remove').addEventListener('click', () => {
    // newImg.remove();
    newImgDiv.innerHTML = '';
})