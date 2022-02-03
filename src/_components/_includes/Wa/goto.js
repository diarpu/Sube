function goTop(){
    const btnGoTop = document.querySelector('.btn-top');

    window.addEventListener('scroll', ()=>{
        const positionY = window.scrollY;
        if(positionY > 700){
            btnGoTop.classList.add('go-top');
        }
        else{
            btnGoTop.classList.remove('go-top');
        }
    })
}

goTop()