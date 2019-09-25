import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { FormControlName } from '@angular/forms'

@Component({
  selector: 'cra-message-input',
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit, AfterContentInit {

  input: any

  @Input() errorMessage: string

  @ContentChild(FormControlName, {static: false}) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.control
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com a diretive FormControlName.')
    }
  }

  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
