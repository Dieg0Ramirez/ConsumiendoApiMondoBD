import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    tasks:Task[] = [];
    _id:string;
    rol:string;
    contrasena:string;
    usuario:string;
    email:string;
    apellido:string;
    nombre:string;
    list=[];
    constructor (private http:HttpClient, private TaskService: TaskService){
      this.TaskService.getTask()
      .subscribe((tasks:any)=>{
        this.nombre=tasks.nombre
        console.log(tasks);
        this.list = tasks.object;
      })
    }
    ngOnInit(){
    }
    
    addTask(event) {
    event.preventDefault();
    // Traer los datos
    const newTask: Task = {
      rol:this.rol,
      contrasena:this.contrasena,
      usuario:this.usuario,
      email:this.email,
      apellido:this.apellido,
      nombre:this.nombre
    }
    this.TaskService.addTask(newTask)
      .subscribe((task:any) => {
        this.tasks.push(task);
        location.reload();
      });
  }
      deleteTask(id) {
        const response = confirm('¿Deseas eliminar este registro');
    
        if (response) {
        const tasks = this.tasks;
        this.TaskService.deleteTask(id)
          .subscribe((data:any) => {
            if (data.n === 1) {
              for (let i = 0; i < tasks.length; i++) {
                if (tasks[i]._id === id) {
                  // Lo removemos de la tabla
                  tasks.splice(i, 1);
                }
              }
            }
          });
        }
        return location.reload(); 
            }
      updateTask(task: Task) {
        const response = confirm('¿Deseas actualizar  esta información');
    
        if (response) {
        const newTask = { 
          _id: task._id,
          rol:this.rol,
          contrasena:this.contrasena,
          usuario:this.usuario,
          email:this.email,
          nombre:this.nombre,
          apellido:this.apellido
        };
        console.log(newTask);
        this.TaskService.updateTask(newTask)
          .subscribe(res => {
            task.rol= task.rol;
            task.contrasena = task.contrasena;
            task.usuario = task.usuario;
            task.email = task.email;
            task.nombre = task.nombre;
            task.apellido = task.apellido;
          });
    
        }
  
        }
        mostrarDatos(task : Task){
          this._id = task._id;
          this.rol = task.rol;
          this.contrasena = task.contrasena;
          this.usuario = task.usuario;
          this.email = task.email;
          this.nombre = task.nombre;
          this.apellido = task._id;
          this.apellido = task._id;
    }
  }
