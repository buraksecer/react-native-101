import {AsyncStorage} from 'react-native';

export function pathWithQueryString(path, params) {
    params = params instanceof Object ? params : {};
    path = typeof path === "string" ? path : "";
    const paramKeys = Object.keys(params);

    const queryString = paramKeys
        .map((key) => {
            if (params[key] === "") {
                return null;
            } else {
                return `${key}=${params[key]}`
            }
        })
        .filter((item) => item !== null)
        .join("&");
    return path.replace("?", "") + "?" + queryString;
}

export default {
    async setItem(key, value) {
        try {
            return await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // console.error('AsyncStorage#setItem error: ' + error.message);
        }
    },
    async getItem(key) {
        return await AsyncStorage.getItem(key)
            .then((result) => {
                if (result) {
                    try {
                        result = JSON.parse(result);
                    } catch (e) {
                        // console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
                    }
                }
                return result;
            });
    },
    async removeItem(key) {
        return await AsyncStorage.removeItem(key);
    }
}