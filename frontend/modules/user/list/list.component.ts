import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  users:any[]=[];
  constructor(private userService:UserService,private router:Router){}

  ngOnInit(): void {
    this.loadUsers();

  }
  loadUsers():void{
    this.userService.getAll().subscribe({
      next:(data) => (this.users=data),
      error:(err) => console.error('error  fetching users:',err)

    });
  }

  onAdd():void{
    this.router.navigate(['/user/add']);

  }
  onEdit(id:number):void{
    this.router.navigate(['/user/edit',id]);
  }
  onDelete(id:number):void{
    if(confirm('Are you sure you want to delete thi user?')){
      this.userService.delete(id).subscribe({
        next:() =>{
          alert('user deleted successfully!'),
          this.loadUsers();
        },
        error:(err)=>{
          console.error('Error deleting user',err);
          alert('failed to delete user.');
        }
      })
    }
  }

}
