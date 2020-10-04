import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';


const MaterialComponents = [MatListModule, MatButtonModule, MatIconModule,
  MatToolbarModule, MatMenuModule, MatSidenavModule, MatCardModule,
  MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule,
  MatSortModule, MatSnackBarModule, MatNativeDateModule, MatDatepickerModule,
  MatGridListModule, MatDialogModule, MatSelectModule,MatSnackBarModule];

@NgModule({
  imports: [MaterialComponents], exports: [MaterialComponents]
})
export class MaterialModule { }
