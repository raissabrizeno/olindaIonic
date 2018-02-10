import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CarnavalProvider {
  private PATH = 'Carnaval/';
  // private PATH = 'contacts/';

  constructor (private db: AngularFireDatabase){
  }

  getAll(){
    return this.db.list(this.PATH, ref => ref.orderByPriority())
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({
         // key: c.payload.key,
         // ...c.payload.val()
         key: c.payload.key,
         image: c.payload.child('0').val(),
         name: c.payload.child('1').val(),
         hours: c.payload.child('2').val(),
         aderess: c.payload.child('3').val(),
        }));
    })
  }

  get(key: string) {
   return this.db.object(this.PATH + key).snapshotChanges()
     .map(c => {
       return { key: c.key, ...c.payload.val() };
     });
 }

}
