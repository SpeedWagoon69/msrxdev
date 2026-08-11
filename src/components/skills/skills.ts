import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="habilidades" class="py-24 bg-slate-900 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-3">
          <span class="text-purple-500">_</span> Stack Tecnológico
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          @for (skill of skills; track skill) {
            <div class="flex items-center justify-center p-4 bg-slate-950 border border-slate-800 rounded-lg hover:bg-slate-800 hover:border-purple-500/50 transition-all cursor-default">
              <span class="text-slate-300 font-medium">{{ skill }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  skills = [
    'C#', 'Java', 'Python', 'TypeScript', 
    'Angular', 'React', 'Node.js', 'SQL Server',
    'PostgreSQL', 'SQLite', 'Supabase', 'Git'
  ];
}