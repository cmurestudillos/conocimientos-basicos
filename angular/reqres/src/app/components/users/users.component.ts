import { CRUDService } from '../../services/app.service';
import { User } from '../../models/users.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var Materialize: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

  public data: User[];
  private currentUrl: string;
  public user: User = {id: 0, avatar: '', first_name: '', last_name: ''};

  constructor(private route: ActivatedRoute, private router: Router, private crud: CRUDService) { }

  ngOnInit() {
    this.route['data'].subscribe(
      response => {
        this.data = response['data']['data'];
        this.currentUrl = response['url'];
      }
    );
  }

  private deleteRegister(id: number) {
    this.crud.delete(`${this.currentUrl}/${id}`).subscribe(
      response =>  {
        this.data = this.data.filter(value => value.id !== id);
        Materialize.toast('El registro fue eliminado', 4000);
      }
    );
  }

  private getUser(id: number) {
    this.router.navigate(['usuario', id]);
  }

  private saveRegister() {
    this.crud.post('register', this.user).subscribe(
      response =>  {
        this.data.push(this.user);
        Materialize.toast('El registro fue guardado exitosamente', 4000);
      }
    );
  }

}
