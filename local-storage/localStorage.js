import AsyncStorage from '@react-native-async-storage/async-storage';

const storeItem = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
        console.log(`Data stored in local storage with key: ${key}`)
    } 
    catch (e) {
        console.log(`Error storing data with key: ${key} in local storage. Error: ${e}`);
    }
};

const getItem = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        console.log(`Data fetched from local storage with key: ${key}`)
        if(jsonValue !== null) {
            return JSON.parse(jsonValue);
        }
    } 
    catch(e) {
        console.log(`Error fetching data with key: ${key} from local storage. Error: ${e}`);
    }
};

export { storeItem, getItem }