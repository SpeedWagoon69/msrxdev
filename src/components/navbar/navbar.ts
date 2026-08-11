import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <span class="text-xl font-bold text-white tracking-wider">
              MSRX<span class="text-purple-500">dev</span>
            </span>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#hero" class="text-slate-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Inicio</a>
              <a href="#proyectos" class="text-slate-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Proyectos</a>
              <a href="#habilidades" class="text-slate-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Habilidades</a>
              <a href="#contacto" class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}