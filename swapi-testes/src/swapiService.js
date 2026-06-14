const BASE_URL = 'https://swapi.info/api';

async function fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
        throw new Error(`Erro ao consumir SWAPI no endpoint: ${endpoint}`);
    }
    return response.json();
}

export async function getFilms() {
    return fetchData('films');
}

export async function getPeople() {
    return fetchData('people');
}

export async function getPersonById(id) {
    return fetchData(`people/${id}`);
}

export async function getPlanets() {
    return fetchData('planets');
}

export async function getStarships() {
    return fetchData('starships');
}