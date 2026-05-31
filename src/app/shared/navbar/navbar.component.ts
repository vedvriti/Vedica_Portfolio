import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  activeRoute = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Track active route for highlight
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.activeRoute = e.urlAfterRedirects;
      });

    // Set on first load
    this.activeRoute = this.router.url;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToRecruiter(): void {
    this.router.navigate(['/recuriter']);
  }

  goToExperience(): void {
    this.router.navigate(['/experience']);
  }

  goToSkills(): void {
    this.router.navigate(['/skills']);
  }

  goToProjects(): void {
    this.router.navigate(['/projects']);
  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }
}