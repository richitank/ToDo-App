import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  todoArray=[]

  addTodo(value){
    this.todoArray.push(value)
    console.log(this.todoArray)
  }

  todoSubmit(value:any){
    if(value!==""){
   this.todoArray.push(value.todo)
    //this.todoForm.reset()
   }else{
     alert('Field required **')
   }
   
 }

  deleteItem(todo){
    for(let i=0; i<=this.todoArray.length; i++){
      if(todo == this.todoArray[i]){
        this.todoArray.splice(i,1)
      }
    }
  }
  
}
