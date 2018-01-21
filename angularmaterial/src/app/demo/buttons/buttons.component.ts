import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA  // needed to suppress vscode hint errors about the custom angular-material elements like mat-checkbox
} from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <button mat-button>
    <mat-icon>face</mat-icon>
    Click Me
  </button>
  <mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
