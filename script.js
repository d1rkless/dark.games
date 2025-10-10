// Get elements
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const bgUpload = document.getElementById('bgUpload');
const uploadBgBtn = document.getElementById('uploadBgBtn');
const resetBgBtn = document.getElementById('resetBgBtn');

// Toggle the dropdown menu
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Click "Upload Image" in submenu
uploadBgBtn.addEventListener('click', () => {
    bgUpload.click();
});

// Upload background image
bgUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            document.body.style.backgroundImage = `url(${reader.result})`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundRepeat = 'no-repeat';
        };
        reader.readAsDataURL(file);
    }
});

// Reset background to default
resetBgBtn.addEventListener('click', () => {
    document.body.style.backgroundImage = 'none';
});
