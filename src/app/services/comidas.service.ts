import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Categories } from '../interfaces/comidas';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  constructor(private httpclient:HttpClient) { }

getListaComidas()
{
  return this.httpclient.get<Categories>('https://www.themealdb.com/api/json/v1/1/categories.php');
}

}
