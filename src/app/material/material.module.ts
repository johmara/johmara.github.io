import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';





@NgModule({
  declarations: [],
  imports: [
    MatSlideToggleModule,
    MatButtonModule, MatCheckboxModule,
    MatTabsModule
  ],
  exports: [
    MatSlideToggleModule,
    MatButtonModule, MatCheckboxModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
