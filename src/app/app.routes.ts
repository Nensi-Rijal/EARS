import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'requests',
        loadChildren: () => 
            import("./requests/requests.routes").then(m=> m.REQUESTS_ROUTES)
        
    },
    {
        path: 'admin',
        loadChildren: () => 
            import("./admin/admin.routes").then(m=> m.ADMIN_ROUTES)
    },
    {
        path: 'auth',
        loadChildren: () =>
            import("./auth/auth.routes").then(m=> m.AUTH_ROUTES)
    },
    {
        path: '',
        redirectTo: 'requests',
        pathMatch: 'full'
    }
];
