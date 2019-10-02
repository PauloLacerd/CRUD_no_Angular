import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { FormService } from '../services/form.service'

import { FormModel } from '../form/form.model'

@Component({
  selector: 'cra-data-table',
  templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit {

  formGroup: FormGroup

  dataTable: FormModel[]

  formData: FormModel

  constructor(private formService: FormService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.get()
    this.initForm()
  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(/^[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password: this.formBuilder.control('', Validators.required),
      secondName: this.formBuilder.control('', Validators.required)
    })
  }

  get(){
    this.formService.getData().subscribe(data => this.dataTable = data,
                                         error => console.error('Erro ao retornar os dados do banco. ' + error))
  }

  cancelUpdate(){
    this.formData = undefined
  }

  setFormValue(){
    this.formGroup.get('name').setValue(this.formData.name)
    this.formGroup.get('secondName').setValue(this.formData.secondName)
    this.formGroup.get('email').setValue(this.formData.email)
    this.formGroup.get('password').setValue(this.formData.password)
  }

  getFormValue(){
    this.formData = {name: this.formGroup.get('name').value,
                     secondName: this.formGroup.get('secondName').value,
                     email: this.formGroup.get('email').value,
                     password: this.formGroup.get('password').value,
                     id: this.formData.id}
  }

  getDataTable(id: number){
    this.formService.getDataForId(id).subscribe(success => [this.formData = success,
      this.setFormValue()], error => console.error('Erro'))
  }

  updateData(){
    this.getFormValue()
    this.formService.putData(this.formData).subscribe(success => [console.log('Dados atualizado com sucesso !!!'), this.get()],
    error => console.error('Falha ao atualizar os dados: ' + error))
    this.formData = undefined
  }

  deleteData(id: number){
    this.formService.deleteData(id).subscribe(success => [console.log('Dado apagado com sucesso !!!'), this.get()],
                                              error => console.error('Falha ao apagar os dados: ' + error))
  }

}
