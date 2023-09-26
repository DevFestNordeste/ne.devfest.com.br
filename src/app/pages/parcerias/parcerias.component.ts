import { Component } from '@angular/core';

@Component({
  selector: 'app-parcerias',
  templateUrl: './parcerias.component.html',
  styleUrls: ['./parcerias.component.scss']
})
export class ParceriasComponent {
  mensagemWhatsApp = 'Olá! Tenho interesse em patrocinar o DevFest 2023!'

  redirecionarParaWhatsApp() {
    const numeroTelefone = '5583999792411'; // Substitua pelo número de telefone do destinatário
    const mensagem = encodeURIComponent(this.mensagemWhatsApp);
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagem}`;
    window.open(linkWhatsApp, '_blank');
  }
}
