'use strict';

class todolist {

    constructor(idElInput, idElList) {
        this.idElInput = idElInput;
        this.idElList = idElList;
        this.listall = [];
        this.delBtnEl = "del";
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
        self.loadData();
    }

    addItemToList() {
        let kinput = document.getElementById(this.idElInput);
        this.listall.push({ "id": this.listall.length, "text": kinput.value, "end": false });
        console.log(this.listall);
        self.veiwAllList();
        kinput.value = "";
    }

    veiwAllList() {
        console.log(this.listall);
        let list = document.getElementById(this.idElList);
        let listnow = [];
        listnow = this.listall.slice(0);
        listnow = listnow.reverse();
        let el = "";
        listnow.forEach(element => {
            let classCss = "complite";
            if (element.end == false) {
                classCss = "nocomplite";
            }
            el = el + "<div  class='" + classCss + "'> <span class='listtext' onclick='todo_list.compliteEl(" + element.id + ")' >  " + element.text + "</span> <a onclick='todo_list.delElFromList(" + element.id + ")' class='" + this.delBtnEl + "'>Удалить</a></div>";
        });
        list.innerHTML = el;
        self.saveData();
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
        self.saveData();
        self.veiwAllList();
    }

    compliteEl(idel) {
        this.listall.forEach(
            el => {
                if (el.id == idel) {
                    el.end = true;
                }
            }
        );

        self.veiwAllList();
    }

    saveData() {
        console.log("save");
        let sObj = JSON.stringify(this.listall)
        localStorage.removeItem("todolist");
        localStorage.setItem("todolist", sObj);
    }

    loadData() {
        console.log("loaddata");
        let sObj = localStorage.getItem("todolist");
        if (sObj != null) {
            let datain = JSON.parse(sObj);
            this.listall = datain.slice(0);
            self.veiwAllList();
        }
    }

    delAll() {
        this.listall = [];
        self.veiwAllList();
    }

    completeAllList() {
        this.listall.forEach(
            el => {
                el.end = true;
            }
        );
        self.veiwAllList();
    }

}

let idinput = "todo";
let idlist = "list";
let todo_list = new todolist(idinput, idlist);
todo_list.init();