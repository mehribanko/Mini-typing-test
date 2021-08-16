const wording=['Today I bought a raincoat and wore it on a sunny day.', 'When he asked her favorite number, she answered without hesitation that it was diamonds.', 'Do you love coding as much as I do?', "I want a giraffe, but I'm a turtle eating waffles.", "She lived on Monkey Jungle Road and that seemed to explain all of her strangeness.", "He stomped on his fruit loops and thus became a cereal killer.", 'Pink horses galloped across the sea.'];

const message=document.querySelector('.message');
const playerText=document.querySelector('textarea');
const button=document.querySelector('button');

let startTime, endTime;

button.addEventListener('click', function(){
    if(this.innerText=='Start'){
        playerText.disabled=false;
        playGame();
    }else if(this.innerText=='Done'){
        playerText.disabled=true;
        button.innerText='Start';
        endPlay();
    }
})

function playGame(){
    let randomNumber=Math.floor(Math.random()*wording.length);
    message.innerText=wording[randomNumber];
    let date=new Date();
    startTime=date.getTime();
    console.log(startTime);
    button.innerText='Done';

}

function endPlay(){
    let date=new Date();
    endTime=date.getTime();
    let totalTime=((endTime-startTime)/1000);
    console.log(totalTime);
    let str=playerText.value;
    let wordCount=wordCounter(str);
    let speed=Math.round((wordCount/totalTime)*60);
    console.log(speed);
    let finalMessage='You typed at '+speed+' per minute';   
    finalMessage+='<br>'+compareWords(message.innerText, str);
    message.innerHTML=finalMessage;
}

function wordCounter(strWords){
    let response=strWords.split(' ').length;
    console.log(response);
    return response;

}

function compareWords(str1, str2){
    let words1=str1.split(' ');
    let words2=str2.split(' ');
    let cnt=0;
    words1.forEach(function(item,index){
        if(item==words2[index]){
            cnt++;
        }
    })
    return(cnt+' correct out of '+words1.length);
}