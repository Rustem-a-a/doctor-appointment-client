import React from 'react';
import {Box, Button, Paper} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useDispatch} from "react-redux";
import {refreshDoctorSlotDoctorSlice, updateDoctorSlotDoctorSlice} from "../../store/slices/doctorSlice";
import {addSlotSlotSlice} from "../../store/slices/slotSlice";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Slots = (props) => {
    const dispatch = useDispatch()
    return (
        <Box display='flex' justifyContent='center' alignItems='center' flexWrap={"wrap"}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap'
            }
            }>
                {props.currentDoctor?.slots?.map(v =>
                    <Paper key={v._id}
                           onClick={() => {
                               if (props.user_id) {
                                   if (v.free) {
                                       dispatch(updateDoctorSlotDoctorSlice({
                                           doctor_id: props.currentDoctor._id,
                                           slot_id: v._id,
                                           free: false
                                       }))
                                       dispatch(addSlotSlotSlice(
                                           {
                                               user_id: props.user_id,
                                               doctor_id: props.doctor_id,
                                               slot: v.date_time.start
                                           }))
                                       toast(`Вы записались на ${new Date(v.date_time.start).toLocaleTimeString('default', {
                                           hour: 'numeric',
                                           minute: 'numeric',
                                       })}`)
                                   } else {
                                       toast("Слот на данное время занят")
                                   }
                               } else {
                                   toast('Выберите пациента')
                               }
                           }
                           }
                           sx={{
                               cursor: 'pointer',
                               padding: 1,
                               margin: 2,
                               width: '150px',
                               height: '30px',
                               backgroundColor: v.free ? null : grey["200"],
                               color: v.free ? 'black' : 'red',
                               display: 'flex',
                               alignItems: 'center',
                               justifyContent: 'center'
                           }} elevation={v.free ? 3 : 0}>{new Date(v.date_time.start).toLocaleTimeString('default', {
                        hour: 'numeric',
                        minute: 'numeric',
                    }) + ' - ' + new Date(v.date_time.end).toLocaleTimeString('default', {
                        hour: 'numeric',
                        minute: 'numeric',
                    })}</Paper>
                )}
            </Box>
            {Object.keys(props.currentDoctor).length !== 0 && <Button variant={'contained'} onClick={() => {
                dispatch(refreshDoctorSlotDoctorSlice(
                    {
                        doctor_id: props.currentDoctor?._id,
                    }
                ))
            }}>
                Онулить все записи врача
            </Button>}
            <ToastContainer/>
        </Box>
    );
};

export default Slots;