import { Component, HostListener, CUSTOM_ELEMENTS_SCHEMA, OnDestroy,OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardPreview } from '../dashboard-preview/dashboard-preview';
import { AppLn } from '../app-ln/app-ln';
import { FormsModule } from '@angular/forms';

// app.component.ts
interface Cedi {
  id: number;
  nombre: string;
}
interface Song {
  id: number;
  title: string;
  artist: string;
  singer_first_name: string;
  singer_last_name: string;
  description?: string;
  created_at: string;
}
interface RutaActiva {
  idRuta: string | number;
  Empleado: string;
  TotalClientes: number;
  VentasHoy: number;
  VisitasTotales: number;
  ProspectosHoy: number;
  KLDetalle: number;
  TicketPromedio: number;
  PorcentajeVentas: string | number;
  PorcentajeVisita: string | number;
  KmActuales: number;
  TiempoMinEntreVenta: string;
  TiempoMaxEntreVenta: string;
  FechaDB: string;
  HoraFinJornada: string | null;
}
interface ClienteRuta {
  Cliente: string;
  Direccion: string;
  Detalle: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DashboardPreview, AppLn, FormsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsComponent {
  // Estados para controlar la UI (reemplazan a getElementById)
  isSidebarOpen: boolean = false;
  isCollapsed: boolean = false;
  isSubmenuOpen: boolean = false;
  isReportesOpen = false;
  isDrawerOpen: boolean = false;
  // Controles y datos existentes
  ddlCedi = new FormControl('0');
  mostrarDemo = false;
  removingSongId: number | null = null;
  // Agrega esta línea para declarar la variable
  showSuccess = false;

  // Opcional: Métodos para controlar el modal de karaoke
  enviarPedido(event: Event) {
    event.preventDefault(); // Evita que se recargue la página si es un submit
    this.showSuccess = true;
  }

  cerrarModalSuccess() {
    this.showSuccess = false;
  }
  listaCedis: Cedi[] = [
    { id: 1, nombre: 'CEDI Norte' },
    { id: 2, nombre: 'CEDI Sur' },
    { id: 3, nombre: 'CEDI Centro' },
  ];

  onCediChange() {
    console.log('CEDI seleccionado ID:', this.ddlCedi.value);
  }
  listaRutasActivas: RutaActiva[] = [
    {
      idRuta: 'RUT-01',
      Empleado: 'Juan Pérez',
      TotalClientes: 25,
      VentasHoy: 12,
      VisitasTotales: 15,
      ProspectosHoy: 3,
      KLDetalle: 1450.5,
      TicketPromedio: 120.0,
      PorcentajeVentas: '80%',
      PorcentajeVisita: '60%',
      KmActuales: 45.2,
      TiempoMinEntreVenta: '00:05:12',
      TiempoMaxEntreVenta: '00:45:30',
      FechaDB: '08:30:00',
      HoraFinJornada: '17:00:00',
    },
    {
      idRuta: 'RUT-02',
      Empleado: 'María Gómez',
      TotalClientes: 30,
      VentasHoy: 8,
      VisitasTotales: 10,
      ProspectosHoy: 1,
      KLDetalle: 920.1,
      TicketPromedio: 115.0,
      PorcentajeVentas: '50%',
      PorcentajeVisita: '33%',
      KmActuales: 38.0,
      TiempoMinEntreVenta: '00:04:00',
      TiempoMaxEntreVenta: '00:55:10',
      FechaDB: '08:45:00',
      HoraFinJornada: null,
    },
    {
      idRuta: 'RUT-03',
      Empleado: 'Ana Perez',
      TotalClientes: 35,
      VentasHoy: 18,
      VisitasTotales: 18,
      ProspectosHoy: 1,
      KLDetalle: 920.1,
      TicketPromedio: 120.0,
      PorcentajeVentas: '70%',
      PorcentajeVisita: '44%',
      KmActuales: 38.0,
      TiempoMinEntreVenta: '00:04:00',
      TiempoMaxEntreVenta: '00:55:10',
      FechaDB: '08:45:00',
      HoraFinJornada: null,
    },
    {
      idRuta: 'RUT-01',
      Empleado: 'Carlos Gómez',
      TotalClientes: 40,
      VentasHoy: 25,
      VisitasTotales: 30,
      ProspectosHoy: 2,
      KLDetalle: 1150.5,
      TicketPromedio: 145.5,
      PorcentajeVentas: '82%',
      PorcentajeVisita: '75%',
      KmActuales: 45.2,
      TiempoMinEntreVenta: '00:03:15',
      TiempoMaxEntreVenta: '00:42:30',
      FechaDB: '08:15:00',
      HoraFinJornada: null,
    },
    {
      idRuta: 'RUT-02',
      Empleado: 'María Rodríguez',
      TotalClientes: 28,
      VentasHoy: 12,
      VisitasTotales: 15,
      ProspectosHoy: 0,
      KLDetalle: 640.0,
      TicketPromedio: 95.0,
      PorcentajeVentas: '55%',
      PorcentajeVisita: '53%',
      KmActuales: 29.5,
      TiempoMinEntreVenta: '00:06:20',
      TiempoMaxEntreVenta: '01:10:00',
      FechaDB: '09:00:00',
      HoraFinJornada: '15:30:00',
    },
    {
      idRuta: 'RUT-05',
      Empleado: 'Sofía Hernández',
      TotalClientes: 32,
      VentasHoy: 15,
      VisitasTotales: 20,
      ProspectosHoy: 1,
      KLDetalle: 780.4,
      TicketPromedio: 110.0,
      PorcentajeVentas: '62%',
      PorcentajeVisita: '62%',
      KmActuales: 34.1,
      TiempoMinEntreVenta: '00:05:10',
      TiempoMaxEntreVenta: '00:48:50',
      FechaDB: '08:30:00',
      HoraFinJornada: '16:15:00',
    },
  ];

  listaClientes: ClienteRuta[] = [
    {
      Cliente: 'ABARROTES EL GÜERO',
      Direccion: 'AV. REVOLUCIÓN #1234, COL. CENTRO',
      Detalle: 'TEL: 664-123-4567 | CP: 00124',
    },
    {
      Cliente: 'SUPER ABARROTES SAN JOSÉ',
      Direccion: 'CALLE BENITO JUÁREZ #567',
      Detalle: 'TEL: 664-987-6543 | CP: 00125',
    },
    {
      Cliente: 'ABARROTES DON BETO',
      Direccion: 'CALLE OCAMPO 2DA #2213',
      Detalle: 'TEL: 664-289-8898 | CP: 22100',
    },
    {
      Cliente: 'SUPER A',
      Direccion: 'CALLE MANUEL MIRAFLORES #2512',
      Detalle: 'TEL: 664-781-1245 | CP: 21441',
    },
    {
      Cliente: 'TIENDA 3B',
      Direccion: 'CALLE MADERO 7MA #1234',
      Detalle: 'TEL: 664-123-5123 | CP: 12441',
    },
  ];
  songsPerTurn = 1;
  turnMenuOpen = false;
  songs: Song[] = [

    {
      id: 1,
      title: 'El Triste',
      artist: 'José José',
      singer_first_name: 'Miguel',
      singer_last_name: 'Saldaña',
      created_at: '2026-08-14T13:05:00',
      description: 'Canción final'
    },

    {
      id: 2,
      title: 'La Incondicional',
      artist: 'Luis Miguel',
      singer_first_name: 'Carlos',
      singer_last_name: 'Ramírez',
      created_at: '2026-08-14T13:08:00'
    },

    {
      id: 3,
      title: 'Amor Eterno',
      artist: 'Juan Gabriel',
      singer_first_name: 'Miguel',
      singer_last_name: 'Saldaña',
      created_at: '2026-08-14T13:12:00'
    },

    {
      id: 4,
      title: 'Ahora Te Puedes Marchar',
      artist: 'Luis Miguel',
      singer_first_name: 'Andrea',
      singer_last_name: 'López',
      created_at: '2026-08-14T13:15:00'
    },

    {
      id: 5,
      title: 'Lo Que No Fue No Será',
      artist: 'José José',
      singer_first_name: 'Carlos',
      singer_last_name: 'Ramírez',
      created_at: '2026-08-14T13:18:00'
    }

  ];
toggleTurnMenu(): void {

  this.turnMenuOpen =
    !this.turnMenuOpen;

}




turnDropdownOpen = false;

selectTurn(value: number): void {
  this.songsPerTurn = value;

  this.updateTurns();

  this.turnDropdownOpen = false;
}
@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent): void {

  const target =
    event.target as HTMLElement;

  if (
    !target.closest('.custom-select')
  ) {

    this.turnMenuOpen = false;

  }

}
  toggleMenuClientes() {
    if (window.innerWidth <= 980) {
      this.isSidebarOpen = !this.isSidebarOpen;
    } else {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  toggleReportes(): void {
    this.isReportesOpen = !this.isReportesOpen;
  }

  // Esto reemplaza tu window.addEventListener('resize', ...)
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 980) {
      this.isSidebarOpen = false;
    } else {
      this.isCollapsed = false;
    }
  }
  mostrarPassword = false;

