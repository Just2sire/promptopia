import { Grid, Stack, Typography } from "@mui/material"

const Profile = () => {
    return (
        <Stack minWidth='100%' alignItems='start' justifyContent={{ xs: 'space-between' }} spacing={4} >
            <Stack maxWidth={{ xs: '60%' }} alignItems={{ xs: 'start' }} spacing={3} >
                <Typography fontSize={{ xs: '3rem', md: '4.5rem' }} fontWeight='bold' >My Profile</Typography>
                <Typography fontSize={{ xs: "1.1rem", md: "1.2rem" }} color='gray' >
                    Edit and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform
                </Typography>
            </Stack>
            <Stack bgcolor="paper" justifyContent={{xs: 'space-around'}} >
                
            </Stack>
            {/* <Grid container width='100%' spacing={3} >
                {
                    [1, 2, ].map((value, index) => (
                        <Grid spacing={4} my={2} mr={2} key={index} xs={4} rowSpacing={3} columnSpacing={3} >
                            <ProfileMediaCard />
                        </Grid>))
                }
            </Grid> */}
        </Stack>
    )
}


export default Profile