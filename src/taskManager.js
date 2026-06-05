let _nextId = 1;

export function removeTask(tasks, taskId) {
    return tasks.filter((task) => task.id !== taskId);
}

export function filterTasks(tasks, status) {
    switch (status) {
        case 'completed':
            return tasks.filter((task) => task.completed === true);
        case 'pending':
            return tasks.filter((task) => task.completed === false);
        case 'all':
        default:
            return [...tasks];
    }
}

export function countTasks(tasks) {
    return tasks.length;
}

export function countCompleted(tasks) {
    return tasks.filter((task) => task.completed === true).length;
}

export function countPending(tasks) {
    return tasks.filter((task) => task.completed === false).length;
}

export function createTask(title, priority = 'medium') {
    return {
        id: _nextId++,
        title: title.trim(),
        completed: false,
        priority: priority
    };
}

export function validatePriority(priority) {
    const validPriorities = ['low', 'medium', 'high'];
    return validPriorities.includes(priority);
}

export function filterByPriority(tasks, priority) {
    return tasks.filter((task) => task.priority === priority);
}

export function isDuplicate(tasks, title) {
    if (!title || typeof title !== 'string') return false;

    const formattedTitle = title.trim().toLowerCase();
    return tasks.some((task) => task.title.trim().toLowerCase() === formattedTitle);
}

export function addTask(tasks, title) {
    if (!title || typeof title !== 'string' || title.trim().length < 3) {
        throw new Error('Título inválido');
    }

    if (isDuplicate(tasks, title)) {
        throw new Error('Tarefa duplicada');
    }

    const newTask = createTask(title);
    return [...tasks, newTask];
}

export function sortTasks(tasks) {
    return [...tasks].sort((a, b) => Number(a.completed) - Number(b.completed));
}

export function searchTasks(tasks, query) {
    if (!query || query.trim() === '') {
        return [...tasks];
    }

    const formattedQuery = query.toLowerCase().trim();
    return tasks.filter((task) =>
        task.title.toLowerCase().includes(formattedQuery)
    );
}

export const filterTask = filterTasks;