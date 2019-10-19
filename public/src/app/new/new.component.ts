import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  myobj = { name: '', qty: '', price: '' }
  errors = [];
  constructor(
    private http:HttpService,
    private router:Router,
    private route:ActivatedRoute,
  ) { }
  ngOnInit() {
  }

submitForm() {
  const observable = this.http.create(this.myobj);
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