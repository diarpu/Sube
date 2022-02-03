let wrapper = document.getElementsByClassName('wrapper');
let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('svg');

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', ()=>{
        if(parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            // toggles[i].style.color = "#00a344";
            // icons[i].style = "transform: rotate(45deg)";
            // icons[i].style.fill = "#00a344";
            // wrapper[i].style.background = "rgba(0, 163, 68, 0.02)";
            toggles[i].classList.add('faq--active');
            icons[i].classList.add('faq--active');
            wrapper[i].classList.add('faq--active');
        }
        else{
            contentDiv[i].style.height = "0px";
            // toggles[i].style.color = "#333333";
            // icons[i].style = "transform: rotate(0deg)";
            // icons[i].style.fill = "#00a344";
            // wrapper[i].style.background = "#fff";
            toggles[i].classList.remove('faq--active');
            icons[i].classList.remove('faq--active');
            wrapper[i].classList.remove('faq--active');
        }

        for (let j = 0; j < contentDiv.length; j++) {
            if(j !== i){
                contentDiv[j].style.height = "0px";
                // toggles[j].style.color = "#333333";
                // icons[j].style = "transform: rotate(0)";
                // icons[j].style.fill = "#00a344";
                // wrapper[j].style.background = "#fff";
                toggles[j].classList.remove('faq--active');
                icons[j].classList.remove('faq--active');
                wrapper[j].classList.remove('faq--active');
            }  
        }
    })

}