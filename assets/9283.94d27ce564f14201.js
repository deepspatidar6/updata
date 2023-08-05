"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9283],{9283:(U,p,a)=>{a.r(p),a.d(p,{AddVatlistModule:()=>l});var m=a(6895),g=a(2761),u=a(4152),t=a(4650),v=a(6915),Z=a(3038),f=a(18),T=a(7185);function A(s,e){if(1&s){const i=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"a",26),t.NdJ("click",function(){const r=t.CHM(i).$implicit,d=t.oxw();return t.KtG(d.edititem(r._id))}),t._UZ(7,"img",27),t.qZA(),t.TgZ(8,"a",28),t.NdJ("click",function(){const r=t.CHM(i).$implicit,d=t.oxw();return t.KtG(d.deleteitem(r._id))}),t._UZ(9,"img",29),t.qZA()()()}if(2&s){const i=e.$implicit,n=e.index;t.xp6(2),t.hij(" ",n+1," "),t.xp6(2),t.Oqu(i.vat)}}function b(s,e){1&s&&(t.TgZ(0,"tr")(1,"td",30)(2,"h5",31),t._uU(3,"No matching records found"),t.qZA()()())}class c{constructor(e,i,n,h,r,d){this.data=e,this.pagination=i,this.sweetalert=n,this.router=h,this.api=r,this.toastr=d,this.initChecked=!1,this.routes=u._j,this.selectedValue1="",this.selectedValue2="",this.selectedValue3="",this.tableData=[],this.pageSize=10,this.serialNumberArray=[],this.totalData=0,this.showFilter=!1,this.searchDataValue="",this.maind=[],this.getTableData({skip:"tt",limit:"f"})}getTableData(e){this.api.getVAT().subscribe(i=>{i&&(this.tableData=i),console.log(this.tableData)})}searchData(e){this.dataSource.filter=e.trim().toLowerCase(),this.tableData=this.dataSource.filteredData}deleteitem(e){this.api.delVAT(e).subscribe(i=>{i&&this.toastr.success("VAT Deleted Successfully")})}edititem(e){localStorage.getItem("id")&&this.router.navigate(["/service/edit-vat/"+e])}addvat(){this.router.navigate(["/service/vat"])}}c.\u0275fac=function(e){return new(e||c)(t.Y36(u.Do),t.Y36(v.N),t.Y36(Z.P),t.Y36(g.F0),t.Y36(f.m),t.Y36(T._W))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-vatlist"]],decls:44,vars:2,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["matSort","","matSortActive","Sno","matSortDirection","asc","matSortDisableClear","",1,"table","datanew"],["mat-sort-header","vatname"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"me-3",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","12"],[1,"no-record"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Service Vat list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search service Units"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t.NdJ("click",function(){return i.addvat()}),t._UZ(8,"img",4),t._uU(9,"Add VAT "),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8),t._UZ(14,"div",9),t.TgZ(15,"div",10)(16,"a",11),t._UZ(17,"img",12),t.qZA(),t.TgZ(18,"div",13),t._UZ(19,"label"),t.qZA()()(),t.TgZ(20,"div",14)(21,"ul")(22,"li")(23,"a",15),t._UZ(24,"img",16),t.qZA()(),t.TgZ(25,"li")(26,"a",17),t._UZ(27,"img",18),t.qZA()(),t.TgZ(28,"li")(29,"a",19),t._UZ(30,"img",20),t.qZA()()()()(),t.TgZ(31,"div",21)(32,"table",22)(33,"thead")(34,"tr")(35,"th"),t._uU(36," Sno "),t.qZA(),t.TgZ(37,"th",23),t._uU(38,"Unit name"),t.qZA(),t.TgZ(39,"th"),t._uU(40,"Action"),t.qZA()()(),t.TgZ(41,"tbody"),t.YNc(42,A,10,2,"tr",24),t.YNc(43,b,4,0,"tr",25),t.qZA()()()()()),2&e&&(t.xp6(42),t.Q6J("ngForOf",i.tableData),t.xp6(1),t.Q6J("ngIf",0==i.tableData.length))},dependencies:[m.sg,m.O5],styles:[".form-select[_ngcontent-%COMP%]{width:111%;font-size:14px}"]});const V=[{path:"",component:c}];class o{}o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(V),g.Bz]});var C=a(2833);class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[m.ez,o,C.p]})}}]);