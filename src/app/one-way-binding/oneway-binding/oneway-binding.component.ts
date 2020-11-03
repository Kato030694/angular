import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss']
})
export class OnewayBindingComponent implements OnInit {
  public name:string = "Nguyen Van A"
  public showNumber: number = 123.456
  public emailPrivate:any = ""
  public nameFull:string = ""
  // sho ra 1 object
  public showObject: any = {
    namSinh: 1994,
    hoTen: '',
    gioiTinh: "Nam"
  }
  public obHocVien:any = {hoTen: "", gioiTinh: "Nam"}
  // Tao ra 1 phuong thuc xu ly.
  ChangeName(obInput:any){
    this.obHocVien.hoTen = obInput.value;
    this.showObject.hoTen = obInput.value;
  }
  ChangeSex(obsex:any){
    this.obHocVien.gioiTinh = obsex.value;
    this.showObject.gioiTinh = obsex.value;
  }
  constructor() { }
  ChageMyname(obName:any){
    this.nameFull = obName.value
  }
  ngOnInit(): void {
  }

}