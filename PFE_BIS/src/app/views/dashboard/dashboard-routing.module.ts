import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {ButtonsComponent} from "../buttons/buttons/buttons.component";
import {TestComponent} from "./test/test.component";
import {SuiviTOEICComponent} from "./suivi-toeic/suivi-toeic.component";
import {SuiviSMIComponent} from "./suivi-smi/suivi-smi.component";
import {FicheDeScolariteComponent} from "./fiche-de-scolarite/fiche-de-scolarite.component";
import {Semestre5Component} from "./semestre5/semestre5.component";
import {Semestre7Component} from "./semestre7/semestre7.component";
import {Semestre9Component} from "./semestre9/semestre9.component";
import {DettesComponent} from "./dettes/dettes.component";
import {SuiviStagesComponent} from "./suivi-stages/suivi-stages.component";
import {DecouverteComponent} from "./decouverte/decouverte.component";
import {TechnicienComponent} from "./technicien/technicien.component";
import {FinEtudesComponent} from "./fin-etudes/fin-etudes.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: $localize`Dashboard`
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'butto',
        component: TestComponent,
        data: {
          title: 'Butto'
        },
      },
      {
        path: 'suivitoeic',
        component: SuiviTOEICComponent,
        data: {
          title: 'suivitoeic'
        },
      },
      {
        path: 'suivismi',
        component: SuiviSMIComponent,
        data: {
          title: 'suivismi'
        },
      },
      {
        path: 'fichedescolarite',
        component: FicheDeScolariteComponent,
        data: {
          title: 'fichedescolarite'
        },
      },
      {
        path: 'semestre5',
        component: Semestre5Component,
        data: {
          title: 'semestre5'
        },
      },
      {
        path: 'semestre7',
        component: Semestre7Component,
        data: {
          title: 'semestre7'
        },
      },
      {
        path: 'semestre9',
        component: Semestre9Component,
        data: {
          title: 'semestre9'
        },
      },
      {
        path: 'dettes',
        component: DettesComponent,
        data: {
          title: 'dettes'
        },
      },
      {
        path: 'suivistages',
        component: SuiviStagesComponent,
        data: {
          title: 'suivistages'
        },
      },
      {
        path: 'decouverte',
        component: DecouverteComponent,
        data: {
          title: 'decouverte'
        },
      },
      {
        path: 'technicien',
        component: TechnicienComponent,
        data: {
          title: 'technicien'
        },
      },
      {
        path: 'finetudes',
        component: FinEtudesComponent,
        data: {
          title: 'finetudes'
        },
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
