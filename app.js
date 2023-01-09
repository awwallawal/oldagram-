let count = 0;
let likenumber = document.getElementById('like-number');
let heart = document.getElementById('heart');

heart.addEventListener('click', function(){
 count +=1;
 likenumber.textContent = count;
})