import firebase from 'react-native-firebase';

const config = {
    apiKey: 'AIzaSyCg8XcLyk5KMu2ZmRUGGkmsikrjISyq5u4',
    authDomain: 'posenger-187220.firebaseapp.com',
    databaseURL: 'https://posenger-187220.firebaseio.com',
    projectId: 'posenger-187220',
    storageBucket: 'posenger-187220.appspot.com',
    messagingSenderId: '16011056151',
    appId: '1:16011056151:web:1c6b9b93955f307cc23852',
    measurementId: 'G-Z8TBFHXSHJ'
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();