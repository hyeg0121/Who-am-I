let id = parseInt(new URL(location.href).searchParams.get('id'));



const questionSpan = document.getElementsByClassName("question")[0].getElementsByTagName("span")[0];
questionSpan.innerHTML = data.question[id].content;

const choiceDiv = document.getElementsByClassName("choice")[0];

const body = document.getElementsByTagName('body')[0];
body.style.backgroundImage = `url('../images/classroom.png')`

const choiceItem = document.getElementsByClassName('choice-item');
choiceItem
for(let item of choiceItem){
    item.onclick = () => {
        id++;
        window.open(`choice4.html?id=${id}`, '_top');
    };
}

setTimeout(()=> {
    choiceDiv.style.display = `flex`; 
    console.log('실행');
}, 3000);

