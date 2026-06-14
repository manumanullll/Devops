import { describe, it, expect } from 'vitest';
import { getFilms, getPeople, getPersonById, getPlanets, getStarships } from '../src/swapiService.js';

describe('Testes de Integração com a Star Wars API (SWAPI)', () => {

    it('deve retornar a lista de filmes com as propriedades corretas', async () => {
        const films = await getFilms();
        expect(Array.isArray(films)).toBe(true);
        expect(films.length).toBeGreaterThan(0);
        expect(films[0]).toHaveProperty('title');
        expect(films[0]).toHaveProperty('episode_id');
        expect(films[0]).toHaveProperty('director');
    });

    it('deve retornar a lista de personagens e validar o Luke Skywalker', async () => {
        const people = await getPeople();
        expect(Array.isArray(people)).toBe(true);
        expect(people[0].name).toBe('Luke Skywalker');
        expect(people[0]).toHaveProperty('height');
        expect(people[0]).toHaveProperty('gender');
    });

    it('deve buscar um personagem específico com sucesso pelo ID', async () => {
        const person = await getPersonById(1);
        expect(person.name).toBe('Luke Skywalker');
        expect(person.hair_color).toBe('blond');
        expect(person.skin_color).toBe('fair');
    });

    it('deve retornar a lista de planetas e conter Tatooine', async () => {
        const planets = await getPlanets();
        expect(Array.isArray(planets)).toBe(true);
        expect(planets.length).toBeGreaterThan(0);
        expect(planets[0].name).toBe('Tatooine');
        expect(planets[0]).toHaveProperty('climate');
        expect(planets[0]).toHaveProperty('terrain');
    });

    it('deve retornar as naves estelares e conter a Millennium Falcon', async () => {
        const starships = await getStarships();
        expect(Array.isArray(starships)).toBe(true);
        const falcon = starships.find(ship => ship.name === 'Millennium Falcon');
        expect(falcon).toBeDefined();
        expect(falcon.model).toContain('YT-1300');
    });

    it('deve lançar um erro tratável se o ID do personagem for inexistente', async () => {
        // ID absurdamente alto para forçar o HTTP 404 da API externa
        await expect(getPersonById(999999)).rejects.toThrow();
    });
});