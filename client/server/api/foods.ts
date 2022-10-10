import {getFirestore} from 'firebase-admin/firestore'
import {initializeApp, getApps, cert} from 'firebase-admin/app'

const apps = getApps()

if (!apps.length) {
    initializeApp({
        credential: cert('./serviceAccountKey.json')
    })
}

export default async (request, response) => {
    const db = getFirestore()
    const categoriesSnap = await db.collection('categories').get()
    console.log(categoriesSnap)
    const categoriesData = categoriesSnap.docs.map(doc => {
        
        return {
            uuid: doc.id,
            ...doc.data()
        }
    })

    return categoriesData
}