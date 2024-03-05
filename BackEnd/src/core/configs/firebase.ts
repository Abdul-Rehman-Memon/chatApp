// export const firebaseConfig = {
//   apiKey: 'AIzaSyB9RZin4qYM1OwOvZ8H-WW8B4Z5Q57NpOE',
//   authDomain: 'chatapp-e9596.firebaseapp.com',
//   databaseURL:
//     'https://chatapp-e9596-default-rtdb.asia-southeast1.firebasedatabase.app',
//   projectId: 'chatapp-e9596',
//   storageBucket: 'chatapp-e9596.appspot.com',
//   messagingSenderId: '1001211039056',
//   appId: '1:1001211039056:web:a6e71de4476afd36eff055',
// };

// export const firebaseInitalizeConfig = {
//   clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//   privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
//   projectId: process.env.FIREBASE_PROJECT_ID,
// };

import * as admin from 'firebase-admin';

export const firebaseProvider = {
  provide: 'FIREBASE_APP',
  useFactory: () => {
    const firebaseConfig = {
      //   apiKey: 'AIzaSyB9RZin4qYM1OwOvZ8H-WW8B4Z5Q57NpOE',
      //   authDomain: 'chatapp-e9596.firebaseapp.com',
      //   databaseURL:
      //     'https://chatapp-e9596-default-rtdb.asia-southeast1.firebasedatabase.app',
      //   projectId: 'chatapp-e9596',
      //   storageBucket: 'chatapp-e9596.appspot.com',
      //   messagingSenderId: '1001211039056',
      //   appId: '1:1001211039056:web:a6e71de4476afd36eff055',
      type: 'service_account',
      project_id: 'chatapp-e9596',
      private_key_id: '3d0db62b555ec80e47618d35f93874c8eee6b248',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDUx3jaugzHH04r\nfT1YLTb9xH/UNQhjf85Hc+jB0N+OcFsVxIxJU/wey/ZHTq4GvsX8pyhCHlpwO7ma\ndzUK7mQuStmDOK3ybmA61bxeMu+vbUcOag3KomIHZQY5TONzz7c0DEBBowwcDmqZ\nWzT4wxYZwPEh6aPVKWHV+nis97H7glHFAeDDo8pm9XRFUhMZ86NJcDAqGUeHbiy/\nbVBTTDIzDNKbz3VTBtdnJaKucIPXIx8AtryHGEKtpyOi/Ad41eksOLbo4Me/KIZ8\naEs+nSBQhS6DE+CRkPyR4bZnqUXdgr8KO6ooWbifWpIZeYwdjm185nu+kSxVIjvn\nsVhU/67tAgMBAAECggEAKnK92TLPHEVSSKpEO+xPQWp7Tugii4kCa65Ds7C5/JZN\nEYdjrjhHPpSVhe28GYPjBw+I4EHibGv5z8cyyYK78SFFCeDbkNb0syATI165gs+D\n4qwFItToxg1hI7rDUIYSiBtekUmX/5vfp8byhyMSLGKZqFiOMtb92dyNSQJkGyar\n7agW0RtBmINrsLSKAzfpbSWfrMgtm13cySze9Htbp+f15LWUd3e/g2Lul0hkfCoj\n05hBjsc6FCNs0tzI8Fu8GSeQLeoJlmbi8V2W1ZsIBh+y9UXOJEyybxLBGG4HcS7N\nauCh2RR3wmD2/1WLN/iyiCg93vWCTIVuRu2UAcOUEQKBgQD2AwFrX10sFDAvDWpB\n4MCE2Uyzd0ApOs3qFnTHPVm2Ag7oAHJyzkqaP7EJ+DP1XaTSTPybg9teSinUTqNS\nV5qFEyVRvjzKrODxdvFnVhj+GlIJXUzW/2bh886HUwsuCV0y5V9HH4qyrTLXDfUZ\naX1suGSVSD3XFdLVSMvDADP/cQKBgQDdaw3qb18k2H6/UJoQWIjprWPny74fu5MQ\np9oIDaTThmAIgMEEv+7DA22vYH+2Wp9OvR1By2nLABMP5JV9PUwVjtWfPiDyOtsT\nN6sJ+AlLAm32lzT3/tRXgejeAQUbw97ZpRZov2y3vBbQx0JQYOZmlYJJUfFE2Rr6\nZHOx3PJhPQKBgQDIkYS7vIEi6caq5d4Gna134g3Fl2jI9Hdi7TICKkOUvzLV9V9Z\nuFRcU6cMAL6jwdgZ2MhuJd9YjVBzFjXTcTa6XfSkI1w+xRmT46xG2ov/xwexOM7n\nzkxb1UFBVPQdcWb5ksXOH6odqFV1vZxhPn8Sf3cJul8ol1NPrkzpy6WZEQKBgQCa\nQa0OOM0WRGX5L1RGMwgflJbXtFAel3Wb0vTJS4gbfbCF+/19K6JR5p+R4S7YgkYe\new5Y+jgYH1MobV3gRMYu9rXJHWWinHJn7w6QAWeoBGdLtohGhhi1ZmIv2JIQh+NH\nygXUsBgz4SwcA9YlXXzm1x5PqnDmQELVUwpvTbjnGQKBgEQ4gTJGUx4UyFMW/q2a\noVF7s8DEuWKzDSrJaVq0Y2FRVLxWgp0dCyh2EwtmarI2yOy25tL8J32dOjyd+lfG\nvGdm/LRNTvd5O5u6K/bkhcXELchSwUg3XUmMcWzJbGV2Ij/xA83p3ve5PQlYuavZ\nItZl6AIfg4dJH+bng2AFNgkV\n-----END PRIVATE KEY-----\n',
      client_email:
        'firebase-adminsdk-zvs29@chatapp-e9596.iam.gserviceaccount.com',
      client_id: '116185555861607650838',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zvs29%40chatapp-e9596.iam.gserviceaccount.com',
      universe_domain: 'googleapis.com',
    } as admin.ServiceAccount;

    const firebaseInitiallization = admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig),
      databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`,
      storageBucket: `${firebaseConfig.projectId}.appspot.com`,
    });

    if (firebaseInitiallization) {
      console.log('Firebase Initiallized');
    } else {
      console.log('Firebase thrown error');
    }
    return firebaseInitiallization;
  },
};
