"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7512],{7512:(O,c,a)=>{a.r(c),a.d(c,{EdittransferModule:()=>s});var p=a(6895),Z=a(906),g=a(2761),v=a(1563),t=a(4650),m=a(4006),T=a(3897),f=a(3238),_=a(8106);function h(o,n){if(1&o&&(t.TgZ(0,"mat-option",29),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.value," ")}}function A(o,n){if(1&o&&(t.TgZ(0,"mat-option",29),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.value," ")}}function U(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"tr",30)(1,"td",31)(2,"a",32),t._UZ(3,"img",33),t.qZA(),t.TgZ(4,"a",34),t._uU(5),t.qZA()(),t.TgZ(6,"td")(7,"div",35)(8,"a",36),t._UZ(9,"img",37),t.qZA(),t._UZ(10,"input",38),t.TgZ(11,"a",36),t._UZ(12,"img",39),t.qZA()()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td")(24,"a",40),t.NdJ("click",function(){const x=t.CHM(e).index,J=t.oxw();return t.KtG(J.delete(x))}),t._UZ(25,"img",41),t.qZA()()()}if(2&o){const e=n.$implicit;t.xp6(3),t.Q6J("src",e.img,t.LSH),t.xp6(2),t.Oqu(e.ProductName),t.xp6(9),t.Oqu(e.Price),t.xp6(2),t.Oqu(e.Stock),t.xp6(2),t.Oqu(e.Discount),t.xp6(2),t.Oqu(e.Tax),t.xp6(2),t.Oqu(e.TotalCost)}}function q(o,n){if(1&o&&(t.TgZ(0,"mat-option",29),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.value," ")}}const u=function(){return{standalone:!0}};class d{constructor(){this.selectedValue1="",this.selectedValue2="",this.selectedValue3="",this.routes=v._,this.selectedList1=[{value:"Store 1"},{value:"Store 2"}],this.selectedList2=[{value:"Store 2"},{value:"Store 1"}],this.selectedList3=[{value:"Sent"},{value:"Completed"},{value:"Inprogress"}],this.tableData=[{img:"assets/img/product/product7.jpg",ProductName:"Apple Earpods",QTY:"1",Price:"1500.00\t",Stock:"50.00\t",Discount:"0.00",Tax:"0.00",TotalCost:"1500.00"}],this.date=new Date}delete(n){this.tableData.splice(n,1)}}d.\u0275fac=function(n){return new(n||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-edittransfer"]],decls:116,vars:15,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],[1,"input-groupicon"],[3,"ngModel","ngModelChange"],[1,"addonset"],["src","assets/img/icons/calendars.svg","alt","img"],["placeholder","Store 1",1,"select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Store 2",1,"select",3,"ngModel","ngModelOptions","ngModelChange"],[1,"col-lg-12","col-sm-6","col-12"],["type","text","placeholder","Scan/Search Product by code and select..."],["src","assets/img/icons/scanners.svg","alt","img"],[1,"table-responsive"],[1,"table"],["class","bor-b1",4,"ngFor","ngForOf"],[1,"col-lg-12","float-md-right"],[1,"total-order"],[1,"total"],["type","text"],["placeholder","Sent",1,"select",3,"ngModel","ngModelOptions","ngModelChange"],[1,"col-lg-12"],[1,"form-control"],["href","javascript:void(0);",1,"btn","btn-submit","me-2"],[1,"btn","btn-cancel",3,"routerLink"],[3,"value"],[1,"bor-b1"],[1,"productimgname"],[1,"product-img"],["alt","product",3,"src"],["href","javascript:void(0);"],[1,"input-group","form-group","mb-0"],[1,"scanner-set","input-group-text"],["src","assets/img/icons/plus1.svg","alt","img"],["type","text","value","1",1,"calc-no"],["src","assets/img/icons/minus.svg","alt","img"],["href","javascript:void(0);",3,"click"],["src","assets/img/icons/delete.svg","alt","svg"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Edit Transfer"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Transfer your stocks to one store another store."),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"label"),t._uU(12,"Date "),t.qZA(),t.TgZ(13,"div",7)(14,"ngx-datepicker",8),t.NdJ("ngModelChange",function(i){return e.date=i}),t.qZA(),t.TgZ(15,"div",9),t._UZ(16,"img",10),t.qZA()()()(),t.TgZ(17,"div",5)(18,"div",6)(19,"label"),t._uU(20,"From"),t.qZA(),t.TgZ(21,"mat-select",11),t.NdJ("ngModelChange",function(i){return e.selectedValue1=i}),t.YNc(22,h,2,2,"mat-option",12),t.qZA()()(),t.TgZ(23,"div",5)(24,"div",6)(25,"label"),t._uU(26,"To"),t.qZA(),t.TgZ(27,"mat-select",13),t.NdJ("ngModelChange",function(i){return e.selectedValue2=i}),t.YNc(28,A,2,2,"mat-option",12),t.qZA()()(),t.TgZ(29,"div",14)(30,"div",6)(31,"label"),t._uU(32,"Product Name"),t.qZA(),t.TgZ(33,"div",7),t._UZ(34,"input",15),t.TgZ(35,"div",9),t._UZ(36,"img",16),t.qZA()()()()(),t.TgZ(37,"div",4)(38,"div",17)(39,"table",18)(40,"thead")(41,"tr")(42,"th"),t._uU(43,"Product Name"),t.qZA(),t.TgZ(44,"th"),t._uU(45,"QTY"),t.qZA(),t.TgZ(46,"th"),t._uU(47,"Price"),t.qZA(),t.TgZ(48,"th"),t._uU(49,"Stock\t"),t.qZA(),t.TgZ(50,"th"),t._uU(51,"Discount"),t.qZA(),t.TgZ(52,"th"),t._uU(53,"Tax "),t.qZA(),t.TgZ(54,"th"),t._uU(55,"Total Cost ($)"),t.qZA(),t._UZ(56,"th"),t.qZA()(),t.TgZ(57,"tbody"),t.YNc(58,U,26,7,"tr",19),t.qZA()(),t._UZ(59,"app-custom-pagination"),t.qZA()(),t.TgZ(60,"div",4)(61,"div",20)(62,"div",21)(63,"ul")(64,"li")(65,"h4"),t._uU(66,"Order Tax"),t.qZA(),t.TgZ(67,"h5"),t._uU(68,"$ 0.00 (0.00%)"),t.qZA()(),t.TgZ(69,"li")(70,"h4"),t._uU(71,"Discount\t"),t.qZA(),t.TgZ(72,"h5"),t._uU(73,"$ 0.00"),t.qZA()(),t.TgZ(74,"li")(75,"h4"),t._uU(76,"Shipping"),t.qZA(),t.TgZ(77,"h5"),t._uU(78,"$ 0.00"),t.qZA()(),t.TgZ(79,"li",22)(80,"h4"),t._uU(81,"Grand Total"),t.qZA(),t.TgZ(82,"h5"),t._uU(83,"$ 2000.00"),t.qZA()()()()()(),t.TgZ(84,"div",4)(85,"div",5)(86,"div",6)(87,"label"),t._uU(88,"Order Tax"),t.qZA(),t._UZ(89,"input",23),t.qZA()(),t.TgZ(90,"div",5)(91,"div",6)(92,"label"),t._uU(93,"Discount"),t.qZA(),t._UZ(94,"input",23),t.qZA()(),t.TgZ(95,"div",5)(96,"div",6)(97,"label"),t._uU(98,"Shipping"),t.qZA(),t._UZ(99,"input",23),t.qZA()(),t.TgZ(100,"div",5)(101,"div",6)(102,"label"),t._uU(103,"Status"),t.qZA(),t.TgZ(104,"mat-select",24),t.NdJ("ngModelChange",function(i){return e.selectedValue3=i}),t.YNc(105,q,2,2,"mat-option",12),t.qZA()()(),t.TgZ(106,"div",25)(107,"div",6)(108,"label"),t._uU(109,"Description"),t.qZA(),t._UZ(110,"textarea",26),t.qZA()(),t.TgZ(111,"div",25)(112,"a",27),t._uU(113,"Submit"),t.qZA(),t.TgZ(114,"a",28),t._uU(115,"Cancel"),t.qZA()()()()()),2&n&&(t.xp6(14),t.Q6J("ngModel",e.date),t.xp6(7),t.Q6J("ngModel",e.selectedValue1)("ngModelOptions",t.DdM(12,u)),t.xp6(1),t.Q6J("ngForOf",e.selectedList1),t.xp6(5),t.Q6J("ngModel",e.selectedValue2)("ngModelOptions",t.DdM(13,u)),t.xp6(1),t.Q6J("ngForOf",e.selectedList2),t.xp6(30),t.Q6J("ngForOf",e.tableData),t.xp6(46),t.Q6J("ngModel",e.selectedValue3)("ngModelOptions",t.DdM(14,u)),t.xp6(1),t.Q6J("ngForOf",e.selectedList3),t.xp6(9),t.Q6J("routerLink",e.routes.transferList))},dependencies:[p.sg,g.rH,Z.QB,m.JJ,m.On,T.gD,f.ey,_.W]});const C=[{path:"",component:d}];class l{}l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[g.Bz.forChild(C),g.Bz]});var M=a(2833);class s{}s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[p.ez,l,Z.ZU,M.p]})}}]);