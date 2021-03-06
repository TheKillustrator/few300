import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  routeQueryParams$: Subscription;
  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.routeQueryParams$ = this.route.queryParams.subscribe(params => {
      if (params.inbox) {
        this.showList();
      }
    });
  }

  private showList(): void {
    const dlg = this.dialog.open(TodoListComponent, { disableClose: false });
    dlg.afterClosed().subscribe(_ => this.router.navigate(['dashboard']));
  }
}
