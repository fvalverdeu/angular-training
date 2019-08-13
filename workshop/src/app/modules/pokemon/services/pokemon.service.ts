import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'

export class PokemonService {
  url = environment.api + '/pokemon';

  constructor(private http: HttpClient) {}

  search(id: number): Observable<any> {
    const endpoint = this.url + '/' + id;
    return this.http.get(endpoint)
    .pipe(retry(1), catchError(this.handleError));
  }

  handleError(err) {
    let message = '';
    if(err.error instanceof ErrorEvent){
      message = err.error.message;
    } else {
      message = 'Error Code: ' + err.status + '\nMessage:' + err.message;
    }
    return throwError(message);
  }
}
