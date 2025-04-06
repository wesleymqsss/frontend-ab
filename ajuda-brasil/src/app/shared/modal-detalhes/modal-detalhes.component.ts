import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OngService } from '../../core/service/ong.service';
import { OngDetails } from '../../core/types/ong';

@Component({
  selector: 'app-modal-detalhes',
  standalone: false,
  templateUrl: './modal-detalhes.component.html',
  styleUrl: './modal-detalhes.component.scss'
})
export class ModalDetalhesComponent {
  dataSource: OngDetails = {} as OngDetails;
  constructor(
    public dialogRef: MatDialogRef<ModalDetalhesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { cpfOrCnpj: string },
    private ongService: OngService
  ) {}

  ngOnInit(): void {
    this.ongService.ongDetails(this.data.cpfOrCnpj).subscribe({
      next: (data) => {
        this.dataSource = data[0];
        console.log(this.dataSource.nome);

      }
    })
  }
  close(): void {
    this.dialogRef.close();
  }
}
