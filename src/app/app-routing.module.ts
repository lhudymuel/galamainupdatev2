import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurant/restaurant.module').then( m => m.RestaurantPageModule)
  },
  {
    path: 'gym',
    loadChildren: () => import('./gym/gym.module').then( m => m.GymPageModule)
  },
  {
    path: 'cafe',
    loadChildren: () => import('./cafe/cafe.module').then( m => m.CafePageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then( m => m.StorePageModule)
  },
  {
    path: 'pier',
    loadChildren: () => import('./pier/pier.module').then( m => m.PierPageModule)
  },
  {
    path: 'about-settings',
    loadChildren: () => import('./about-settings/about-settings.module').then( m => m.AboutSettingsPageModule)
  },
  {
    path: 'contact-settings',
    loadChildren: () => import('./contact-settings/contact-settings.module').then( m => m.ContactSettingsPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'developers',
    loadChildren: () => import('./developers/developers.module').then( m => m.DevelopersPageModule)
  },
  {
    path: 'darkmode-settings',
    loadChildren: () => import('./darkmode-settings/darkmode-settings.module').then( m => m.DarkmodeSettingsPageModule)
  },
  {
    path: 'resort',
    loadChildren: () => import('./resort/resort.module').then( m => m.ResortPageModule)
  },
  {
    path: 'restaurant1',
    loadChildren: () => import('./content/restaurant1/restaurant1.module').then( m => m.Restaurant1PageModule)
  },
  {
    path: 'gym1',
    loadChildren: () => import('./content/gym1/gym1.module').then( m => m.Gym1PageModule)
  },
  {
    path: 'cafe1',
    loadChildren: () => import('./content/cafe1/cafe1.module').then( m => m.Cafe1PageModule)
  },
  {
    path: 'cafe2',
    loadChildren: () => import('./content/cafe2/cafe2.module').then( m => m.Cafe2PageModule)
  },
  {
    path: 'cafe3',
    loadChildren: () => import('./content/cafe3/cafe3.module').then( m => m.Cafe3PageModule)
  },
  {
    path: 'cafe4',
    loadChildren: () => import('./content/cafe4/cafe4.module').then( m => m.Cafe4PageModule)
  },
  {
    path: 'store1',
    loadChildren: () => import('./content/store1/store1.module').then( m => m.Store1PageModule)
  },
  {
    path: 'store2',
    loadChildren: () => import('./content/store2/store2.module').then( m => m.Store2PageModule)
  },
  {
    path: 'store3',
    loadChildren: () => import('./content/store3/store3.module').then( m => m.Store3PageModule)
  },
  {
    path: 'store4',
    loadChildren: () => import('./content/store4/store4.module').then( m => m.Store4PageModule)
  },
  {
    path: 'port1',
    loadChildren: () => import('./content/port1/port1.module').then( m => m.Port1PageModule)
  },
  {
    path: 'port2',
    loadChildren: () => import('./content/port2/port2.module').then( m => m.Port2PageModule)
  },
  {
    path: 'resort1',
    loadChildren: () => import('./content/resort1/resort1.module').then( m => m.Resort1PageModule)
  },
  {
    path: 'resort2',
    loadChildren: () => import('./content/resort2/resort2.module').then( m => m.Resort2PageModule)
  },
  {
    path: 'resort3',
    loadChildren: () => import('./content/resort3/resort3.module').then( m => m.Resort3PageModule)
  },
  {
    path: 'resort4',
    loadChildren: () => import('./content/resort4/resort4.module').then( m => m.Resort4PageModule)
  },
  {
    path: 'resort5',
    loadChildren: () => import('./content/resort5/resort5.module').then( m => m.Resort5PageModule)
  },
  {
    path: 'resort6',
    loadChildren: () => import('./content/resort6/resort6.module').then( m => m.Resort6PageModule)
  },
  {
    path: 'resort7',
    loadChildren: () => import('./content/resort7/resort7.module').then( m => m.Resort7PageModule)
  },
  {
    path: 'resort8',
    loadChildren: () => import('./content/resort8/resort8.module').then( m => m.Resort8PageModule)
  },
  {
    path: 'resort9',
    loadChildren: () => import('./content/resort9/resort9.module').then( m => m.Resort9PageModule)
  },
  {
    path: 'cam',
    loadChildren: () => import('./cam/cam.module').then( m => m.CamPageModule)
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
