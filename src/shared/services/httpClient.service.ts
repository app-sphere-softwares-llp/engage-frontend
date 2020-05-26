import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

class HttpClient {
    constructor() {
        axios.interceptors.request.use((config: AxiosRequestConfig) => {
            // Do something before request is sent
            return config
        }, (error: any) => {
            // Do something with request error
            return Promise.reject(error)
        });

        // Add a response interceptor
        axios.interceptors.response.use((response: any) => {
            // Do something with response data
            console.log('interceptor response', response)
            return response
        }, (error: AxiosError) => {
            if (error) {
                const response: AxiosResponse = error && error.response ? error.response : {
                    data: undefined,
                    status: -1,
                    statusText: '',
                    headers: [],
                    config: {}
                }
            }
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error)
        })
    }

    get<T>(url: string, params?: any, options?: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            options = this.prepareOptions(options);

            axios
                .get(url, options)
                .then((response: any) => {
                    resolve(response.data as T)
                })
                .catch((response: any) => {
                    reject(response)
                })
        })
    }

    post<T>(url: string, payload: any, options?: any): Promise<T> {
        options = this.prepareOptions(options);

        return new Promise<T>((resolve, reject) => {
            axios
                .post(url, payload, options)
                .then((response: any) => {
                    resolve(response.data as T)
                })
                .catch((response: any) => {
                    reject(response)
                })
        })
    }

    put<T>(url: string, payload: any, options?: any): Promise<T> {
        options = this.prepareOptions(options);
        return new Promise<T>((resolve, reject) => {
            axios
                .put(url, payload, options)
                .then((response: any) => {
                    resolve(response.data as T)
                })
                .catch((response: any) => {
                    reject(response)
                })
        })
    }

    delete<T>(url: string, payload: any, options?: any): Promise<T> {
        options = this.prepareOptions(options);

        return new Promise<T>((resolve, reject) => {

            axios
                .delete(url, payload)
                .then((response: any) => {
                    resolve(response.data as T)
                })
                .catch((response: any) => {
                    reject(response)
                })
        })
    }

    prepareOptions(options: any): any {
        options = options || {};

        if (!options.headers) {
            options.headers = {} as any;
        }

        // if (token) {
        //     options.headers['Authorization'] = `Bearer ${token}`;
        // }

        // locale header
        options.headers['Accept-Language'] = navigator.language;

        options.headers['cache-control'] = 'no-cache';

        if (!options.headers['Content-Type']) {
            options.headers['Content-Type'] = 'application/json';
        }

        if (options.headers['Content-Type'] === 'multipart/form-data') {
            delete options.headers['Content-Type'];
        }

        if (!options.headers['Accept']) {
            options.headers['Accept'] = 'application/json';
        }

        return options;
    }

}


// export new httpClient object
export const httpClient = new HttpClient()
