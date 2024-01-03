

export class Ui{
    constructor(){}

    showCuestion(text){
        const title=document.getElementById('question');
        title.innerText=text;
    }
    showChoices(choices,callback){
        const choicesConta=document.getElementById('choices');
        choicesConta.innerHTML=''
        for (let i = 0; i < choices.length; i++) {
            const btn=document.createElement('button');
            btn.innerText=choices[i]
            btn.className='btn'
            btn.addEventListener('click',()=>{
                callback(choices[i])
            })
            choicesConta.append(btn)      
        }
    }
    showScore(score){
        const end =`
        <h1>Result</h1>
        <h2>Your score: ${score}</h2>`;
        const ele=document.getElementById('quiz');
        ele.innerHTML=end;
    }

    showProgress(current,total){
        const footer=document.getElementById('progress');
        footer.innerHTML=`Question ${current} de ${total}`

    }
}