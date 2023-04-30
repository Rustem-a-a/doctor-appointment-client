import React from 'react';
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';

const columns = [
    {
        field: 'user',
        headerName: 'Пациент',
        width: 150,
        editable: false,
        headerAlign: 'center',
        align: 'center',
        headerClassName: 'super-app-theme--header',

    },
    {
        field: 'doctor',
        headerName: 'Направление',
        editable: false,
        headerAlign: 'center',
        align: 'left',
        flex: 1,
        headerClassName: 'super-app-theme--header'
    },
    {
        field: 'name',
        headerName: 'Доктор',
        editable: false,
        headerAlign: 'center',
        align: 'left',
        flex: 1,
        headerClassName: 'super-app-theme--header'
    },
    {
        field: 'slot',
        headerName: 'Время',
        type: 'number',
        width: 130,
        editable: false,
        headerAlign: 'center',
        align: 'center',
        headerClassName: 'super-app-theme--header'
    },
];

export default function Records({rows}) {
    const rowsNew = rows.map(v => ({
        _id: v._id,
        user: v.user_id.name,
        doctor: v.doctor_id.spec,
        name:v.doctor_id.name,
        slot: new Date(v.slot).toLocaleTimeString('default', {
            hour: 'numeric',
            minute: 'numeric',
        })


    }))

    return (
        <Box sx={{height: '85%', width: '95%', margin: 'auto', marginTop: '30px'}}>
            <div style={{textAlign: 'center'}}>
                <h1>Записи (информация для администрации):</h1>
            </div>
            <DataGrid
                sx={{
                    '& .super-app-theme--header': {
                        fontSize: '18px',
                        backgroundColor: 'rgba(224,224,224,0.5)'
                    },
                }}
                showColumnVerticalBorder={true}
                showCellVerticalBorder={true}
                style={{margin: "auto", marginTop: '30px'}}
                rows={rowsNew}
                columns={columns}
                getRowId={(row) => row?._id}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[5, 10, 20]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}