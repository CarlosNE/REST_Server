import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from 'src/app/classes/heroes';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  private id: Number = 0;
  heroe: Heroes = new Heroes();
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.setIdFromURL();
    this.setHeroe();
  }

  setIdFromURL() {
    return this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
    });
  }

  setHeroe() {
    this.heroesService.getHeroe(this.id).subscribe((res) => {
      this.heroe = res as Heroes;
    });
  }
}
