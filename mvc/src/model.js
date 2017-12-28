//Модель (Model) предоставляет данные и реагирует на команды контроллера, изменяя свое состояние[1].
'use strict';

export class modelMain {

    constructor(listall) {
        this.listall = listall;
        self = this;
    }

    loadData() {
        console.log("loaddata");
        let sObj = localStorage.getItem("todolist");
        if (sObj != null) {
            let datain = JSON.parse(sObj);
            this.listall = datain.slice(0);


            //////////////////////
            // self.veiwAllList();
        }
    }

    saveData() {
        console.log("save");
        console.log(this.listall);
        let sObj = JSON.stringify(this.listall)
        localStorage.removeItem("todolist");
        localStorage.setItem("todolist", sObj);
    }

}