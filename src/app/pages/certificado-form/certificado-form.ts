import { Component, ViewChild } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Icon } from '../../enums/icon';
import { CertificadoModel } from '../../models/Certificado';
import { Helper } from '../../../utils/helper';
import { CertificadoService } from '../../_services/certificado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  icon = Icon;
  nome: InputModel = { value: '' };
  atividade: InputModel = { value: '' };
  atividades: AtividadeModel[] = [];
  certificado: CertificadoModel = { atividades: [], nomeAluno: '' };
  @ViewChild('form') form!: NgForm;

  constructor(private certificadoService: CertificadoService, private route: Router) { }

  campoInvalido = (campo: NgModel) => campo.invalid && campo.touched;

  desabilitarGerarCertificado = () => !this.nome || !this.nome.value || !this.nome.value.length || !this.atividades.length;

  adicionarAtividade = () => {
    if (this.atividade.value.length <= 0)
      return;

    let nextId = 1;
    if (this.atividades.length > 0) {
      let maxId = Math.max(...this.atividades.map(a => a.id));
      nextId = ++maxId;
    }

    this.atividades.push({
      id: nextId,
      name: this.atividade.value
    });

    this.limparAtividade();
  }

  limparAtividade() {
    this.atividade = { value: '' };
  }

  removerAtividade(id: number) {
    if (this.atividades.length > 0)
      this.atividades = [...this.atividades.filter(x => x.id != id)];

  }

  gerarCertificado() {
    if (this.desabilitarGerarCertificado())
      return;

    this.certificado.atividades = [...this.atividades];
    this.certificado.nomeAluno = this.nome.value;
    this.certificado.dataEmissao = new Date;

    this.adicionarCertificado();
  }

  adicionarCertificado() {
    let list = this.certificadoService.getCertificados();
    let certId: number = 1;
    if (list.length > 0) {
      const ids = [...list.map(x => x.id!)];
      certId = Math.max(...ids) + 1;
    }

    this.certificadoService.adicionarCertificado({...this.certificado, id: certId});
    this.redirecionar(certId);
  }

  redirecionar(idRota: number) {
    this.route.navigate(['certificados', idRota]);
  }
}
