import { AfterViewInit, Component } from '@angular/core';
//import * M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'Cadastro de Familias App';

  ngAfterViewInit(): void {
      //M.Sidenav.init(this.sideNav?.nativeElement);
  }
}
