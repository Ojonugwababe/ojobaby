var  button=document.getElementById('open')
var target=document.getElementById('target')


button.addEventListener('click', () =>{
    if(target.style.height == '0px'){
        target.style.height='fit-content';
        target.style.display='block'
       

    }else{
        target.style.height= '0px';
        target.style.display='none'

    }
})