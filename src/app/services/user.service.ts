import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { accesoUsuario } from '../clases/user';
import { loginUser, User } from '../Modelos/user';

const url = 'http://localhost:3000/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  registrar(usuario: User): Observable <any> {
    return this.http.post(url, usuario);
  }

  login(user: loginUser): Observable <any> {
    return this.http.post(url + 'login' , user);
  }

  guardarToken(token: string ): void {
    localStorage.setItem('userToken', token);
  }

  isLoged(): boolean {
    return !!localStorage.getItem('userToken');
  }

  logOut(){
    localStorage.removeItem('userToken');
  }

  getToken(): string {
    return localStorage.getItem('userToken');
  }

  obtenerPerfil(): Observable <any>{
    return this.http.get(url)
  }

  acceso (usuario: accesoUsuario): Observable<any>{
    return this.http.post(url+'login', usuario)
  }

  leerToken(): string{
    return localStorage.getItem('userToken')
  }

  editarPerfil(usuario:User): Observable <any>{
    return this.http.put(url,usuario)

  }

  eliminarUsuario(): Observable<any>{
    return this.http.delete(url)
  }
}
