import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-if',
  templateUrl: './directive-if.component.html',
  styleUrls: ['./directive-if.component.scss']
})
export class DirectiveIfComponent implements OnInit {
  public status:boolean = false;
  constructor() { }
  Show(){
    this.status = true;
  }
  Hidden(){
    this.status = false;
  }
  ngOnInit(): void {
  }

}

