import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[] = [];

  constructor() {
    const list1 = new List('Hacer tarea');
    const list2 = new List('Hacer los deberes');

    this.lists.push(list1, list2);
    
   }
}
