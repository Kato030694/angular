import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngfor',
  templateUrl: './directive-ngfor.component.html',
  styleUrls: ['./directive-ngfor.component.scss'],
})
export class DirectiveNgforComponent implements OnInit {
  public DanhSachSinhVien: Array<any> = [
    { MaSV: '01', hoTen: 'Huynh Gia', tuoi: '15' },
    { MaSV: '02', hoTen: 'Huynh Gib', tuoi: '15' },
    { MaSV: '03', hoTen: 'Huynh Gic', tuoi: '15' },
    { MaSV: '04', hoTen: 'Huynh Gid', tuoi: '15' },
  ];
  constructor() {}
  ThemSinhVien(masv, hoten, tuoi) {
    this.DanhSachSinhVien.push({
      MaSV: masv,
      hoTen: hoten,
      tuoi: tuoi,
    });
  }
  ngOnInit(): void {}
}
