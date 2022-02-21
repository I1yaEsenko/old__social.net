import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {StoreType} from "./store";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

export let store: StoreType = createStore(rootReducer)
