var li =document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='HELLO';
li[2].style.color='green';
li[4].style.backgroundColor='green'

for(var i=0;i<li.length-1;i++){
    li[i].style.background='pink';
}