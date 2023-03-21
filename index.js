let counttxt=document.getElementById('count');
let savetxt=document.getElementById('saved');
let count=0;
function increment(){
    count++;
    counttxt.innerText=count;
}
savetxt.innerText+='0';
function saveentry(){
    savetxt.textContent+=' - '+count;
    count=0;
    counttxt.textContent=0;
}