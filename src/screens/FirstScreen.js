import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import firebaseComponent from '../components/FirebaseComponent';
import firebase from 'firebase';

// import {firebase} from '@react-native-firebase/auth';

const FirstScreen =() => {
    
    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseComponent.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(null, 'o2malmvo-hnXYRk4RaEV90Cg'));
    //firebaseComponent.database(app.database('possenger-182770'));
    
        
    

    return <View>
        <Text>test</Text>
    </View>
};

const styles = StyleSheet.create({});

export default FirstScreen;