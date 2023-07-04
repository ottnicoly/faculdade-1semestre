
const generateButton = document.getElementById('generateButton');
const imageContainer = document.getElementById('imageContainer');

generateButton.addEventListener('click', function () {
    const apiUrl = 'http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data[0];

            // Remover imagem anterior, se existir
            while (imageContainer.firstChild) {
                imageContainer.firstChild.remove();
            }

            // Criar um elemento de imagem e definir a URL como a origem
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;

            // Adicionar a imagem ao container
            imageContainer.appendChild(imageElement);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
});
