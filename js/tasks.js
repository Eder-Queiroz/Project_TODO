
// criando as tasks

var tasks = [];

// gerar id
function idGenerator(){

    var timesTamp = new Date();
    var id = timesTamp.getHours().toString() +
             timesTamp.getMinutes().toString() +
             timesTamp.getSeconds().toString();

    return id;

}

function creatTask(){

    var taskDescription = document.querySelector('input[name=name]').value;

    if (!taskDescription || /^\s*$/.test(taskDescription)) {
        return
    }

    var task = {

        id: idGenerator(),
        data: {
            description: taskDescription
        }

    }

    tasks.push(task);

    updateScreen();

}

// craindo a lista dinamica para o create
function updateScreen(){

    var list = "<ul>";

    tasks.forEach((task=>{
        list += '<input onchange="changeStatus(this)" type="checkbox" name="checkTask" id=' + task.id + '>';
        list += '<label for=' + task.id + '><div class="checked"><div class="img_label"></div></div></label>'
        list += '<li class="item" id=' + task.id + '>' + task.data.description + '</li>';
        list += '<buttom class="img_cross_create" onclick="deleteTask(this)" id-data=' + task.id + '></buttom>';
        list += '<div class="line_li"></div>';
    }));

    list += '</ul>';

    document.querySelector('.create').innerHTML = list;
    document.querySelector('input[name=name]').value = '';

}

// deletar a tesk
function deleteTask(element){

    tasks = tasks.filter(task => task.id != element.getAttribute("id-data"));

    updateScreen();
}

// tarefa checked
function changeStatus(target){

        const selectLi = document.getElementsByClassName('item');

        for (i = 0; i < selectLi.length; i++) {
            if(selectLi[i].id == target.id){
                target.checked ? selectLi[i].style.textDecoration = 'line-through' : selectLi[i].style.textDecoration = 'none'
            }
          }

        

}