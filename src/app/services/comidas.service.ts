import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  constructor(private httpclient:HttpClient) { }

getListaComidas()
{
  return this.httpclient.get('https://www.themealdb.com/api/json/v1/1/categories.php');
}

}
