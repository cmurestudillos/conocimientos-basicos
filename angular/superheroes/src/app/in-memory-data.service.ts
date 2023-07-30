import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Spiderman' },
      { id: 12, name: 'Hulk' },
      { id: 13, name: 'Capitan America' },
      { id: 14, name: 'Iron Man' },
      { id: 15, name: 'Vision' },
      { id: 16, name: 'Thor' },
      { id: 17, name: 'Maquina de Guerra' },
      { id: 18, name: 'Viuda Negra' },
      { id: 19, name: 'Bruja Escarlata' },
      { id: 20, name: 'Halcon' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
