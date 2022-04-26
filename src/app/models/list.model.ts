import { listItem } from "./list-item.model";

export class List {
    id: number;
    titulo: string;
    createOn: Date;
    endOn: Date;
    end: boolean;
    items: listItem[];

    constructor(titulo: string){

        this.titulo = titulo;
        this.createOn = new Date();
        this.end = false;
        this.items = [];  

        this.id = new Date().getTime();
    }

}