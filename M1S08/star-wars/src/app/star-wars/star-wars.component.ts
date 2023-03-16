import { Component } from '@angular/core';
import { PersonagemClass } from '../personagem-class';
import { PersonagensStarWarsService } from '../personagens-star-wars.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements onInit {

  public personagens: PersonagemClass[] = [];
  constructor(private_service: PersonagensStarWarsService){}

  ngOninit():void{
    this._service.getPersonagens().subscribe(
      (res) => {
        this.personagens = res
      }
      )
   
  }

  public getPersonagensFromService({

  })

  


  }


