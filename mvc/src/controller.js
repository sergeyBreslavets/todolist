// Контроллер (Controller) интерпретирует действия пользователя, оповещая модель о необходимости изменений[

export class ControllerMain {

    constructor(listall, idElInput, view, model) {
        this.listall = listall;
        this.idElInput = idElInput;
        this.view = view;
        this.model = model;
        self = this;
        console.log("c");
    }

    init() {
        console.log("init");
        let kinput = document.getElementById(this.idElInput);
        kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;
        let lastTime = Date.now();

        function handle(e) {
            if (e.keyCode == 13 && Date.now() - lastTime > 550) {
                self.addItemToList();
                lastTime = Date.now();
            }
        }
        // self.loadData();
    }

    addItemToList() {
        let kinput = document.getElementById(this.idElInput);
        let id = this.listall.length;
        this.listall.push({ "id": this.listall.length, "text": kinput.value, "end": false });
        console.log(this.listall);
        this.view.veiwAllList();
        // self.addEventDel();
        // self.addEventDel(id);
        this.model.saveData();
        kinput.value = "";
    }

    addEventDel() {

        this.listall.forEach(el => {

            let delid = "delbtn_" + el.id;
            let delbtn = document.getElementById(delid);

            delbtn.onkeydown = delbtn.onkeyup = delbtn.onkeypress = handle;

        });

        function handle(e) {
            self.delElFromList(el.id)
        }



        // delbtn_12

        // let itemid = "item_" + id;
        // let item = document.getElementById(itemid);
        // let delbtn = item.getElementsByClassName('del');

        // delbtn.onkeydown = delbtn.onkeyup = delbtn.onkeypress = self.delElFromList(id);
    }


    delElFromList(idDel) {
        console.log(idDel);
        // let tempList = [];
        // this.listall.forEach(
        //     el => {
        //         if (el.id != idDel) {
        //             tempList.push(el);
        //         }
        //     }
        // );
        // this.listall = tempList;

        // this.view.veiwAllList();
        // this.model.saveData();
    }


    compliteEl(idel) {

    }

    delAll() {

    }

    completeAllList() {

    }

}