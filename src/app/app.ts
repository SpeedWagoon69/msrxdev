import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar';
import { HeroComponent } from '../components/hero/hero';
import { ProjectsComponent } from '../components/projects/projects';
import { SkillsComponent } from '../components/skills/skills';
import { ContactComponent } from '../components/contact/contact';
import { About } from '../components/about/about';
import { TechS } from '../components/tech-s/tech-s';
import { DashboardPreview } from '../components/dashboard-preview/dashboard-preview';
import { AppLn } from '../components/app-ln/app-ln';
import '@lottiefiles/dotlottie-wc';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    HeroComponent, 
    ProjectsComponent, 
    SkillsComponent, 
    ContactComponent,
    About,
    TechS,
    DashboardPreview,
    AppLn
  ],
  template: `
    <!-- Barra de navegación fija -->

    <!-- Contenido principal -->
    <main class="bg-slate-950 min-h-screen selection:bg-purple-500 selection:text-white text-slate-100">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-tech-s></app-tech-s>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </main>
    
    <!-- Footer súper sencillo -->
    <footer class="bg-slate-900 border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
      <p>© 2026 Miguel Saldaña. Todos los derechos reservados.</p>
    </footer>
  `
})
export class AppComponent {
  title = 'msrxdev-frontend';
}