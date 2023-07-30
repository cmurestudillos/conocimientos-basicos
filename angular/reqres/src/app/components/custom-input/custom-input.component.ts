import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare var Materialize: any;

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CustomInputComponent,
    multi: true
  }]
})
export class CustomInputComponent implements ControlValueAccessor {

  @Input() contentLabel: string;

  public value: any;

  constructor() { }

  ngOnInit() {
    Materialize.updateTextFields();
  }

  writeValue(val: any) {
    this.value = val;
  }

  registerOnChange(fn) { this.propagateChange = fn; }

  registerOnTouched(fn) { }

  private propagateChange = (_: any) => { };

}
