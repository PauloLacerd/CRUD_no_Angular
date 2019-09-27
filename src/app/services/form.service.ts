import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { take } from 'rxjs/operators'

import { FormModel } from '../form/form.model'

@Injectable({
  providedIn: 'root'
})

export class FormService {

  url_API: string = " http://localhost:3000"

  constructor(private http: HttpClient) {}

  getData(): Observable<FormModel[]>{
    return this.http.get<FormModel[]>(`${this.url_API}/data`)
  }

  postData(data: FormModel): Observable<FormModel>{
    return this.http.post<FormModel>(`${this.url_API}/data`, data).pipe(take(1))
  }

  putData(data: FormModel): Observable<FormModel>{
    return this.http.put<FormModel>(`${this.url_API}/data/${data.id}`, data).pipe(take(1))
  }

  deleteData(id: number): Observable<FormModel>{
    return this.http.delete<FormModel>(`${this.url_API}/data/${id}`).pipe(take(1))
  }
}
