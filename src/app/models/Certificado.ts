export interface CertificadoModel {
  id?: number,
  nomeAluno: string,
  atividades: AtividadeModel[],
  dataEmissao?: Date
}
