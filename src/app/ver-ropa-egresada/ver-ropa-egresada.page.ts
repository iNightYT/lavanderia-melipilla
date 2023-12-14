import { Component, OnInit } from '@angular/core';
import { SqliteService } from '../servicios/sqlite.service';

@Component({
  selector: 'app-ver-ropa-egresada',
  templateUrl: './ver-ropa-egresada.page.html',
  styleUrls: ['./ver-ropa-egresada.page.scss'],
})
export class VerRopaEgresadaPage implements OnInit {
  ropasEgresadas: any[] = [];

  constructor(private sqliteService: SqliteService) {}

  async ngOnInit() {
    this.cargarRopasEgresadas();
  }

  async cargarRopasEgresadas() {
    // Obtener las ropas egresadas desde la base de datos
    this.ropasEgresadas = await this.sqliteService.obtenerRopasEgresadas();
  }
}