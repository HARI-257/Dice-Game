let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let result = document.querySelector('h1');
let Playerscore = document.querySelector('.pscore');
let Computerscore = document.querySelector('.cscore');



img1.setAttribute('src', `images/dice${randomNumber1}.png`);
img2.setAttribute('src', `images/dice${randomNumber2}.png`);

if (randomNumber1 < randomNumber2){
	result.textContent = "Computer Won";

}
else if (randomNumber1 > randomNumber2){
	result.textContent = "You Won";
}
else{
	result.textContent = "Draw";
}

