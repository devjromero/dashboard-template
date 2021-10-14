import {Params, Service} from "./service.type";
import api from "../../../utils/api/api";
import Turtle from "../../../utils/Turtle.util";

export const loginWithCredentials: Service = async (params: Params) => {
    await Turtle(1000);
    console.log('login');
}