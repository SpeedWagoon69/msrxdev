import { Component, HostListener } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardPreview } from '../dashboard-preview/dashboard-preview';
import { AppLn } from '../app-ln/app-ln';

interface Cedi {
  id: number;
  nombre: string;
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

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DashboardPreview, AppLn],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
      // Estados para controlar la UI (reemplazan a getElementById)
  isSidebarOpen: boolean = false;
  isCollapsed: boolean = false;
  isSubmenuOpen: boolean = false;
isReportesOpen = false;
  // Controles y datos existentes
  ddlCedi = new FormControl('0');

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
      KLDetalle: 780.40,
      TicketPromedio: 110.00,
      PorcentajeVentas: '62%',
      PorcentajeVisita: '62%',
      KmActuales: 34.1,
      TiempoMinEntreVenta: '00:05:10',
      TiempoMaxEntreVenta: '00:48:50',
      FechaDB: '08:30:00',
      HoraFinJornada: '16:15:00'
    }
    ];
  
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
}
