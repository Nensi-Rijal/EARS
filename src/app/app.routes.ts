import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'requests',
        loadChildren: () => 
            import("./requests/requests.routes").then(m=> m.REQUESTS_ROUTES)
        
    },
    {
        path: '',
        redirectTo: 'requests',
        pathMatch: 'full'
    }
];
