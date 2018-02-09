import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CarnavalProvider {
  private PATH = 'carnaval/';
  // private PATH = 'contacts/';

  constructor (private db: AngularFireDatabase){
  }

  getAll(){
    return this.db.list(this.PATH, ref => ref.orderByChild('0'))
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })
  }

  get(key: string) {
   return this.db.object(this.PATH + key).snapshotChanges()
     .map(c => {
       return { key: c.key, ...c.payload.val() };
     });
 }

}
