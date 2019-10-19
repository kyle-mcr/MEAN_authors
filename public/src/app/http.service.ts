import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  findAll(){
    return this.http.get('/products/findAll')
  }
  findOne(id){
    return this.http.get(`/products/findOne/${id}`)
  }
  create(myobj){
    return this.http.post('/products/create', myobj )
  }
  edit(myobj){
    return this.http.put(`/products/edit/${myobj._id}`, myobj)
  }
  delete(myobj){
    return this.http.delete(`/products/delete/${myobj._id}`)
  }
}
