import { describe, it, expect } from 'vitest';
import { removeTask } from '../src/taskManager.js';

describe('removeTask', () => {
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