
const generateButton = document.getElementById('generateButton');
const imageContainer = document.getElementById('imageContainer');

generateButton.addEventListener('click', function () {
    const apiUrl = 'http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data[0];

            while (imageContainer.firstChild) {
                imageContainer.firstChild.remove();
            }

            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;

            imageContainer.appendChild(imageElement);
        })
});
