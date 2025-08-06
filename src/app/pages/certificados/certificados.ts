import { Component, OnInit } from '@angular/core';
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { Icon } from '../../enums/icon';
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado';
import { CertificadoModel } from '../../models/Certificado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton, RouterLink, CommonModule],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados implements OnInit {
  icon = Icon;
  certificados: CertificadoModel[] = [];

  constructor(private certificadoService: CertificadoService) { }

  ngOnInit(): void {
    this.certificados = [...this.certificadoService.certificados].sort((a, b) => a.nomeAluno.localeCompare(b.nomeAluno));
  }
}
