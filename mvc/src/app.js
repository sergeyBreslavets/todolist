'use strict';
import { ControllerMain } from './controller';
import { modelMain } from './model';
import { viewMain } from './view';

let listall = [];
let idinput = "todo";
let idlist = "list";



let todo_list_M = new modelMain(listall);
todo_list_M.loadData();
let todo_list_v = new viewMain(todo_list_M.listall, idlist);
let todo_list_C = new ControllerMain(todo_list_M.listall, idinput, todo_list_v, todo_list_M);
todo_list_C.init();
todo_list_v.veiwAllList();


console.log(todo_list_M.listall);

function delmain() {
    console.log("delll");
}