import { describe, it, expect } from 'vitest';
import { removeTask, filterTasks, countTasks, countCompleted, countPending } from '../src/taskManager.js';

describe('Contagens de Tarefas', () => {
    const mockTasks = [
        { id: 1, title: 'Tarefa 1', completed: true },
        { id: 2, title: 'Tarefa 2', completed: false },
        { id: 3, title: 'Tarefa 3', completed: false },
    ];

    it('deve retornar 0 para lista vazia em todas as funções de contagem', () => {
        expect(countTasks([])).toBe(0);
        expect(countCompleted([])).toBe(0);
        expect(countPending([])).toBe(0);
    });

    it('countTasks deve retornar o total correto de tarefas', () => {
        expect(countTasks(mockTasks)).toBe(3);
    });

    it('countCompleted deve contar corretamente apenas as concluídas', () => {
        expect(countCompleted(mockTasks)).toBe(1);
    });

    it('countPending deve contar corretamente apenas as pendentes', () => {
        expect(countPending(mockTasks)).toBe(2);
    });
});