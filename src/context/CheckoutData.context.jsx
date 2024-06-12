import { createContext,useContext,useState } from "react";

export const CheckoutDataContext = createContext({
    checkoutData: [],
    getcheckoutData: () => {},
})

export const CheckoutDataProvider = ({children})=>{
    const [checkoutData,setCheckoutData] = useState([])

    const getcheckoutData= (data) => {
       setCheckoutData(data)
    }

    return(
        <CheckoutDataContext.Provider value={{checkoutData,getcheckoutData}}>
            {children}
        </CheckoutDataContext.Provider>
    )
}

export const UseCheckoutDataContext = () => {
    return useContext(CheckoutDataContext)
}