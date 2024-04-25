import { Add_To_Cart,Remove_To_Cart } from '../constants'
const initionState={
    cartData:[]
}
export default function cartItems(state=[],action){
    switch(action.type){
        case Add_To_Cart:
           // console.log("reducer ", action);
            return [
                ...state,
                {cartData:action.data}
            ]
            break;
            case Remove_To_Cart:
           // console.log("reducer ", action);
           state.pop();
            return [
                ...state
            ]
            break;
            default:
                return state
    }

}