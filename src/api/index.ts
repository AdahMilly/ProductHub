import axios from 'axios';
import { config } from '../config'

class ProductsApi {
    private instance;
    constructor(){
        this.instance = axios.create({
            baseURL: config.baseURL, 
            timeout : 2000,
            headers : {
                Accept : 'application/json',
                ContentType : 'application/json',
            }
    });
    }
}


