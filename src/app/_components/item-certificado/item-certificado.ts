import { Component, Input, OnInit } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { RouterLink } from '@angular/router';
import { Helper } from '../../../utils/helper';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado implements OnInit {
  @Input() nomeAluno: string = '';
  @Input() dataEmissao: Date = new Date;
  @Input() idAluno: number = 0;

  dataCert: string = '';

  ngOnInit(): void {
    this.dataCert = Helper.dateFormatter(this.dataEmissao);
  }
}
