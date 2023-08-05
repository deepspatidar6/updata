"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7394],{7394:(F,u,a)=>{a.r(u),a.d(u,{AddserviceModule:()=>n});var p=a(6895),d=a(2761),s=a(4006),v=a(1563),e=a(4650),g=a(18),h=a(7185),f=a(3897),A=a(3238);function Z(o,t){if(1&o&&(e.TgZ(0,"mat-option",29),e._uU(1),e.qZA()),2&o){const i=t.$implicit;e.Q6J("value",i.unit),e.xp6(1),e.hij(" ",i.unit," ")}}function y(o,t){if(1&o&&(e.TgZ(0,"mat-option",29),e._uU(1),e.qZA()),2&o){const i=t.$implicit;e.Q6J("value",i.categoryname),e.xp6(1),e.hij(" ",i.categoryname," ")}}function C(o,t){if(1&o&&(e.TgZ(0,"mat-option",29),e._uU(1),e.qZA()),2&o){const i=t.$implicit;e.Q6J("value",i.vat),e.xp6(1),e.hij(" ",i.vat," ")}}function T(o,t){if(1&o&&(e.TgZ(0,"mat-option",29),e._uU(1),e.qZA()),2&o){const i=t.$implicit;e.Q6J("value",i.atec_code),e.xp6(1),e.hij(" ",i.atec_code," ")}}class r{constructor(t,i,l,m,b){this.router=t,this.Ar=i,this.formBuilder=l,this.service=m,this.toastr=b,this.routes=v._,this.id=null,this.unitArray=[],this.catalogArray=[],this.vatArray=[],this.atecCodeArray=[],this.setDropdownData()}ngOnInit(){this.Ar.params.subscribe(t=>this.id=t.id),this.createForm(),null!=this.id&&this.setEditData()}setEditData(){this.service.getDataById(this?.id).subscribe(t=>{console.log(t),this.myForm.patchValue(t)})}setDropdownData(){this.service.getUnitData().subscribe(t=>{t&&(this.unitArray=t)}),this.service.getCatagory().subscribe(t=>{t&&(this.catalogArray=t)}),this.service.getVAT().subscribe(t=>{t&&(this.vatArray=t)}),this.service.getAtecCode().subscribe(t=>{t&&(this.atecCodeArray=t)})}createForm(){this.myForm=this.formBuilder.group({Key:[""],description:["",s.kI.required],code:[""],description_in_checkout:[""],sale_price:[""],purchase_cost:[""],unit:[""],catalog:[""],vat:[""],images:[""],atec_code:[""],sale_price_with_points:[0],number_of_points:[0],calculation_type:["Fixed"]})}saveService(){if(this.myForm.invalid)return;const t=new FormData;this.myForm.get("images")?.setValue(this?.selectedfile?.name),t.append("images",this?.selectedfile),t.append("form",JSON.stringify(this.myForm?.value)),null==this.id?this.service.savedata(t).subscribe(i=>{console.log(i),i&&this.toastr.success("Service created successfully"),this.router.navigate(["service/service-list"])}):this.service.updatedata(this.myForm?.value,this.id).subscribe(i=>{console.log(i),i&&this.toastr.success("Service updated successfully"),this.router.navigate(["service/service-list"])})}onFileChange(t){const i=new FileReader;if(t.target.files&&t.target.files.length){const[l]=t.target.files;this.selectedfile=t.target.files[0],i.readAsDataURL(l),i.onload=()=>{this.imageSrc=i.result}}}}r.\u0275fac=function(t){return new(t||r)(e.Y36(d.F0),e.Y36(d.gz),e.Y36(s.qu),e.Y36(g.m),e.Y36(h._W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-addservice"]],decls:81,vars:5,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],["novalidate","",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","description","placeholder","Description"],["type","text","max","20","formControlName","code","placeholder","Free text (max 20)"],[1,"invalid-feedback"],["type","text","max","20","formControlName","description_in_checkout","placeholder","Description"],[1,"col-lg-3","col-sm-6","col-12"],[2,"font-size","10px !important"],["type","text","formControlName","sale_price","placeholder","0.00"],["type","text","formControlName","purchase_cost","placeholder","0.00"],["formControlName","unit","placeholder","Choose Unit",1,"select"],[3,"value",4,"ngFor","ngForOf"],["formControlName","catalog","placeholder","Choose Catalog",1,"select"],["formControlName","vat","placeholder","Choose Tax",1,"select"],["formControlName","atec_code","placeholder","Choose Atec Code",1,"select"],[1,"col-lg-12"],[1,"image-upload"],["type","file",1,"form-control",3,"change"],["img",""],[1,"image-uploads"],["src","assets/img/icons/upload.svg","alt","img"],["href","javascript:void(0);","type","Submit",1,"btn","btn-submit","me-2",3,"click"],["routerLink","/service/service-list",1,"btn","btn-cancel"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Service Add"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new service"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return i.saveService()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Description"),e.qZA(),e._UZ(14,"input",8),e.qZA()(),e.TgZ(15,"div",6)(16,"div",7)(17,"label"),e._uU(18,"Internal Code"),e.qZA(),e._UZ(19,"input",9),e.TgZ(20,"div",10),e._uU(21," Please provide a valid state. "),e.qZA()()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Description in Checkout"),e.qZA(),e._UZ(26,"input",11),e.qZA()(),e.TgZ(27,"div",12)(28,"div",7)(29,"label"),e._uU(30,"Sales Price "),e.TgZ(31,"span",13),e._uU(32,"(VAT) "),e.qZA()(),e._UZ(33,"input",14),e.qZA()(),e.TgZ(34,"div",12)(35,"div",7)(36,"label"),e._uU(37,"Purchase Cost "),e.TgZ(38,"span",13),e._uU(39,"(Net Of VAT) "),e.qZA()(),e._UZ(40,"input",15),e.qZA()(),e.TgZ(41,"div",12)(42,"div",7)(43,"label"),e._uU(44,"Unit"),e.qZA(),e.TgZ(45,"mat-select",16),e.YNc(46,Z,2,2,"mat-option",17),e.qZA()()(),e.TgZ(47,"div",12)(48,"div",7)(49,"label"),e._uU(50,"Catalog"),e.qZA(),e.TgZ(51,"mat-select",18),e.YNc(52,y,2,2,"mat-option",17),e.qZA()()(),e.TgZ(53,"div",12)(54,"div",7)(55,"label"),e._uU(56,"VAT"),e.qZA(),e.TgZ(57,"mat-select",19),e.YNc(58,C,2,2,"mat-option",17),e.qZA()()(),e.TgZ(59,"div",12)(60,"div",7)(61,"label"),e._uU(62,"Atec Code"),e.qZA(),e.TgZ(63,"mat-select",20),e.YNc(64,T,2,2,"mat-option",17),e.qZA()()(),e.TgZ(65,"div",21)(66,"div",7)(67,"label"),e._uU(68," Service Image"),e.qZA(),e.TgZ(69,"div",22)(70,"input",23,24),e.NdJ("change",function(m){return i.onFileChange(m)}),e.qZA(),e.TgZ(72,"div",25),e._UZ(73,"img",26),e.TgZ(74,"h4"),e._uU(75,"select file to upload"),e.qZA()()()()(),e.TgZ(76,"div",21)(77,"a",27),e.NdJ("click",function(){return i.saveService()}),e._uU(78,"Submit"),e.qZA(),e.TgZ(79,"a",28),e._uU(80,"Cancel"),e.qZA()()()()()()),2&t&&(e.xp6(8),e.Q6J("formGroup",i.myForm),e.xp6(38),e.Q6J("ngForOf",i.unitArray),e.xp6(6),e.Q6J("ngForOf",i.catalogArray),e.xp6(6),e.Q6J("ngForOf",i.vatArray),e.xp6(6),e.Q6J("ngForOf",i.atecCodeArray))},dependencies:[p.sg,d.rH,f.gD,A.ey,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]});const _=[{path:"",component:r},{path:":id",component:r}];class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[d.Bz.forChild(_),d.Bz]});var U=a(2833);class n{}n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,c,U.p,s.UX]})}}]);