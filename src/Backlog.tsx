import * as React from 'react';
import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import getBacklogList from "./BacklogApi";

export default function Backlog() {
    const [result, setResult] = useState([]);


    useEffect(() => {
        getBacklogList()
            .then((response) => setResult(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (

        <div className="BacklogList">

        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Jogo</TableCell>
                        <TableCell align="right">Plataforma</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {result.map((row) => (
                        <TableRow
                            key={row["name"]}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row["name"]}
                            </TableCell>
                            <TableCell align="right">{row["platform"]}</TableCell>
                            <TableCell align="right">{row["status"]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        </div>
    );
}