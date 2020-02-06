import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    if (!this.form) {
      this.form = new FormGroup({
        email: new FormControl(null),
        password: new FormControl(null)
      });
    }
  }

}
