import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private baseUrl = 'https://api.giphy.com/v1/gifs';
  private apikey = 'z5kxQ2pe0gfAiWIj27rKSeqD9sQQDlhZ';
  private http = inject( HttpClient);


  constructor() { }

  //  mostramos los primeros 20 gifs
  getGifs():Observable<any>{
    const limit  = 20;
    const url = `${this.baseUrl}/trending?api_key=${this.apikey}&limit=${limit}`;

    return this.http.get(url);
  }

  // Mostramos el gif por id
  gifsById(id: string) {
    const url = `${this.baseUrl}/${id}?api_key=${this.apikey}`;
    return this.http.get(url);
  }

  //Mostramos gifs por busqueda

  searchGif( query: string ){
    const url = `${this.baseUrl}/search?api_key=${this.apikey}&q=${query}`;
    // const url = `${this.baseUrl}/search?api_key=${this.apikey}&q=${query}`;
    return this.http.get(url);
  }
}
