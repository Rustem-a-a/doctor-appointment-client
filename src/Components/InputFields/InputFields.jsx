import React from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getDoctorDoctorSlice} from "../../store/slices/doctorSlice";
import {getUserUserSlice} from "../../store/slices/userSlice";

const InputFields = ({user_id, setUser_id, doctor_id, setDoctor_id}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (doctor_id) {
            dispatch(getDoctorDoctorSlice({doctor_id: doctor_id}))
        }
    }, [doctor_id])
    useEffect(() => {
        if (user_id) {
            dispatch(getUserUserSlice({user_id: user_id}))
        }
    }, [user_id])
    return (
        <>
            <Box width={500} display={'flex'} justifyContent={'center'} m={5} gap={3}>
                <FormControl sx={{backgroundColor: 'white'}} fullWidth>
                    <InputLabel id="user-select-label">Пациент</InputLabel>
                    <Select
                        labelId="user-select-label"
                        id="user-select"
                        value={user_id}
                        label="Пациент"
                        onChange={e => setUser_id(e.target.value)}
                    >
                        <MenuItem value={'644ccba6f1a313edcf71200b'}>Иван</MenuItem>
                        <MenuItem value={'644cc8ddfedd72067cd94104'}>Петр</MenuItem>
                        <MenuItem value={'644ccbd0f1a313edcf71200c'}>Егор</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{backgroundColor: 'white'}} fullWidth>
                    <InputLabel id="doctor-select-label">Врач</InputLabel>
                    <Select
                        labelId="doctor-select-label"
                        id="doctor-select"
                        value={doctor_id}
                        label="Врач"
                        onChange={e => setDoctor_id(e.target.value)}
                    >
                        <MenuItem value={'644bf49b38585848c85b8c09'}>Терапевт</MenuItem>
                        <MenuItem value={'644c14c006d58328f3aeedf0'}>Отоларинголог</MenuItem>
                        <MenuItem value={'644c2cb3f1a313edcf712009'}>Пульмонолог</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    );
};

export default InputFields;