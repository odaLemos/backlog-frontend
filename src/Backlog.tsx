import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import getBacklogList from "./BacklogApi";

export default function AlignItemsList() {

    const [result,setResult]=useState([])

    useEffect(() => {
        getBacklogList()
            .then((res) => {
                setResult(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}} >
            {result.map((row, i)=>{
                return <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={row['name']} src={row['additional_info']['cover_url']}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={row['name']}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {row['platform']['name']}
                                </Typography>

                            </React.Fragment>
                        }
                    />
                </ListItem>

            })}
            </List>

        </>




    );
}
