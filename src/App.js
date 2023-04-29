import './App.css';
import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import Slots from "./Components/Slots/Slots";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import InputFields from "./Components/InputFields/InputFields";

function App() {
    const currentDoctor = useSelector(state => state.doctorReducer.currentDoctor)
    const slotArray = useSelector(state => state.slotReducer.slotArray)
    console.log(slotArray)
    return (
            <Box className="App" display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Slots currentDoctor={currentDoctor}/>
            <InputFields/>
            </Box>
    );
}

export default App;
