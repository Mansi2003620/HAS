import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  user:any={};
  constructor(private route:ActivatedRoute,private router:Router,private userService:UserService){}
 
  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getByID(id).subscribe({
      next:(data) => (this.user=data),
      error:(err) => console.error('Error loading user:'),
    });
  }
    onUpdate():void{
      const id=Number(this.route.snapshot.paramMap.get('id'));
      this.userService.update(id,this.user).subscribe({
        next:() =>{
          alert('user updated sucesssfully');
          this.router.navigate(['/user/list']);

        
        },
        error:(err) =>{
          console.error('error updating user:',err);
          alert('failed to update user');
        }
      });

    }
    goBack():void{
     this.router.navigate(['/user/list']);
    }
  }

