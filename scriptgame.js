const alexandre = document.querySelector('.alexandre')
const fakepiskel = document.querySelector('.fakepiskel')
const jump = () => {
    alexandre.classList.add('jump')
    
    setTimeout(()=>{

        alexandre.classList.remove('jump')

    }, 500)
}

const loop = setInterval(() => {

        const fakepiskelposition = fakepiskel.offsetLeft;
        const alexandreposition = window.getComputedStyle(alexandre).bottom.replace('px','')

        
        if(fakepiskelposition<= 120 && fakepiskelposition >0 && alexandreposition < 80){

            fakepiskel.style.animationn = 'none';
            fakepiskel.style.left = `${fakepiskelposition}px`;

            alexandre.style.animationn = 'none';
            alexandre.style.bottom = `${alexandreposition}px`;

            alexandre.src ='./imagens/gameover.png'

            clearInterval(loop)
        }
},10)

document.addEventListener('keydown', jump)