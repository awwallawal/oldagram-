let count = 0;
let likenumber1 = document.getElementById('like-number-1');
let heart1 = document.getElementById('heart-1');

heart1.addEventListener('click', function(){
 count +=1;
 likenumber1.textContent = count;
});


let number2 = 0;
let likenumber2 = document.getElementById('like-number-2');
let heart2 = document.getElementById('heart-2');

heart2.addEventListener('click', function(){
 number2 +=1;
 likenumber2.textContent = number2;
});


let number3 = 0;
let likenumber3 = document.getElementById('like-number-3');
let heart3 = document.getElementById('heart-3');

heart3.addEventListener('click', function(){
 number3 += 1; 
 likenumber3.textContent = number3;
});
