import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { HelloWorldComponent } from './components/HelloWorld/HelloWorld.component';
import { FormComponent } from './components/form/form.component';
import { ProductComponent } from './components/product/product.component';
import { RoomChatComponent } from './components/room-chat/room-chat.component';

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
  path: 'product',
  component: ProductComponent,
  title: 'Product'
},
{
  path: 'form',
  component: FormComponent,
  title: 'Home world'
},
{
  path: 'room-chat',
  component: RoomChatComponent,
  title: 'Room Chat'
}];
