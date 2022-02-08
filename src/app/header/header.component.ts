import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pages, PagesModule } from '../data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pageList:PagesModule[] =[
    {
      id:Pages.Home,
      name:"home"
    },
    {
      id:Pages.Users,
      name:"users"
    },
    {
      id:Pages.Todo,
      name:"todo list"
    },
    {
      id:Pages.Login,
      name:"login"
    },
    {
      id:Pages.Register,
      name:"register"
    },

  
  ]
  @Output('page')
  pageCHanges = new EventEmitter<Pages>()
  handleClick(page: Pages){
  this.pageCHanges.emit(page);
  }
  constructor() { }

}
