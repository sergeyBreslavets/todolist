'use strict';
import { ControllerMain } from './controller';
import { modelMain } from './model';
import { viewMain } from './view';

let listall = [];
let idinput = "todo";
let idlist = "list";
let iddelall = "delAll";
let idcompliteall = "compliteAll";
let idsort = "sortAll";

let todo_list_M = new modelMain(listall);
todo_list_M.loadData();
let todo_list_v = new viewMain(todo_list_M.listall, idlist);
let todo_list_C = new ControllerMain(todo_list_M.listall, idinput, todo_list_v, todo_list_M, iddelall, idcompliteall, idsort);
todo_list_C.init();
todo_list_v.veiwAllList();

todo_list_C.addEventDel();
todo_list_C.addEventComplite();