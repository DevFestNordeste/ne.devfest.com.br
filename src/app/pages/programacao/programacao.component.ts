import { Component } from '@angular/core';

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.scss']
})
export class ProgramacaoComponent {
  horario = true
  items_manha = [
    {
      horario: "08:00 - 09:00",
      titulo: "Credenciamento"
    },
    {
      horario: "09:00 - 09:20",
      titulo: "Abertura"
    },
    {
      horario: "09:20 - 10:00",
      titulo: "Código tem gênero? O app BB mostra que não",
      palestrante: "Paula Moura | Principal Engineer App BB - Banco do Brasil"
    },
    {
      horario: "10:00 - 10:40",
      titulo: "Soft Skills: o que você precisa saber além de bits e bytes?",
      palestrante: "André Figueiredo | Líder Técnico - Nubank"
    },
    {
      horario: "10:40 - 11:00",
      titulo: "Conquiste seu futuro global: 7 estratégias práticas para o sucesso em entrevistas de emprego em inglês",
      palestrante: "Wellington Silva | Sócio da empresa GPS do Inglês"
    },
    {
      horario: "11:00 - 11:40",
      titulo: "Sua carreira tem propósito?",
      palestrante: "Fabiana Nascimento | Analista de Tecnologia da Informação - UFPB"
    },
    {
      horario: "12:00 - 14:00",
      titulo: "Almoço"
    },
  ]

  children1 = [
      {
        sala: "Sala Verde",
        titulo: "Modelos de IA",
        palestrante: "Cecília Flávia | Cientista de Dados - Ambev Tech",
        color: "#34A853"
      },
      {
        sala: "Sala Amarela",
        titulo: "Acessibilidade para além das PcDs: uso de comando de voz por Apicultores",
        palestrante: "Virgílio Magalhães  &  Jorge Kavicki | Agrobee",
        color: "#F9AB00"
      },
      {
        sala: "Sala Azul",
        titulo: "Desenvolvimento de Games com ReactJs",
        palestrante: "Mackson Araújo | Tech Lead - Grupo Neiva",
        color: "#4285F4"
      },
      {
        sala: "Sala Vermelha",
        titulo: "Como você pode proteger seus apps e seus usuários?",
        palestrante: "Fausto Blanco | Software Engineer Sênior - Banco BV",
        color: "#EA4335"
      },
      {
        sala: "Sala Branca",
        titulo: "Ao infinito e além? Afinal, as IAs têm limite?",
        palestrante: "Andressa Freires | Data Scientist Sênior - Nubank",
      },
    ]

    children2 = [
      {
        sala: "Sala Verde",
        titulo: "Construindo Apps Android de Qualidade para o Futuro com Integração Contínua",
        palestrante: "Aline Ayres | Lead Mobile Developer - Thoughtworks",
        color: "#34A853"
      },
      {
        sala: "Sala Amarela",
        titulo: "Como sobreviver ao Largados & Pelados com um Autoencoder",
        palestrante: "Arnaldo Gualberto | Machine Learning Engineer Sr - Arado",
        color: "#F9AB00"
      },
      {
        sala: "Sala Azul",
        titulo: "Automações Mobile com Github Actions",
        palestrante: "Ademir Queiroga | Android & Automation engineer - Fuze",
        color: "#4285F4"
      },
      {
        sala: "Sala Vermelha",
        titulo: "Desvendando a síndrome do impostor: Seja você, sem Desculpas!",
        palestrante: "Isabelle Melo &  Antônio Pedro | Grupo Neiva & Picpay",
        color: "#EA4335"
      },
      {
        sala: "Sala Branca",
        titulo: "Java X Kotlin: simplificando o backend",
        palestrante: "Francisco Neto | Integrante do projeto Synchro GoSyn4Tax",

    
      },
    ]

    children3 = [
      {
        sala: "Sala Verde",
        titulo: "O Renascimento do Angular",
        palestrante: "Gustavo Costa | Front-End Sênior",
        color: "#34A853"
      },
      {
        sala: "Sala Amarela",
        titulo: "IA Generativa: será que a Skynet vem aí?",
        palestrante: "Jéssica Costa | Cientista de Dados - Deloitte",
        color: "#F9AB00"
      },
      {
        sala: "Sala Azul",
        titulo: "Desvendando apicuns por meio de Google Earth Engine e Deep Learning",
        palestrante: "Maria Luize | Deep Learning Researcher - Solved Soluções",
        color: "#4285F4"
      },
      {
        sala: "Sala Vermelha",
        titulo: "Do Caos à Clareza: a Magia das MLOps na Deduplicação de Dados",
        palestrante: "Rodolfo Teles | Engenheiro Machine Learning - Globo",
        color: "#EA4335"
      },
      {
        sala: "Sala Branca",
        titulo: "Gestão de tempo para alcançar grandes metas",
        palestrante: "Duda Pinheiro | Product Owner - Fcamara",
      },
    ]


  items_tarde = [
    {
      horario: "16:00 - 16:15",
      titulo: "Avisos/ Sorteios"
    },
    {
      horario: "16:15 - 16:30",
      titulo: "Recado Grupo Neiva"
    },
    {
      horario: "16:30 - 17:20",
      titulo: "AI + Cloud: Acesso a Saúde para 30 milhões de vidas",
      palestrante: "Rafael Figueroa | CEO Portal Telemedicina"
    }
    ,
    {
      horario: "17:20 - 18:00",
      titulo: "Como impulsionar a carreira utilizando Inteligência Artificial",
      palestrante: "Mikaeri Ohana | Data and Machine Learning Specialist - CI&T"
    },
    {
      horario: "18:00",
      titulo: "Encerramento"
    }
  ]

  troca(){
    this.horario = !this.horario
  }

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
  },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
  ];
}
