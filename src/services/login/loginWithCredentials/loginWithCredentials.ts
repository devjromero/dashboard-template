import {Params, Service} from "./service.type";
import api from "../../../utils/api/api";
import Turtle from "../../../utils/Turtle.util";

export const loginWithCredentials: Service = async (params: Params) => {
    await Turtle(1000);
    // console.log(params)
    return {
        uid: '417c57a4-33e4-45ee-abba-662c1769bf2c',
        name:'jromero',
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        roles:['admin']
    }
}