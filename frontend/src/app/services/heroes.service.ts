import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  apiURL = 'http://localhost:3000/api/heroes';

  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get(this.apiURL);
  }

  getHeroe(id: Number) {
    return this.http.get(this.apiURL + `/${id}`);
  }

  searchHeroe(text: String) {
    return this.http.get(this.apiURL + `/search/${text}`);
  }
}
