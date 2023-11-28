import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar-reporte',
  templateUrl: './generar-reporte.page.html',
  styleUrls: ['./generar-reporte.page.scss'],
})
export class GenerarReportePage implements OnInit {
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
  constructor() { }

  ngOnInit() {
  }

}
