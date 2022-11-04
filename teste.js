const loop = setInterval(() => {

    const fakepiskelposition = fakepiskel.offsetLeft;
    const alexandreposition = window.getComputedStyle(alexandre).bottom.replace('px','')

    console.log(fakepiskelposition)
    
    if(fakepiskelposition<= 120 && fakepiskelposition >0 && alexandreposition < 80){

        fakepiskel.style.animationn = 'none';
        fakepiskel.style.left = `${fakepiskelposition}`;
    }
},10)