import { describe, it, expect } from 'vitest';
import {
    removeTask,
    filterTasks,
    countTasks,
    countCompleted,
    countPending,
    createTask,
    validatePriority,
    filterByPriority
} from '../src/taskManager.js';

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

describe('Exercício 4 - Prioridade das Tarefas', () => {
    describe('createTask com Priority', () => {
        it('deve criar uma tarefa com a prioridade informada', () => {
            const task = createTask('Estudar TDD', 'high');
            expect(task).toHaveProperty('priority', 'high');
        });

        it('deve definir a prioridade como "medium" por padrão se não for informada', () => {
            const task = createTask('Malhar kettlebell');
            expect(task).toHaveProperty('priority', 'medium');
        });
    });

    describe('validatePriority', () => {
        it('deve retornar true para prioridades válidas', () => {
            expect(validatePriority('low')).toBe(true);
            expect(validatePriority('medium')).toBe(true);
            expect(validatePriority('high')).toBe(true);
        });

        it('deve retornar false para prioridades inválidas', () => {
            expect(validatePriority('urgente')).toBe(false);
            expect(validatePriority(null)).toBe(false);
        });
    });

    describe('filterByPriority', () => {
        const mockTasks = [
            { id: 1, title: 'Tarefa 1', completed: false, priority: 'high' },
            { id: 2, title: 'Tarefa 2', completed: false, priority: 'low' },
            { id: 3, title: 'Tarefa 3', completed: false, priority: 'high' },
        ];

        it('deve filtrar as tarefas corretamente pela prioridade informada', () => {
            const result = filterByPriority(mockTasks, 'high');
            expect(result).toHaveLength(2);
            expect(result.every(t => t.priority === 'high')).toBe(true);
        });

        it('deve retornar array vazio se nenhuma tarefa corresponder à prioridade', () => {
            const result = filterByPriority(mockTasks, 'medium');
            expect(result).toHaveLength(0);
        });
    });
});