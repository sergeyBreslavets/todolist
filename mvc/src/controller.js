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
            // console.log(delbtn);
            delbtn.onclick = function(event) {
                let id = event.target.attributes['idn'].value;
                self.delElFromList(id);
            };
        });
    }

    addEventComplite() {

    }

    delElFromList(idDel) {
        let tempList = [];
        this.listall.forEach(
            el => {
                if (el.id != idDel) {
                    tempList.push(el);
                }
            }
        );
        this.listall = tempList;
        console.log(this.listall);
        this.model.listall = this.listall;
        this.view.listall = this.listall;
        this.model.saveData();
        this.view.veiwAllList();
        self.addEventDel();
    }


    compliteEl(idel) {

    }

    delAll() {

    }

    completeAllList() {

    }

}