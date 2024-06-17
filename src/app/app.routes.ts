import { Routes } from '@angular/router';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { LogComponent } from './pages/log/log.component';

export const routes: Routes = [
    {path: '' , component: FrontpageComponent},
  {path: 'log' , component: LogComponent},
];
