import { Component } from '@angular/core';
import { filter, map, Observable, range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'bookshop';

  dataSource$: Observable<number> = range(1, 10); // on crée un observable (ex: robinet qui goutte l'eau)

  ngOnInit(): void {
    // on crée un observer qui s'abonne à notre observable et effectue des opération sur les données (moi avec un gobelet)
    this.dataSource$.pipe(
      map(x => x*2),
      filter(x => x>10)
    ).subscribe(x => console.log(x));
  }

  /*
    NB: pour plus de compréhension dis toi que

    ca                 : dataSource$.pipe(map(x => x*2), filter(x => x>10)) 
    est équivalent à ca: dataSource %>% map(retourne le param x multiplié par 2) %>% filter(retourne le param x sup a 10)
  */
}
