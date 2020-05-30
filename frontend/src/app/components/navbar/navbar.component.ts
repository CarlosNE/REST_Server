import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroes } from 'src/app/classes/heroes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private heroesService: HeroesService) {}

  ngOnInit(): void {}

  searchHeroe(text: string) {
    this.heroesService.searchHeroe(text).subscribe((res) => {
      let heroe = res[0] as Heroes;
      this.router.navigate(['/heroe', heroe._id]);
    });
  }
}
