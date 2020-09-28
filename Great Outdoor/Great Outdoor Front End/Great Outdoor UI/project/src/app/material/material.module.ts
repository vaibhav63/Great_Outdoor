import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';


const MaterialComponents = [MatListModule, MatButtonModule, MatIconModule,
  MatToolbarModule, MatMenuModule];

@NgModule({
  imports: [MaterialComponents], exports: [MaterialComponents]
})
export class MaterialModule { }
