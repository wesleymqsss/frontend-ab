import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() userLogado!: boolean;
 constructor( private router: Router ){}

  routerClick(route: string): void {
    this.router.navigate([route]);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userLogado']) {
      console.log('Valor de userLogado mudou:', changes['userLogado'].currentValue);
    }
  }
 
}
