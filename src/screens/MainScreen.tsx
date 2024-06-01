import styled from "styled-components";
import {ListTripEntry} from "../components/ListTripEntry";
import {Box, Modal, Typography} from "@mui/material";

import {useEffect, useState} from "react";

import {UserTrip} from "../models";
import {useTripContext} from "../context/TripContext";
import { getCurrentUser } from 'aws-amplify/auth';
import axios from "axios";
import Weather from "../components/WeatherBox";
import WeatherBox from "../components/WeatherBox";
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
async function currentAuthenticatedUser() {
    try {
        const { username, userId, signInDetails } = await getCurrentUser();
        console.log(`The username: ${username}`);
        console.log(`The userId: ${userId}`);
        console.log(`The signInDetails: ${signInDetails}`);
    } catch (err) {
        console.log(err);
    }
}

export const MainScreen = ()=>{
    const {trips} = useTripContext();
    const [open, setOpen] = useState(false);
    const [selectedTrip, setSelectedTrip] = useState <UserTrip |null>(null)
    const [userId, setUserId] = useState<string | null>(null);

    // useEffect(() => {
    //     axios.get('https://gsbgkipz82.execute-api.us-east-1.amazonaws.com/dev', {
    //         headers: {
    //             'Authorization': 'Bearer VOTRE_ACCESS_TOKEN'
    //         }
    //     }).then(res => {
    //         console.log(res.data);
    //     }).catch(error=>{
    //         console.log(error);
    //     });
    // }, []);

    useEffect(() => {
        getCurrentUser().then(({userId}) => {
            setUserId(userId);
        })
    }, []);

    /*const [trips, setTrips] = useState<UserTrip[] >([]);
useEffect(() => {
    useEffect(() => {
        const loadUserTrips = async () => {
            try{
                const userTrips = await DataStore.query(UserTrip);
                setTrips(userTrips);
                console.log(userTrips)
            }
            catch (e) {
                console.log(e)
            }
        }
        loadUserTrips();
    }, []);*/
    const handleOpen = (trip:UserTrip) => {
        setSelectedTrip(trip);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return(
        <div>
            <h1>My Planned Trips</h1>
            {
                userId && <p>User ID: {userId}</p>
            }
            <ListTrips>
                {trips.map((trip:UserTrip)=>(
                    <ListTripEntry
                        key={trip.id}
                        name={trip.name}
                        description={trip.description}
                        id={trip.id.toString()}
                        image={trip.image}
                        handleOpen={()=>handleOpen(trip)}
                    />
                ))}
            </ListTrips>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {selectedTrip && selectedTrip.date && (
                        <WeatherBox country={selectedTrip.name} date={new Date(selectedTrip.date)} />
                    )}

                </Box>
            </Modal>

        </div>
    )
}
const ListTrips = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:30px;
`
