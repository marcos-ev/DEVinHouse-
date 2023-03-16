import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from '../environments/environments'
import { PersonagemClass } from './personagem-class';
@Injectable({
  providedIn: 'root'
})

export class PersonagensStarWarsService {
  
  private url = "http://localhost:3000/personagens";
  private urlEnv = ""
  constructor(private_httpClient: HttpClient) { }
}


public getPersonagens() {
  return this.HttpClient.get<PersonagemClass[]>(`${API_PATH}Personagens`)
}
