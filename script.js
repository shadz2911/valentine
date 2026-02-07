const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const valentineImg = document.getElementById('shawy1img');
const message = document.getElementById('message');

let noCount = 0;

const images = ['shawy2.jpeg', 'hotpot.jpeg', 'random.jpeg'];
const messages = [
    'Are you sure? 🥺',
    'Come on I promise I will take you hotpot 💔',
    'LAAAASSST CHANCE 😠. Think of all the good times we had together 💝'
];

noBtn.addEventListener('click', function() {
    valentineImg.src = images[noCount];
    message.textContent = messages[noCount];
    
    noCount++;
    
    if (noCount >= 3) {
        noBtn.style.display = 'none';
    }
});

yesBtn.addEventListener('click', function() {
    message.textContent = 'WOOOOOOOOOOOHOOOOOOOOOOOOOOOOOO I knew you would say yes 😆';
    document.body.style.backgroundImage = 'url(collage.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    valentineImg.style.display = 'none';
    document.querySelector('.button-container').style.display = 'none';
    document.querySelector('h1').style.display = 'none'
    
    message.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    message.style.padding = '20px';
    message.style.borderRadius = '15px';
    message.style.display = 'inline-block';

});

