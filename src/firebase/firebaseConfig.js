import { initializeApp } from 'firebase/app';

import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyCoRSap_WWoPDnfzOlDbM236yPMB4jmido',
   authDomain: 'trent-alexander-arnold-ef59d.firebaseapp.com',
   databaseURL: 'https://trent-alexander-arnold-ef59d-default-rtdb.asia-southeast1.firebasedatabase.app',
   projectId: 'trent-alexander-arnold-ef59d',
   storageBucket: 'trent-alexander-arnold-ef59d.appspot.com',
   messagingSenderId: '139030839183',
   appId: '1:139030839183:web:024a70df1a2b3452da55fa',
   measurementId: 'G-PHKSDKZ539',
};

const fireBase = initializeApp(firebaseConfig);

export const dataBase = getFirestore(fireBase);

