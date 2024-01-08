import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { HelloWorldComponent } from './HelloWorld/HelloWorld.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent,
  title: 'Home page'
},
{
  path: 'details/:id',
  component: DetailsComponent,
  title: 'Home details'
},
{
  path: 'hello',
  component: HelloWorldComponent,
  title: 'Home world'
}];
