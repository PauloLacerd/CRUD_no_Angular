import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FormService } from '../services/form.service'

@Component({
  selector: 'cra-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  dataGroup: FormGroup

  constructor(private formBuilder: FormBuilder, private formService: FormService) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.dataGroup = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      secondName: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.formService.postData(this.dataGroup.value).subscribe(success => console.log('Dados enviados com sucesso.'),
    error => console.error('Erro ao inserir os dados no banco. ' + error))
    this.dataGroup.reset()
  }

}
