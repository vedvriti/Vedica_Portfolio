import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

export interface ProjectCard {
  title: string;
  client?: string;
  description: string;
  tags: string[];
  coverStyle: string;
  icon: string;
  badge?: string;
  liveUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sectionRef') sectionRef!: ElementRef<HTMLElement>;

  visible = false;
  private observer!: IntersectionObserver;

  smallCards: ProjectCard[] = [
    {
      title: 'Service CRM Modernization',
      client: 'Epicor (Sonata Software)',
      description: 'Legacy Perl → Angular 16 migration delivering 90% load time reduction across the entire CRM platform.',
      tags: ['Angular 16', 'Kendo UI', 'RxJS', 'TypeScript'],
      coverStyle: 'linear-gradient(135deg, #1a0508 0%, #1a1010 100%)',
      icon: '⚙️',
      badge: 'TOP 10',
    },
    {
      title: 'GMT Digital Transformation',
      client: 'Green Mountain',
      description: 'React 18 + .NET 8 microservices platform. Figma to production in 2-week Agile sprints.',
      tags: ['React 18', '.NET 8', 'Tailwind CSS', 'JWT', 'Microservices'],
      coverStyle: 'linear-gradient(135deg, #0a0a1a 0%, #0d0d1a 100%)',
      icon: '🔷',
    },
    {
      title: 'Café Website UI',
      client: 'Varcons Technologies',
      description: 'Responsive static site built from Figma wireframes with mobile-first design principles.',
      tags: ['HTML5', 'CSS3', 'Bootstrap', 'Figma'],
      coverStyle: 'linear-gradient(135deg, #0a1a0a 0%, #0d1a0e 100%)',
      icon: '☕',
    },
  ];

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.visible = true;
          this.observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    this.observer.observe(this.sectionRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
