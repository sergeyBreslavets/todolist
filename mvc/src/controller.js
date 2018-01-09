// Контроллер (Controller) интерпретирует действия пользователя, оповещая модель о необходимости изменений[
import { sortListup, sortListdown } from "./helpmetod";


export class ControllerMain {

    constructor(listall, idElInput, view, model, idalldel, idallcomplite, idsort) {
        this.listall = listall;
        this.idElInput = idElInput;
        this.view = view;
        this.model = model;

        this.idalldel = idalldel;
        this.idallcomplite = idallcomplite;
        this.idsort = idsort;

        this.sortkey = "up";

        self = this;

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
        self.addEventDelAllAndCompliteAll();
        // self.loadData();
    }

    addItemToList() {
        let kinput = document.getElementById(this.idElInput);
        let id = this.listall.length;
        this.listall.push({ "id": this.listall.length, "text": kinput.value, "end": false });
        console.log(this.listall);
        this.view.veiwAllList();
        self.addEventDel();
        self.addEventDel(id);
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
        this.listall.forEach(el => {
            let delid = "complid_" + el.id;
            let delbtn = document.getElementById(delid);
            // console.log(delbtn);
            delbtn.onclick = function(event) {
                let id = event.target.attributes['idn'].value;
                self.compliteEl(id);
            };
        });
    }

    addEventDelAllAndCompliteAll() {
        let delallbtn = document.getElementById(this.idalldel);
        delallbtn.onclick = function(event) { self.delAll(); }
        let compliteabtn = document.getElementById(this.idallcomplite);
        compliteabtn.onclick = function(event) { self.completeAllList(); }

        let sortbtn = document.getElementById(this.idsort);
        sortbtn.onclick = function(event) {

            if (this.sortkey == "up") {
                this.sortkey = "down";

                self.sortAllListUp();

            } else {
                this.sortkey = "up";
                self.sortAllListDown();
            }


        }


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
        self.addEventComplite();
    }


    compliteEl(idel) {

        let tempList = [];
        this.listall.forEach(
            el => {
                if (el.id == idel) {
                    if (el.end == true) {
                        el.end = false;
                    } else {
                        el.end = true;
                    }
                }
            }
        );
        console.log(this.listall);
        this.model.listall = this.listall;
        this.view.listall = this.listall;
        this.model.saveData();
        this.view.veiwAllList();
        self.addEventDel();
        self.addEventComplite();

    }

    delAll() {
        this.listall = [];
        this.model.listall = this.listall;
        this.view.listall = this.listall;
        this.model.saveData();
        this.view.veiwAllList();
    }

    completeAllList() {
        this.listall.forEach(
            el => {
                el.end = true;
            }
        );
        this.model.listall = this.listall;
        this.view.listall = this.listall;
        this.model.saveData();
        this.view.veiwAllList();
        self.addEventDel();
        self.addEventComplite();
    }


    sortAllListUp() {

        console.log("try sort");

        console.log(sortListup(this.listall));

        this.listall = sortListup(this.listall);
        this.model.listall = this.listall;
        this.view.listall = this.listall;

        this.model.saveData();
        this.view.veiwAllList();
        self.addEventDel();
        self.addEventComplite();

    }
    sortAllListDown() {

        console.log("try sort");

        console.log(sortListdown(this.listall));

        this.listall = sortListdown(this.listall);
        this.model.listall = this.listall;
        this.view.listall = this.listall;

        this.model.saveData();
        this.view.veiwAllList();
        self.addEventDel();
        self.addEventComplite();

    }





}