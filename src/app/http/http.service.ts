import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  getApi(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  constructor(private http: HttpClient) {}
}
