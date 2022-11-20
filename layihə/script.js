document.querySelector('#push').onclick = function(){
    if(document.querySelector('.new-input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <p id="taskname">
                    ${document.querySelector('.new-input').value}
                </p>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        document.querySelector(".new-input").value  = '';

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

      

 
    }
   
}

document.querySelector(".delete-1").addEventListener("click",function(){
    document.querySelector(".new-input").value  = '';
    // console.log('Hello');
})