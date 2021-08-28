import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private _baseUrl = 'http://localhost:8000/files/api/';

  constructor(
    private _http: HttpClient
  ) { }

  public upload(formData) {
    return this._http.post(this._baseUrl, formData);
  }
}