  togglePassword(): void {
    this.mostrarPassword = !this.mostrarPassword;
  }

  mostrarModalDemo(): void {
    this.mostrarDemo = true;
  }

  cerrarModalDemo(): void {
    this.mostrarDemo = false;
  }
  moveGradient(event: MouseEvent): void {
    const element = event.currentTarget as HTMLElement;

    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    element.style.setProperty('--mouse-x', `${xPercent}%`);
    element.style.setProperty('--mouse-y', `${yPercent}%`);
  }

  resetGradient(): void {
    const element = document.querySelector('.karaoke-screen') as HTMLElement;

    if (!element) return;

    element.style.setProperty('--mouse-x', '50%');
    element.style.setProperty('--mouse-y', '50%');
  }
   // ==========================================
  // ORGANIZAR FILA
  // ==========================================

organizeQueue(): Song[] {

  const singerGroups: {
    [key: string]: Song[]
  } = {};

  const sorted = [...this.songs].sort(
    (a, b) =>
      new Date(a.created_at).getTime() -
      new Date(b.created_at).getTime()
  );


  // Agrupar canciones por cantante

  for (const song of sorted) {

    const key =
      `${song.singer_first_name}_${song.singer_last_name}`
        .toLowerCase();

    if (!singerGroups[key]) {
      singerGroups[key] = [];
    }

    singerGroups[key].push(song);
  }


  const queue: Song[] = [];


  // Crear turnos

  while (true) {

    const available =
      Object.values(singerGroups)
        .filter(group => group.length > 0);


    if (available.length === 0) {
      break;
    }


    available.sort(
      (a, b) =>
        new Date(a[0].created_at).getTime() -
        new Date(b[0].created_at).getTime()
    );


    const selected = available[0];


    const amount =
      Math.min(
        this.songsPerTurn,
        selected.length
      );


    for (let i = 0; i < amount; i++) {

      const song = selected.shift();

      if (song) {
        queue.push(song);
      }

    }

  }


  return queue;
}


// ==========================================
// CANCIONES ORGANIZADAS
// ==========================================

get organizedSongs(): Song[] {
  return this.organizeQueue();
}


// ==========================================
// CAMBIAR CANCIONES POR TURNO
// ==========================================

updateTurns(): void {

}
  deleteSong(id: number): void {

  if (this.removingSongId !== null) {
    return;
  }

  this.removingSongId = id;

  setTimeout(() => {

    this.songs = this.songs.filter(
      song => song.id !== id
    );

    this.removingSongId = null;

  }, 450);

}


  // ==========================================
  // FORMATO DE FECHA
  // ==========================================

  formatDate(dateString: string): string {

    const date =
      new Date(dateString);

    const hours =
      String(
        date.getHours()
      ).padStart(2, '0');

    const minutes =
      String(
        date.getMinutes()
      ).padStart(2, '0');

    return `${hours}:${minutes}`;
  }






}
