import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-recuriter',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './recuriter.component.html',
  styleUrl: './recuriter.component.scss',
})
export class RecuriterComponent {
  constructor(public router: Router) {}
  goToSkills() {
    this.router.navigateByUrl('skills');
  }
  goToExperience(){
    this.router.navigateByUrl('experience');
  }
  goToContact(){
    this.router.navigateByUrl('contact');
  }
  goToProjects(){
    this.router.navigateByUrl('projects');
  }
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 200;
  }
}
