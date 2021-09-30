import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiKey = 'd28fc4c5061f4d4c9057babfc96c6563';
  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http
      .get(
        environment.newsApi +
          '?country=us&category=business&apiKey=' +
          this.apiKey
      )
      .pipe(
        map((resData: any) => {
          return resData.articles;
        })
      );
  }
}
