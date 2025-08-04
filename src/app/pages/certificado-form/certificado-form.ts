import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  nome: InputModel = { value: '' };
  atividade: InputModel = { value: '' };
  atividades: AtividadeModel[] = [
    {
      id: 0,
      name: 'angular'
    },
    {
      id: 1,
      name: 'react'
    }
  ]
}
