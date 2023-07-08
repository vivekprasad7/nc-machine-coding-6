import { cuisineData, restaurantsData } from "../api/data";

const { createContext, useContext, useState } = require("react");

const AppContext = createContext();

export const AppContextProvider = ({children}) => {



    const [cuisineList, setCuisineList] = useState([...cuisineData])
    const [data, setData] = useState([...restaurantsData]);

    const [reviewInput, setReviewInput] = useState({
        rating:"",
        comment:"",
        name:"Anonymous",
        pp:"https://randomuser.me/api/portraits/men/1.jpg",
    })




    return(<AppContext.Provider value={{cuisineList, data, setData, reviewInput, setReviewInput}}>{children}</AppContext.Provider>)
}

export const useAppContext = () => useContext(AppContext);