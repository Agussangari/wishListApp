import { listItem } from "./list-item.model";

export class List {
    id: number;
    title: string;
    createOn: Date;
    endOn: Date;
    finished: boolean;
    items: listItem[];

    constructor(title: string){

        this.title = title;
        this.createOn = new Date();
        this.finished = false;
        this.items = [];  

        this.id = new Date().getTime();
    }

}