"use client"
import { Facebook, Instagram, X, YouTube } from "@mui/icons-material";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

const Footer = (): ReactElement => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
                // backgroundColor: 'secondary.main',
                pt: "1rem",
                pb: "1rem",
            }}
            component='footer'
        >
            <Container maxWidth="lg" >
                <Grid container flexDirection={{xs: 'column-reverse',md: 'row'}} alignItems='center' >
                    <Grid item xs={6} >
                        <Typography fontSize={{ xs: '0.7em', sm: '1em' }} >@kdessi {new Date().getFullYear()} | All rights reserved</Typography>
                    </Grid>
                    <Grid item xs={6} >
                        <Stack direction='row' justifyContent='center' alignItems='center' spacing={4} >
                            <Facebook color="secondary" />
                            <Instagram color="secondary" />
                            <X color="secondary" />
                            <YouTube color="secondary" />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer