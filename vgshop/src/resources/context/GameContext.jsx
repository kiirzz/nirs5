import {createContext, useContext, useReducer} from "react";
import { gameReducer } from "./Reducer";

const GameContext = createContext();

const Context = ({ children }) => {

    const products = [...Array(10)].map((e, index) => ({
        id: String(index),
        name: "abcdefghijk",
        publisher: {
            id: "1",
            name: "Riot Game",
        },
        released: "01-01-2023",
        description: "Onnfjrsv ksn jkcsoje sndvoss seckvl ifshg sdhgsjb dfoahdfje fgiv fgnivdjf jsmockvs smdfvmsj emdfsim semdficva asfvk aodmgovs adkvmoc sdvoc vskdmvcos dvddddddddd fffffffffff fffffffffff fffffffffff  ",
        price: 500,
        rating: 4.5,
        sold_quantity: 10000,
        image: "https://images.crazygames.com/games/moto-x3m/cover-1586173923704.jpeg?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",        
    }))

    const [state, dispatch] = useReducer(gameReducer, {
        products: products,
        cart: []
    })

    return <GameContext.Provider value={{state, dispatch}}>{children}</GameContext.Provider>
}

export default Context;

export const GameState = () => {
    return useContext(GameContext)
}

