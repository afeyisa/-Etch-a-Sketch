// for handling change number of box button

const topBtn = document.getElementById('top-button');
let length = 16;
topBtn.addEventListener('click',()=>{
    let userI = prompt('number of boxs');
    if (userI <= 64){
        length = userI
        createBoxs();

    }
    else{
        alert('box number should be less then 65')
    }

});


// adding element 
const conatainer = document.getElementById('conatainer');


const button  = document.createElement('button');

function createBoxs () {

    conatainer.innerHTML ="";

    for(let i = 0; i<length ;i++){
        const div1 = document.createElement('div');
        div1.className='innerdiv';
        for(let j=0; j<length;j++){
          
            const node = document.createElement('button');
            node.setAttribute('style'," width:100% ;margin :0px;border-color:rgb(214, 189, 189);background-color: rgb(137, 146, 137);");
           
            node.addEventListener("mouseover", (e) => {
                let r = Math.random() * 255;
                let g = Math.random() * 255;
                let b = Math.random() * 255;
               e.target.style.background = `rgb(${r} ${g} ${b})`;
            });
            
            div1.appendChild(node);
        }
        conatainer.appendChild(div1);
    
    }

}


createBoxs();


