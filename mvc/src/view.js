//Представление (View) отвечает за отображение данных модели пользователю, реагируя на изменения модели[1].


export class viewMain {

    constructor(listall, idElList) {
        this.listall = listall;
        this.idElList = idElList;
        this.delBtnEl = "del";

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
            el = el + "<div id = 'item_" + element.id + "'  class='" + classCss + "'> <span class='listtext' onclick='todo_list.compliteEl(" + element.id + ")' >  " + element.text + "</span> <a id='delbtn_" + element.id + "' onclick='del()' class='" + this.delBtnEl + "'>Удалить</a></div>";
        });
        list.innerHTML = el;
        /////////////////////////////////////

        // self.saveData();
    }


}