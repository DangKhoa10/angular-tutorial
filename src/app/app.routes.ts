import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { HelloWorldComponent } from './components/HelloWorld/HelloWorld.component';
import { FormComponent } from './components/form/form.component';

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
},
{
  path: 'form',
  component: FormComponent,
  title: 'Form'
}];
