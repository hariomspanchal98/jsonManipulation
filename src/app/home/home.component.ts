import { Component, OnInit } from '@angular/core';
import { inputJSON, outputJSON, sampleInputJsonData } from './home.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isConverterOn: boolean = false;
  placeholder: any;
  input!: any;
  output!: any;
  inputData!: inputJSON;
  outputData: outputJSON = {
    label: "",
    items: []
  };

  constructor() { }

  ngOnInit(): void {
    this.placeholder = "Please enter input data in the given format, " + (JSON.stringify(sampleInputJsonData));
  }

  toggleConverter() {
    this.isConverterOn = !this.isConverterOn;
  }

  convertData() {
    this.inputData = JSON.parse(this.input);
    this.outputData.label = this.inputData?.firstName + ' ' + this.inputData?.lastName;
    this.outputData.items = this.getChilds(this.inputData.childs);
    this.output = JSON.stringify(this.outputData);
  }

  getChilds(childs: any[]): any[] {
    const items = [];
    if (childs && childs.length > 0) {
      for (let i = 0; i < childs.length; i++) {
        const child = childs[i];
        const item = {
          label: child.firstName + ' ' + child.lastName,
          items: this.getChilds(child.childs)
        };
        items.push(item);
      }
    }
    return items;
  }

  clearOutput() {
    this.output = '';
  }
}
