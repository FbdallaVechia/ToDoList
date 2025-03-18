document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = ""; // Limpa o campo de entrada
        }
    });

    function addTask(text) {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "w-50", "mx-auto");

        li.innerHTML = `
            <span>${text}</span>
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <input class="form-check-input mx-3" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    <button class="btn btn-sm btn-delete">Excluir</button>
            </div>
        `;

        // Marcar como concluído
        li.querySelector(".form-check-input").addEventListener("click", () => {
            li.classList.toggle("text-decoration-line-through");
        });

        // Remover tarefa
        li.querySelector(".btn-delete").addEventListener("click", () => {
            li.remove();
        });

        taskList.appendChild(li);
    }
});
