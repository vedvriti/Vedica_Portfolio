import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
 
export interface EpisodeMetric {
  val: string;
  label: string;
}
 
export interface Episode {
  epLabel: string;
  epStatus: string;
  company: string;
  role: string;
  duration: string;
  startDate: Date;
  endDate: Date;
  isLive: boolean;
  clients?: string[];
  metrics: EpisodeMetric[];
  bullets: string[];
  tags: string[];
  open?: boolean;
}
 
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sectionRef') sectionRef!: ElementRef<HTMLElement>;
 
  visible = false;
  private observer!: IntersectionObserver;
 
  readonly careerStart = new Date('2024-03-01');
 
  get totalCareerMonths(): number {
    return this.monthsBetween(this.careerStart, new Date());
  }
 
  episodes: Episode[] = [
    {
      epLabel: 'EP 02',
      epStatus: 'NOW STREAMING',
      company: 'Sonata Software',
      role: 'Software Developer — Full Stack',
      duration: 'Mar 2024 – Present',
      startDate: new Date('2024-03-01'),
      endDate: new Date(),
      isLive: true,
      clients: ['Epicor · Service CRM', 'GMT · Green Mountain'],
      metrics: [
        { val: '90%', label: 'reduction in page load times' },
        { val: '2', label: 'real-time KPI dashboards shipped' },
        { val: '100%', label: 'client adoption rate' },
      ],
      bullets: [
        'Migrated legacy Perl CRM to Angular 16, achieving 90% reduction in page load times',
        'Built 2 real-time Kendo UI dashboards transforming complex datasets into live business intelligence',
        'Engineered JWT auth + RBAC authorization system with 100% successful client user adoption',
        'Developed React 18 frontend from Figma to production with 100% design fidelity using Tailwind CSS',
        'Reduced frontend code redundancy by 30% via reusable React components and custom hooks',
        'Designed RESTful microservices APIs in ASP.NET Core with server-side pagination for large datasets',
        'Delivered production features in 2-week Agile sprints, leading bi-weekly client demos',
      ],
      tags: ['Angular 16', 'React 18', 'TypeScript', '.NET 8', 'Kendo UI', 'RxJS', 'JWT', 'Tailwind CSS', 'Microservices', 'PostgreSQL', 'Docker', 'Agile'],
      open: false,
    },
    {
      epLabel: 'EP 01',
      epStatus: 'THE ORIGIN',
      company: 'Varcons Technologies',
      role: 'Frontend Developer Intern',
      duration: 'Mar 2023 – Aug 2023',
      startDate: new Date('2023-03-01'),
      endDate: new Date('2023-08-31'),
      isLive: false,
      metrics: [
        { val: '3', label: 'pixel-perfect pages delivered' },
        { val: '100%', label: 'mobile-first coverage' },
      ],
      bullets: [
        'Designed and built a responsive Café website using Figma, HTML5, Bootstrap, and CSS3',
        'Translated high-fidelity Figma wireframes into clean semantic code with pixel-perfect accuracy',
        'Applied modern UI/UX principles to deliver a polished, mobile-first static web experience',
      ],
      tags: ['HTML5', 'CSS3', 'Bootstrap', 'Figma', 'JavaScript'],
      open: false,
    },
  ];
 
  monthsBetween(start: Date, end: Date): number {
    return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30.44));
  }
 
  getTenurePct(ep: Episode): number {
    const epMonths = this.monthsBetween(ep.startDate, ep.endDate);
    return Math.min(100, Math.round((epMonths / this.totalCareerMonths) * 100));
  }
 
  getTenureMonths(ep: Episode): number {
    return this.monthsBetween(ep.startDate, ep.endDate);
  }
 
  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.visible = true;
          this.observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this.sectionRef.nativeElement);
  }
 
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}