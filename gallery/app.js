const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('image');
const imageIndexes = [0,1,2,3,4,5,6,7,8,9,10,11];
const selectedIndex = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `https://ik.imagekit.io/eamonnd1/liverpool/tr:w-600/liverpool-${i}.jpg`;
    // image.src = `/img/liverpool-${i}.jpg`;
    image.alt = `An image from my trip to Anfield`;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `https://ik.imagekit.io/eamonnd1/liverpool/tr:w-600/liverpool-${i}.jpg`;
    })

    gallery.appendChild(image);
});

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
})

// https://ik.imagekit.io/eamonnd1/liverpool/liverpool-11