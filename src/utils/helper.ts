export const Helper = {
  dateFormatter(date: Date | string) {
    let options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return Intl.DateTimeFormat('pt-BR', options).format(new Date(date))
  }
}
