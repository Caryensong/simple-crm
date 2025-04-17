import { inject, Injectable, OnDestroy } from '@angular/core';
import { Unsubscribe } from '@angular/fire/auth';
import { addDoc, collection, CollectionReference, DocumentData, Firestore, onSnapshot } from '@angular/fire/firestore';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements OnDestroy{
  private firestore = inject(Firestore);
  private unsubscribe?: () => void; 
  public userList: User[] = [];

  constructor() {
    this.subscribeToUserCollection(); // Live-Daten beim Start laden
  }

  ngOnDestroy(): void  {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }


  private subscribeToUserCollection(): void {
    const userRef= collection(this.firestore, "user");
    this.unsubscribe = onSnapshot(userRef, (snapshot) => {
      this.userList = snapshot.docs.map(doc => {
        const data = doc.data();
        return new User(data);
      });
      console.log('Live User-List:', this.userList);
    });
  }
  
  async addToCollection(path: string, data: any): Promise<any> {
    const colRef = collection(this.firestore, path);
    return await addDoc(colRef, data);
  }

}
