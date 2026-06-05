import { describe, it, expect } from 'vitest';
import { removeTask, filterTasks } from '../src/taskManager.js';

describe('removeTask', () => {

    describe('filterTasks', () => {
        const mockTasks = [
            { id: 1, title: 'Tarefa 1', completed: true },
            { id: 2, title: 'Tarefa 2', completed: false },
            { id: 3, title: 'Tarefa 3', completed: false },
        ];

        it('deve retornar todas as tarefas com o filtro "all"', () => {
            const result = filterTasks(mockTasks, 'all');
            expect(result).toHaveLength(3);
            expect(result).not.toBe(mockTasks); // Garante imutabilidade
        });

        it('deve retornar apenas as tarefas concluídas com o filtro "completed"', () => {
            const result = filterTasks(mockTasks, 'completed');
            expect(result).toHaveLength(1);
            expect(result[0].id).toBe(1);
        });

        it('deve retornar apenas as tarefas pendentes com o filtro "pending"', () => {
            const result = filterTasks(mockTasks, 'pending');
            expect(result).toHaveLength(2);
            expect(result.every(t => !t.completed)).toBe(true);
        });

        it('deve retornar todas as tarefas se o filtro for desconhecido (default)', () => {
            const result = filterTasks(mockTasks, 'invalido');
            expect(result).toHaveLength(3);
        });

        it('deve retornar array vazio se a lista de tarefas estiver vazia', () => {
            const result = filterTasks([], 'all');
            expect(result).toHaveLength(0);
        });
    });

    it('deve remover a tarefa pelo ID e retornar um NOVO array (imutabilidade)', () => {
        const tasks = [
            { id: 1, title: 'Estudar', completed: false },
            { id: 2, title: 'Dormir', completed: false }
        ];
        const updated = removeTask(tasks, 1);

        expect(updated).toHaveLength(1);
        expect(updated[0].title).toBe('Dormir');
        expect(updated).not.toBe(tasks); // Garante que é um array novo
    });

    it('deve retornar a lista completa se o ID não existir', () => {
        const tasks = [{ id: 1, title: 'Estudar', completed: false }];
        const updated = removeTask(tasks, 999);
        expect(updated).toHaveLength(1);
    });

    it('deve retornar array vazio ao remover de lista vazia', () => {
        const updated = removeTask([], 1);
        expect(updated).toHaveLength(0);
    });
});