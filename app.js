// Event listener
const dogBtn = document.getElementById('dog-btn').addEventListener('click', getDogs);
let output = document.getElementById('imageInsert');

// Functions
async function getDogs() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await response.json()
  console.log(data.message)
    

    return output.innerHTML = `<img src="${data.message}" class="img-fluid">`;
}

const img = document.querySelector('img').style.width = '300px';
img.style.height = 'auto';