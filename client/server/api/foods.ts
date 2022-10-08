import {getFirestore} from 'firebase-admin/firestore'
import {initializeApp, getApps, cert} from 'firebase-admin/app'

const apps = getApps()

if (!apps.length) {
    initializeApp({
        credential: cert('./food-quest-a9d91-firebase-adminsdk-l1tzm-4f1378e303.json')
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