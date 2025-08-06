import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Icon } from '../../enums/icon';
import { CertificadoService } from '../../_services/certificado';
import { CertificadoModel } from '../../models/Certificado';
import { Helper } from '../../../utils/helper';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado implements OnInit {
  icon = Icon;
  idCert?: number;
  certificado?: CertificadoModel;
  dataCert?: string;
  atividadesParaExibir?: string;

  @ViewChild('certElemento') certElemento!: ElementRef;

  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idCert = +params.get('id')!;
      this.certificado = this.certificadoService.certificados.find(x => x.id === this.idCert);
      this.dataCert = Helper.dateFormatter(this.certificado?.dataEmissao ?? new Date);
    });

    this.atividadesParaExibir = this.certificado?.atividades.map(x => x.name).join(', ');
    console.log(this.atividadesParaExibir, this.certificado?.atividades)
  }

  baixarCertificado() {
    html2canvas(this.certElemento.nativeElement, { scale: 3 })
      .then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `certificado_${this.certificado?.nomeAluno.replaceAll(' ', '_')}.png`;
        link.click();
      })
  }
}
