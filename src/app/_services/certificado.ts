import { Injectable } from '@angular/core';
import { CertificadoModel } from '../models/Certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
  certificados: CertificadoModel[] = [];

  adicionarCertificado(certificado: CertificadoModel) {
    this.certificados.push(certificado);
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }

  getCertificados = () => [...this.certificados]
}
