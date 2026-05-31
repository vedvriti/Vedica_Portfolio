import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

export interface Skill {
  name: string;
  proficiency: number;
  topPick?: boolean;
  icon: string;
}

export interface SkillRow {
  label: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sectionRef') sectionRef!: ElementRef<HTMLElement>;

  visible = false;
  private observer!: IntersectionObserver;

  skillRows: SkillRow[] = [
    {
      label: 'LANGUAGES',
      skills: [
        { name: 'TypeScript', proficiency: 90, topPick: true, icon: 'assets/videos/typescript.svg' },
        { name: 'JavaScript', proficiency: 88, topPick: true, icon: 'assets/videos/javascript.svg' },
        { name: 'C#', proficiency: 78, icon: 'assets/videos/csharp.svg' }
      ],
    },
    {
      label: 'FRONTEND',
      skills: [
        { name: 'Angular', proficiency: 92, topPick: true, icon: 'assets/videos/angular.svg' },
        { name: 'React js', proficiency: 82, icon: 'assets/videos/reactjs.svg' },
        { name: 'Tailwind CSS', proficiency: 80, icon: 'assets/videos/tailwindcss.svg' },
        { name: 'Kendo UI', proficiency: 75, icon: 'assets/videos/kendo.svg' },
        { name: 'RxJS', proficiency: 78, icon: 'assets/videos/rxjs.svg' },
        { name: 'Bootstrap', proficiency: 70, icon: 'assets/videos/bootstrap.svg' },
      ],
    },
    {
      label: 'BACKEND & API',
      skills: [
        { name: 'ASP.NET Core', proficiency: 80, topPick: true, icon: 'assets/videos/netcore.svg' },
        { name: 'ASP.NET Web API', proficiency: 78, icon: 'assets/videos/api.svg' },
        { name: 'Entity Framework', proficiency: 75, icon: 'assets/videos/ef.svg' },
        { name: 'JWT Auth / RBAC', proficiency: 72, icon: 'assets/videos/jwt.svg' },
      ],
    },
    {
      label: 'DATABASE & DEVOPS',
      skills: [
        { name: 'MSSQL / PostgreSQL', proficiency: 72, icon: 'assets/videos/postgresql.svg' },
        { name: 'Docker', proficiency: 65, icon: 'assets/videos/docker.svg' },
        { name: 'Azure (AZ-900)', proficiency: 60, icon: 'assets/videos/azure.svg' },
        { name: 'CI/CD', proficiency: 60, icon: 'assets/videos/devops.svg' },
      ],
    },
    {
      label: 'TOOLS & WORKFLOW',
      skills: [
        { name: 'Git / GitHub', proficiency: 88, icon: 'assets/videos/Git.svg' },
        { name: 'Figma', proficiency: 78, icon: 'assets/videos/Figma.svg' },
        { name: 'Jira / Scrum', proficiency: 80, icon: 'assets/videos/Jira.svg' },
        { name: 'Postman / Swagger', proficiency: 75, icon: 'assets/videos/Postman.svg' },
        { name: 'GitHub Copilot', proficiency: 70, icon: 'assets/videos/GitHub.svg' },
      ],
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

  getInitials(name: string): string {
    return name.slice(0, 2).toUpperCase();
  }
}
