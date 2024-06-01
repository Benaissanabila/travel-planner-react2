import {useEffect} from "react";
import TripsGrid from "../components/TripsGrid";


export const TripEditorSreen = ()=>{

    useEffect(() => {
        document.title = "Travel Planner - Editor";
    }, []);
    return(
        <div>
            <h1>TripEditorScreen</h1>
            <TripsGrid/>
        </div>
    )
}