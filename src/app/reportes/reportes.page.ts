import { Component, OnInit } from '@angular/core';
import { SqliteService } from '../servicios/sqlite.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {
  reportes: any[] = [];

  constructor(private sqliteService: SqliteService) {}

  ngOnInit() {
    this.obtenerReportes();
  }

  async obtenerReportes() {
    this.reportes = await this.sqliteService.obtenerReportes();
  }
}