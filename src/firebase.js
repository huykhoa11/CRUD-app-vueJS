import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDocs} from 'firebase/firestore/lite';
// import { addDoc } from "firebase/firestore"; 
import { ref} from 'vue' 

const config = {
    apiKey: "AIzaSyDKbCgP44DxlN2gOwUcIGiAS8BvfcSMv-A",
    authDomain: "products-170bc.firebaseapp.com",
    projectId: "products-170bc",
    storageBucket: "products-170bc.appspot.com",
    messagingSenderId: "808104047541",
    appId: "1:808104047541:web:7084e21affe5c2234adffc",
    measurementId: "G-RCMLVCT2X8"
};

const firebaseApp = initializeApp(config);

const db = getFirestore(firebaseApp);
const productsCollection = collection(db, 'products')

export const createProduct = async(product) => {
    // return productsCollection.add(product)
    const newProduct = doc(productsCollection);
    await setDoc(newProduct, product)
}

export const getProduct = async(id) => {
    const product = await productsCollection.doc(id).get()
    return product.exists ? product.data() : null
}

export const updateProduct = (id, product) => {
    return productsCollection.doc(id).update(product)
}

export const deleteProduct = id => {
    return productsCollection.doc(id).delete()
}

export const useLoadProducts = async() => {
    const products = ref([])
    var result = []
    // const close = productsCollection.onSnapshot(snapshot => {
    //     products.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    // })

    products.value = await getDocs(productsCollection);
    // onUnmounted(close)
    console.log(products.value, "=> products.value")
    products.value.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        result.push(doc.data())
    });

    console.log(result, "=> result")
    return (result)
}

