import {useEffect} from "react";
import TripsGrid from "../components/TripsGrid";


export const TripEditorSreen = ()=>{

    useEffect(() => {
        document.title = "Travel Planner - Editor";
    }, []);
    return(
        <div>
            <h1>TripEditorSreen</h1>
            <TripsGrid/>
        </div>
    )
}