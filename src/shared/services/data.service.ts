import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/'; 
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fireStore:AngularFirestore) { }

  getItems(collectionName: string): Observable<any[]> {
    return this.fireStore
      .collection(collectionName)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data:Object = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  addItem(collectionName: string, data: any): Observable<any> {
    const promise = this.fireStore.collection(collectionName).add(data);
    return from(promise);
  }
}
