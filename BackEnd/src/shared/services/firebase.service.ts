import { Inject, Injectable } from '@nestjs/common';
import { app } from 'firebase-admin';

@Injectable()
export class FirebaseService {
  constructor(@Inject('FIREBASE_APP') private firebaseApp: app.App) {}

  async getFirebase() {
    this.firebaseApp.messaging();
  }
}
