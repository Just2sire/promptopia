'use client'
import { CopyAllOutlined, Delete, Edit, } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Stack, Typography } from "@mui/material"
import { red } from "@mui/material/colors";
import { SyntheticEvent } from "react";

const ProfileMediaCard = () => {

    const handleCopy = (e: SyntheticEvent, data: string) => {
        e.preventDefault();
        navigator.clipboard.writeText(data);
    }

    return (
        <Card sx={{ maxWidth: 345 }} elevation={1} >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {'R'}
                    </Avatar>
                }
                action={
                    <IconButton onClick={(e) => handleCopy(e, "Hello")} size="small" aria-label="copy">
                        <CopyAllOutlined />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
                <Typography>#web</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="edit">
                    <Edit color="warning" />
                </IconButton>
                <IconButton aria-label="delete">
                    <Delete color="error" />
                </IconButton>
                {/* <Button variant="outlined" color="success" >Edit</Button>
                <Button variant="outlined" color="error" >Delete</Button> */}
            </CardActions>

        </Card>
    );
}

export default ProfileMediaCard;