import { Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OngService } from '../../core/service/ong.service';
import { Ong } from '../../core/types/ong';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetalhesComponent } from '../../shared/modal-detalhes/modal-detalhes.component';


@Component({
  selector: 'app-relatorio-ong',
  standalone: false,
  templateUrl: './relatorio-ong.component.html',
  styleUrl: './relatorio-ong.component.scss'
})
export class RelatorioOngComponent {
  displayedColumns: string[] = ['nome', 'cpfOrCnpj', 'cep', 'email', 'telefone', 'cidade', 'tipo_doacao'];
  readonly dialog = inject(MatDialog);
  dataSource = new MatTableDataSource<Ong>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ongService: OngService) { }

  ngOnInit(): void {
    this.ongService.ongList().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log("Dados não importados", err);
      }
    })

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

   openDialog(enterAnimationDuration: string, exitAnimationDuration: string, cpfOrCnpj: string): void {
    this.dialog.open(ModalDetalhesComponent, {
      width: '1044px',
      height: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
       data: { cpfOrCnpj }
    });
  }
}
