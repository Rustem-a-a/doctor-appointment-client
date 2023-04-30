import './App.css';
import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import Slots from "./Components/Slots/Slots";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import InputFields from "./Components/InputFields/InputFields";
import Records from "./Components/Records/Records";
import {getSlotArraySlotSlice} from "./store/slices/slotSlice";
import CircularProgress from '@mui/material/CircularProgress';
import {ToastContainer} from "react-toastify";


function App() {
    const [user_id, setUser_id] = useState('')
    const [doctor_id, setDoctor_id] = useState('')
    const currentDoctor = useSelector(state => state.doctorReducer.currentDoctor)
    const slotArray = useSelector(state => state.slotReducer.slotArray)
    const isLoadingSlotArray = useSelector(state => state.slotReducer.isLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSlotArraySlotSlice())
    }, [])
    return (
        <Box className="App" display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Slots user_id={user_id} doctor_id={doctor_id} currentDoctor={currentDoctor}/>
            <InputFields user_id={user_id} doctor_id={doctor_id} setDoctor_id={setDoctor_id} setUser_id={setUser_id}/>
            {isLoadingSlotArray.length
                ? <CircularProgress sx={{marginTop: 200}}/>
                :
                slotArray?.length
                    ? <Records rows={slotArray}/>
                    : <h1>Записи к врачам отсутствуют</h1>
            }
        </Box>
    );
}

export default App;
