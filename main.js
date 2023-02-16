 var input = document.querySelectorAll('.input-text');
 var button = document.querySelectorAll('.btn');
 var task_body = document.querySelectorAll('.body')
 var checked = document.querySelectorAll('.check_mark')
 var deleted = document.querySelectorAll('.delete')
 var clear = document.querySelectorAll('.clear')




button[0].addEventListener('click',function(){

    var div =document.createElement('div')
    div.classList="section"
    var btn_delete = document.createElement('button')
    btn_delete.classList = "delete"
    btn_delete.append("x")
    div.appendChild(btn_delete)
    
    

    var checked = document.createElement('input')
    checked.classList="check_mark"
    checked.type="checkbox"
    div.appendChild(checked)

    var text =document.createTextNode(input[0].value)
    var element = document.createElement('span');
    element.classList="text"
    element.append(text);
    div.appendChild(element)

    task_body[0].appendChild(div)

    
var deleted = document.querySelectorAll('.delete');

for( var i=0 ; i<deleted.length ;i++){
    deleted[i].onclick = function(){
        this.parentNode.remove();
}
}
if(task_body[0].children.length===0){
    clear[0].style.display='none'
}
else{
    clear[0].style.display='block'
}
})

task_body[0].addEventListener('click',function(event){
    if(event.target.type==='checkbox'){
         event.target.parentElement.classList.toggle('checked')
    }
})
if(task_body[0].children.length===0){
    clear[0].style.display='none'
}


clear[0].addEventListener('click',function(){

    for(var x=0;x<task_body[0].children.length;x++){
        task_body[0].children[x].style.display='none'
        // task_body[0].children[x].remove();
    }
    
     clear[0].style.display='none'
})
