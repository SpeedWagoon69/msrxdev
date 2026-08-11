import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-s',
  imports: [],
  templateUrl: './tech-s.html',
  styleUrl: './tech-s.css',
})
export class TechS {
  closeWindow(el: HTMLElement) {
  el.classList.remove('reverse');
  el.classList.add('closing');

  setTimeout(() => {
    el.classList.remove('closing');
    void el.offsetWidth;

    el.classList.add('closing', 'reverse');

    setTimeout(() => {
      el.classList.remove('closing', 'reverse');
    }, 300);
  }, 2000);
}

minimizeWindow(el: HTMLElement) {
  el.classList.remove('reverse');
  el.classList.add('minimizing');

  setTimeout(() => {
    el.classList.remove('minimizing');
    void el.offsetWidth;

    el.classList.add('minimizing', 'reverse');

    setTimeout(() => {
      el.classList.remove('minimizing', 'reverse');
    }, 300);
  }, 2000);
}

maximizeWindow(el: HTMLElement) {
  el.classList.remove('reverse');
  el.classList.add('maximizing');

  setTimeout(() => {
    el.classList.remove('maximizing');
    void el.offsetWidth;

    el.classList.add('maximizing', 'reverse');

    setTimeout(() => {
      el.classList.remove('maximizing', 'reverse');
    }, 300);
  }, 2000);
}
}
