import { UserFb } from './../models/user-fb.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BaseResponse, Result } from '../models/base-response.model';

export class Constant {
  static baseUrl: string = "http://67.215.232.59:4020";
  static  getUser: string  = '/api/v1/getFb/all?page=';
}


@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(private http: HttpClient) { }

  /**
   * Get all User
   * @param pageNumber pageNumber
   * @returns list of User
   */
   public getAllUser(pageNumber: number): Observable<BaseResponse<Result<UserFb>>> {

    return this.http.get(Constant.baseUrl + Constant.getUser + pageNumber);
  }

}
