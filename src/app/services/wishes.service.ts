import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: any [] = [];

  constructor() {
    console.log('Servicio inicializado');
   }
}
