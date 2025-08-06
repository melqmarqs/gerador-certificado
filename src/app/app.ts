import { Component, OnInit } from '@angular/core';
import { BaseUi } from "./_components/base-ui/base-ui";
import { Navbar } from "./_components/navbar/navbar";
import { RouterOutlet } from '@angular/router';
import { CertificadoService } from './_services/certificado';
import { CertificadoModel } from './models/Certificado';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'gerador-certificado';

  constructor(private certificadoService: CertificadoService) { }

  ngOnInit(): void {
    const certs = localStorage.getItem('certificados');
    if (certs) {
      const certsModel = [...JSON.parse(certs) as CertificadoModel[]];
      this.certificadoService.certificados = [...certsModel];
    }
  }
}
