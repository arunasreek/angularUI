import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';


//components
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { TopbarComponent } from './common/topbar/topbar.component';
import { AlertComponent } from './alert/alert.component';
import { AccordionGroupComponent } from './accordion/accordion-group.component';
import { AccordionComponent } from './accordion/accordion.component';
import { BootstrapSelectDirective } from './bootstrap-select/bootstrap-select.directive';
import { TabComponent } from './tabs/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { LabelControlDirective } from './label/label.directive';

@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent,
        TopbarComponent,
        AlertComponent,
        AccordionGroupComponent,
        AccordionComponent,
        BootstrapSelectDirective,
        TabComponent,
        TabsComponent,
        LabelControlDirective
    ],
    imports: [
        BrowserModule, FormsModule, ReactiveFormsModule,RouterModule
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        TopbarComponent,
        AlertComponent,
        AccordionGroupComponent,
        AccordionComponent,
        BootstrapSelectDirective,
        TabComponent,
        TabsComponent,
        LabelControlDirective
    ],
    providers: []
})

export class ComponentsModule { }