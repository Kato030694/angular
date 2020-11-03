import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ifelse',
  templateUrl: './directive-ifelse.component.html',
  styleUrls: ['./directive-ifelse.component.scss']
})
export class DirectiveIfelseComponent implements OnInit {
  public status:boolean = true;
  public ThongBao:string = "";
  constructor() { }
  DangXuat(){
    this.status = false;
  }
  DangNhap(tenDN:string, password:string){
    if(tenDN == "hlan" && password == "123456"){
      this.status = true;
    }else{
      this.status = false;
      this.ThongBao =  "Thong Tin Sai"
    }
  }
  ngOnInit(): void {
  }

}
