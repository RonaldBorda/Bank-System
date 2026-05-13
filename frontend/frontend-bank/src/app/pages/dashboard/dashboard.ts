import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar';
import { SidebarComponent } from '../../layout/sidebar/sidebar';
import { AccountService } from '../../core/services/account.service';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../core/services/transaction.service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent,
    SidebarComponent,
    CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit{
  accounts: any[] = [];
  transactions: any[] = [];
  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
 
    this.accountService.getAccounts().subscribe({
      next: (response: any) => {
        this.accounts = response;
        this.cdr.detectChanges();
        if (this.accounts.length > 0) {
          const cuentaId = this.accounts[0]._id;
          this.loadTransactions(cuentaId);
        }
      },
      error: (error) => {
        console.log(error);
      }
  
    });
  
  }
  loadTransactions(cuentaId: string) {
    this.transactionService.getTransactions(cuentaId).subscribe({
      next: (response: any) => {
        this.transactions = response;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
