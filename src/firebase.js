import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDocs, getDoc, deleteDoc} from 'firebase/firestore/lite';
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
    // const product = await productsCollection.doc(id).get()
    const docRef = doc(db, "products", id);
    const product = await getDoc(docRef);
    return product.exists() ? product.data() : null
    
}

export const updateProduct = async (id, product) => {
    const docRef = doc(db, "products", id);
    await setDoc(docRef, product)
    console.log(product, "=> product");
    // return product
}

export const deleteProduct = async(id) => {
    await deleteDoc(doc(db, "products", id));
    // return productsCollection.doc(id).delete()
}

export const useLoadProducts = async() => {
    const products = ref([])
    var result = []
    products.value = await getDocs(productsCollection);
    console.log(typeof products.value)

    products.value.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        const obj = {id: `${doc.id}`}
        result.push({...obj, ...doc.data()})
    });

    console.log(result, "=> result")
    return (result)
}

