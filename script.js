
console.log('welcome to tic tak toe game');
var boxarr=document.getElementsByClassName('box');
console.log(boxarr)
var ox='x';
var count=0
var text=document.getElementsByClassName('text');
console.log(text)
var win=[
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [2,5,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]
]
var list=[]
function a(e){
    document.getElementById(e).innerText=ox
    if (ox !== ''){count=count+1}
    console.log(count)
    if (ox==='x'){
        ox='o'
    }
    else if (ox==='o'){
        ox='x'
    }
    if (count==9){
        document.getElementById('winners').innerText='Match Tie'
    }
    win.forEach(function(e){
        if ((list[e[0]]===list[e[1]]) &&(list[e[1]]===list[e[2]])){
            console.log(ox)
            if(ox==='o')
                {document.getElementById('winners').innerText='X wins'
                document.getElementById('gif').innerHTML='<div class="gif"></div>'
                ox=''
            }
            if(ox==='x')
                {document.getElementById('winners').innerText='O wins'
                document.getElementById('gif').innerHTML='<div class="gif"></div>'
                ox=''
            }
        }
    })
}
Array.from(boxarr).forEach(function(ele){
    list.push(ele.id)
    console.log(list)
})
Array.from(boxarr).forEach(function(element) {
    element.addEventListener('click', function(){
            if (element.innerText===''){
                for(i=0;i<9;i++){
                    if (element.id==list[i]){
                        list[i]=ox;
                        console.log(list)
                    }
                } 
                a(element.id);
                
        }
    });
  });
document.getElementById('button').addEventListener('click', function(){
    location.reload();
})



