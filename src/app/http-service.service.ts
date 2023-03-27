import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  postSelectedValues(selectedValues: any) {
    return this.http.post('http://localhost:3000/api/vote', selectedValues);
  }
  

}
