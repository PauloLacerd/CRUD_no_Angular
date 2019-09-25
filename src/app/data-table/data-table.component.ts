import { Component, OnInit } from '@angular/core';

import { FormService } from '../services/form.service'

import { FormModel } from '../form/form.model'

@Component({
  selector: 'cra-data-table',
  templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit {

  formData: FormModel[]

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.get()
    console.log(FormData)
  }

  get(){
    this.formService.getData().subscribe(data => this.formData = data,
    error => console.error('Erro ao retornar os dados do banco. ' + error))
  }

}
