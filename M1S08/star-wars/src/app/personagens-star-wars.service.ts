import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PersonagensStarWarsService {
  
  private url ="http://localhost:3000/personagens";
  constructor(private_httpClient: HttpClient) { }
}
