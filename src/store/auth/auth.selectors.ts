import {State} from "./auth.reducer";
type Reducer = { auth:State }
export const getIsAuthenticated = (state: Reducer)=> state.auth.isAuthenticated;