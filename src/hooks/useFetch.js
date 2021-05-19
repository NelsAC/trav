import { useState, useEffect } from "react"
import { getData } from "../helpers/getData";

export const useFetch = ( value ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getData( value )
            .then(info=>{
                    setState({ 
                        data: info,
                        loading:false
                    });
            })
    }, [ value ])

 
    return state;
}

export default useFetch
