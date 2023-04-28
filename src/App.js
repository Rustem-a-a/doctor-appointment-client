import './App.css';
import {
    accordionDetailsClasses,
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField
} from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import {grey} from "@mui/material/colors";
import Slots from "./Components/Slots/Slots";

function App() {
    const [user_id, setUser_id] = useState('')
    const [doctor_id, setDoctor_id] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [currentDoctor, setCurrentDoctor] = useState({})
    console.log(currentDoctor?.slots)

    const getDoctorInfo = async () => {
        const {data} = await axios.get(`http://localhost:5000/slot/getDoctor/${doctor_id}`)
        console.log(data)
        setCurrentDoctor(data)

    }
    useEffect(() => {
        getDoctorInfo()
    }, [doctor_id])

    const dataToSend = {
        user_id,
        doctor_id,
        slots: date
    }
    const reserveSlot = async () => {
        console.log(dataToSend)
        const {data} = await axios.post('http://localhost:5000/slot/slotAdd', dataToSend)
        console.log(data)
        console.log(dataToSend)
        setUser_id('')
        setDoctor_id('')
        setDate('')
        setTime('')
    }
    return (
        <div className="App">
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Slots currentDoctor={currentDoctor}/>
                <Box display={'flex'} justifyContent={'center'} m={5} gap={3}>
                    <TextField value={user_id} onChange={(e) => {setUser_id(e.target.value)
                    }} id="outlined-basic" label="User ID" variant="outlined"/>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Doctor</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={doctor_id}
                            label="Doctor"
                            onChange={e => setDoctor_id(e.target.value)}
                        >
                            <MenuItem value={'644bf49b38585848c85b8c09'}>Therapeht</MenuItem>
                            <MenuItem value={'644c14c006d58328f3aeedf0'}>Uho</MenuItem>
                            <MenuItem value={'644c2cb3f1a313edcf712009'}>Nos</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField type={"date"} value={date} onChange={(e) => setDate(e.target.value)} id="outlined-basic"
                               variant="outlined"/>
                    <TextField type={"time"} value={time} onChange={(e) => setTime(e.target.value)} id="outlined-basic"
                               variant="outlined"/>
                </Box>
            </Box>
            <Button variant={'contained'} onClick={reserveSlot}>
                Записаться
            </Button>
        </div>
    );
}

export default App;
