import { Component } from '@angular/core';
import { Student } from './Studentapp.Studentmodel';

@Component({
  selector:'app-root',
  templateUrl: './Studentapp.Studentcomponent.html',
  styleUrl: './Studentapp.Studentcomponent.css'
})

export class Studentcomponent {

  title = 'Student Management System';
  btn_submit:boolean=false;
  showheading:boolean=true;
  btn_value:string='Add';
  editMode:boolean=false;
  emailTrue:boolean=false;
  studObj:Student=new Student();
  arrayObjs:Array<Student>= new Array<Student>();

  Add()
  {
    if (!this.editMode){
      this.arrayObjs.push(this.studObj);
      this.studObj=new Student();  //clear
    }
    else{
      this.studObj=new Student(); 
    }
  }

  edit(studEdit:Student)
    {    
       this.btn_value="Edit";
       this.showheading=true;
       this.btn_submit=false;
       this.editMode=true;
       this.studObj=studEdit; 
    }
  
  delete(studDelete:Student)
  {
    let index = this.arrayObjs.indexOf(studDelete);
    if (index !== -1) {
      this.arrayObjs.splice(index, 1);
    } 
  }

  clear()
  {
    this.studObj=new Student(); 
  }

  submit(){
    if (this.arrayObjs.length === 0) {
      alert("No Student Registered!");
    } else{
      this.btn_submit=true;
      this.showheading=false;
    }
  }

}
 