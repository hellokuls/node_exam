const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const serviceAccount = require('./demo1-408406-2a589652a863.json');


initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();
async function addData(db){

    const docRef = db.collection('users').doc('alovelace');
    await docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
    });

}




addData(db)
