import { Injectable, inject } from '@angular/core';

import { Firestore, doc, setDoc } from '@angular/fire/firestore'; // 🔹 Lägg till denna import!
import { nanoid } from 'nanoid';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private firestore = inject(Firestore);

  constructor() {}

  // 🔹 Metod för att lägga till en ny collection
  async addNewCollection() {
    const docRef = doc(this.firestore, 'workouts', nanoid(5));
    await setDoc(docRef, { createdAt: new Date() });

    console.log('🔥 Collection skapad!');
  }
}
