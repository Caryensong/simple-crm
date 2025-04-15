import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'simple-crm-1a259',
        appId: '1:916033567579:web:5d7bb08e3e5366dce8387e',
        storageBucket: 'simple-crm-1a259.firebasestorage.app',
        apiKey: 'AIzaSyBuIMs9_1SmyFjrA5NKCEZlA3EmKN9e43A',
        authDomain: 'simple-crm-1a259.firebaseapp.com',
        messagingSenderId: '916033567579',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
