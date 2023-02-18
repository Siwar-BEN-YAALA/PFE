import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { WidgetsModule } from '../widgets/widgets.module';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {RouterModule} from "@angular/router";
import {MatTabGroup, MatTabsModule} from "@angular/material/tabs";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {TestComponent} from "./test/test.component";
import { SuiviTOEICComponent } from './suivi-toeic/suivi-toeic.component';
import { SuiviSMIComponent } from './suivi-smi/suivi-smi.component';
import { FicheDeScolariteComponent } from './fiche-de-scolarite/fiche-de-scolarite.component';
import {Semestre5Component} from './semestre5/semestre5.component';
import { Semestre7Component } from './semestre7/semestre7.component';
import { Semestre9Component } from './semestre9/semestre9.component';
import { DettesComponent } from './dettes/dettes.component';
import { SuiviStagesComponent } from './suivi-stages/suivi-stages.component';
import { DecouverteComponent } from './decouverte/decouverte.component';
import { TechnicienComponent } from './technicien/technicien.component';
import { FinEtudesComponent } from './fin-etudes/fin-etudes.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    WidgetsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatSnackBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    IconModule,
  ],
  declarations: [DashboardComponent, TestComponent, SuiviTOEICComponent, SuiviSMIComponent, FicheDeScolariteComponent, Semestre5Component, Semestre7Component, Semestre9Component, DettesComponent, SuiviStagesComponent, DecouverteComponent, TechnicienComponent, FinEtudesComponent]
})
export class DashboardModule {
}
