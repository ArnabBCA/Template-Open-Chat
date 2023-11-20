const right = document.getElementById('right');
const back = document.getElementById('back');
back.addEventListener('click', () => {
    right.classList.toggle('active');
});