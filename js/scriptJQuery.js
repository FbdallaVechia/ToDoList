$(document).ready(() => {
    const taskInput = $('#taskInput');
    const addTaskBtn = $('#addTaskBtn');
    const taskList = $('#taskList');
    const emptyTasks = $('#emptyTasks');

    addTaskBtn.on('click', () => {
        const taskText = taskInput.val().trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.val('');
            taskInput.focus();
        };

    })

    taskInput.on('keydown', (event) => {
        if (event.key === 'Enter') {
            addTaskBtn.click();
        }
    });

    function addTask(text) {
        const li = $('<li>').addClass('list-group-item w-100 d-flex align-items-center');
        li.html(`
        <div class="d-flex align-items-center w-100">
            <label class="d-flex align-items-center me-3" style="cursor: pointer;">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            </label>
            <span class="flex-grow-1 text-break">${text}</span>
            <button class="btn btn-sm btn-danger btn-delete">Excluir</button>
    </div>
         `);

        li.find('.form-check-input').on('click', () => {
            li.find('span').toggleClass('text-decoration-line-through')
        });

        li.find('.btn-delete').on('click', () => {
            li.remove();
        });

        taskList.append(li);

    };

    emptyTasks.on('click', ()=>{
        taskList.empty();
    })
})