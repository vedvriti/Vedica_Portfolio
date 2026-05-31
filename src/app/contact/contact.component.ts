import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sectionRef') sectionRef!: ElementRef<HTMLElement>;

  visible = false;
  submitted = false;
  private observer!: IntersectionObserver;

  contactForm: FormGroup;

expertise = [
  { icon: '⚡', label: 'Performance Optimization' },
  { icon: '♿', label: 'Accessible UI Development' },
  { icon: '🧩', label: 'Component Architecture' },
  { icon: '📱', label: 'Responsive Design' },
  { icon: '🚀', label: 'Angular & React Development' },
  { icon: '🔗', label: 'REST API Integration' }
];

  socials = [
    { icon: 'LI', label: 'LinkedIn', url: 'https://linkedin.com/in/vedica-882518191/' },
    { icon: 'GH', label: 'GitHub', url: 'https://github.com/vedvriti' },
    { icon: '@', label: 'Email', url: 'mailto:vritivedica07@gmail.com' },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

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

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitted = true;
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}
