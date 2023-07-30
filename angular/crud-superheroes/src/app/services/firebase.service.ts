// Importamos Dependencias
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })

export class FirebaseService {
  // Utilizaremos la colección 'personajes' creada en nuesta BBDD de Firebase
  // para nuestras funciones

  // Iniciamos el servicio 'AngularFirestore'
  constructor(public db: AngularFirestore) {}

  // Funcion para obtener personaje
  getPersonaje(nombreKey) {
    return this.db.collection('personaje').doc(nombreKey).snapshotChanges();
  }

  // Funcion para actualizar datos del personaje
  updatePersonaje(nombreKey, value) {
    value.nombreToSearch = value.nombre.toLowerCase();
    return this.db.collection('personaje').doc(nombreKey).set(value);
  }

  // Funcion para eliminar personaje
  deletePersonaje(nombreKey) {
    return this.db.collection('personaje').doc(nombreKey).delete();
  }

  // Funcion para obtener listados todos los personajes
  getAll() {
    return this.db.collection('personaje').snapshotChanges();
  }

  // Funcion para buscar personajes, segun vamos introduciendo caracteres
  // el buscador actua interactivamente
  searchPersonajes(searchValue) {
    return this.db.collection('personaje', ref => ref.where('nombreToSearch', '>=', searchValue)
      .where('nombreToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges();
  }

  // Funcion para añadir personajes nuevos
  addPersonaje(value) {
    return this.db.collection('personaje').add({
      nombre: value.nombre,
      nombreToSearch: value.nombre.toLowerCase()
    });
  }
}
