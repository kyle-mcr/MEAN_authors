import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  myobj: any;
  id: any;
  errors = [];
  constructor(
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.getData();
    this.myobj = { name: '' };
  }
  getDetails (id) {
      let observable2 = this.http.findOne(id);
      observable2.subscribe(data => {
        this.myobj = data;
        console.log(this.myobj);
      })
  }
getData() {
  let observable = this.route.params.subscribe(data => {
    this.id = data['id'];
    this.getDetails(this.id);
  })
}

submitForm() {
  const observable = this.http.edit(this.myobj);
  observable.subscribe((data: any) => {
    if (data.message === 'fail') {
      this.errors = this.errorHelper(data.err.errors);
      console.log(this.errors);
    } else {
      this.errors = [];
      this.myobj = {
        name: '',
        qty: '',
        price: ''
      };
     
      this.router.navigate(['/']);
    }
  });
}

errorHelper(errorMessage: any) {
  const errorArr = [];
  // tslint:disable-next-line:forin
  for (const error in errorMessage) {
    console.log(error);
    errorArr.push({path: errorMessage[error].path, message: errorMessage[error].message});
  }

  return errorArr;
}

}
