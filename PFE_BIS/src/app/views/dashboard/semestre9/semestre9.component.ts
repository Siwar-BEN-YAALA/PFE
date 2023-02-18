import { Component } from '@angular/core';

@Component({
  selector: 'app-semestre9',
  templateUrl: './semestre9.component.html',
  styleUrls: ['./semestre9.component.scss']
})
export class Semestre9Component {

  data = [
    { UE:'M.E. Langues Vivantes 9', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'M.E. Culture d\'Entreprise 9', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'M.E. Projet de fin d\'études et stage technicien', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Stage Technicien', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Projet de fin d\'études - PFE', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'M.E. Traitement du Signal 3', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Codage et Traitement d\'Images', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Traitement Statistique du Signal', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Cryptographie', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'M.E. Réseaux et informatique', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Unix utilisation', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Unix programmation système', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Système .Net, le langage C#', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Système .Net, interface graphique', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Système .Net, bases de données', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Système .Net, développement Web en ASP.Net', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Administration réseau IP et sécurité', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Administration Windows', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Programmation Androïd sur plates-formes mobiles', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Méthodologie de conception de projets', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Simulation d\'entretiens d\'embauche', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'M.E. Option A : Réseaux et applications distribuées', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Serveurs Web', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Système .Net, programmation système', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Java EE', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'XML', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Services Réseaux et Applications Distribuées', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'M.E. Option B : Réseaux Mobiles', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Propagation', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Réseaux Cellulaires', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Réseaux locaux sans fil', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Transmission de la parole', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Gestion et supervision des services sur réseaux mobiles', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},

  ];

  data_Bis = [
    { UE:'M.E. Stage de Fin d\'Études', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},
    { UE:'Stage de fin d\'études', CC: '', TP: '', Partiel1: '', Partiel2:'', Projet: '', Rapport: '', Expose: '', Stage:'', Coef:'', NoteFinale: ''},

  ];
}
