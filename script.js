// Full Stack Layer Demo
function showLayer(layer) {
    const stackDemo = document.getElementById('stackDemo');
    let content = '';

    if(layer === 'frontend') {
        content = '<strong>Frontend:</strong> HTML, CSS, JavaScript, React/Vue, User Interface, UX';
    } else if(layer === 'backend') {
        content = '<strong>Backend:</strong> Node.js, Express, APIs, Server Logic, Authentication';
    } else if(layer === 'database') {
        content = '<strong>Database:</strong> SQL/NoSQL Databases, MongoDB, MySQL, PostgreSQL';
    }

    stackDemo.innerHTML = `<p>${content}</p>`;
}

// Bootstrap Alert Demo
function showAlert() {
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        This is a Bootstrap alert demo!
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
}

// HTML Form Demo
document.getElementById('htmlDemo').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('demoName').value;
    const email = document.getElementById('demoEmail').value;
    const output = document.getElementById('htmlOutput');
    output.innerHTML = `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>`;
});

// JavaScript Task List Demo
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const task = taskInput.value.trim();

    if(task) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function saveToStorage() {
    const tasks = Array.from(document.querySelectorAll('#taskList li'))
        .map(li => li.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Tasks saved!');
}

function loadFromStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    if(tasks.length === 0) {
        taskList.innerHTML = '<li class="list-group-item text-muted">No tasks yet. Add one above!</li>';
    } else {
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = task;
            taskList.appendChild(li);
        });
    }
}

function clearTasks() {
    localStorage.removeItem('tasks');
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '<li class="list-group-item text-muted">No tasks yet. Add one above!</li>';
}
