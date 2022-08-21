console.log("Let's get this party started!");

const search = document.getElementById("searchGiphy");
const form = document.getElementById('form');
const newImgDiv = document.getElementById('newImgArea');
const apiKey = 'eManTqoqrDFCzp1CIXSS8CCIU3VcbVVS';


async function getGipApi(){
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search.value}&limit=25&offset=0&rating=g&lang=en`)
    const newImg = document.createElement('img');

    newImg.src = `${res}`;
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