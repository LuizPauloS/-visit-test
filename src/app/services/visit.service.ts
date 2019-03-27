import { VISITS_ROUTES_API, VISITS_PATH, PROCESS_PATH } from './visitsroutes.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visit } from '../model/visit.model';
import { Observable } from 'rxjs';

@Injectable()
export class VisitService {

  formData: FormData = new FormData();

  constructor(private http: HttpClient) {}

  process(visit: Visit) {
    this.formData.append('employees', visit.fileEmployees);
    this.formData.append('stores', visit.fileStores);
    return this.http.post(`${VISITS_ROUTES_API}${VISITS_PATH}${PROCESS_PATH}`, this.formData);
  }

  process2(visit: Visit) {
    return this.http.post(`http://www.mocky.io/v2/5c9a57d13500007309d0c5ec`, this.formData);
  }

  getList(id: number): Observable<any[]> {
    // const url = `http://www.mocky.io/v2/5c9bac9f360000f018d96dcf/${id}`;
    return this.http.get<any[]>(`http://www.mocky.io/v2/5c9bac9f360000f018d96dcf`);
  }
}
