import React from 'react';
import {Box, Paper} from "@mui/material";
import {grey} from "@mui/material/colors";

const Slots = (props) => {

    return (
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:500,
            backgroundColor:'yellow'}
        }>
            {props.currentDoctor?.slots?.map(v=>
                <Paper key={v._id}
                    sx={{
                    margin:2,
                    width: '150px',
                    height: '50px',
                    backgroundColor: grey["200"],
                    color: v.free ? 'black' : 'red',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} elevation={2}>{v.date_time.start}</Paper>
            )}
        </Box>
    );
};

export default Slots;