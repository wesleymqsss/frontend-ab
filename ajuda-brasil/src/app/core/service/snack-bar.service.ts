import {  Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { };

  sucessSnackBar(message: string, action: string,) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }
}
