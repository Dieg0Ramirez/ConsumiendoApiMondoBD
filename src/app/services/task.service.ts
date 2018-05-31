import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  domain:string = 'http://localhost:3977';

  constructor(private http:HttpClient) { }

  getTask(){
    return this.http.get<Task[]>(`${this.domain}/api/usuarios`).pipe(res => res);    
  }
  getTask1(id){
    return this.http.get<Task[]>(`${this.domain}/api/usuario/${id}`).pipe(res => res);    
  }

  addTask(newTask: Task){
    return this.http.post<Task[]>(`${this.domain}/api/usuario`,newTask).pipe(res => res); 
  }
  deleteTask(id){
    
    return this.http.delete<Task[]>(`${this.domain}/api/usuario/${id}`).pipe(res=>res);
  }
  updateTask(newTask){
    return this.http.put<Task[]>(`${this.domain}/api/usuario/${newTask._id}`, newTask).pipe(res=>res);
  }
}