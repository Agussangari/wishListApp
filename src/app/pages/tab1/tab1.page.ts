import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public wishesService: WishesService,
              private router: Router, private alertCtrl: AlertController) {

               }
  async addList(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'title',
          type:'text',
          placeholder: 'Nombre de la lista'
      }
    ],
      buttons: [
        {
          text: 'Canelar',
          role:'cancel',
          handler:() => {
            console.log('Canelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if(data.title.lenght === 0){
              return;
            }
            this.wishesService.createList(data.title);
            //tengo que crear la lista
          }
        }
      ]
    });

     alert.present();
    // this.router.navigateByUrl('/tabs/tab1/agregar');

  }

}
