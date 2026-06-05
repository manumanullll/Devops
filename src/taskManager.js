export function removeTask(tasks, taskId) {
    return tasks.filter(task => task.id !== taskId);
}