const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('image');
const imageIndexes = [0,1,2,3];
const selectedIndex = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `/img/liverpool-${i}.jpg`;
    image.alt = `An image from my trip to Anfield`;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `/img/liverpool-${i}.jpg`;
    })

    gallery.appendChild(image);
});

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
})