import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuriter',
  standalone: true,
  imports: [],
  templateUrl: './recuriter.component.html',
  styleUrl: './recuriter.component.scss',
})
export class RecuriterComponent {
  constructor(public router: Router) {}
  goToSkills() {
    this.router.navigateByUrl('skills');
  }
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 200;
  }
}
