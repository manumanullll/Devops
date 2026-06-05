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

export const filterTask = filterTasks;