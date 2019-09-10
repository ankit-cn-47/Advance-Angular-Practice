import { Component, OnInit, Input, ContentChild, AfterContentInit, HostBinding } from '@angular/core';
import { InputRefDirective } from '../input-ref.directive';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements AfterContentInit {

  @Input()
  icon;

  @ContentChild(InputRefDirective, {static: false})
  inputRef: InputRefDirective;

  cssClasses = {};

  ngAfterContentInit() {
    if (this.inputRef) {
      console.error('the au-fa-input needs an input inside its content');
    }
  }

  get classes() {
    if (this.icon) {
      this.cssClasses['fa-'+this.icon] = true;
    }
    return this.cssClasses;
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.inputRef ? this.inputRef.focus : false;
  }

}
