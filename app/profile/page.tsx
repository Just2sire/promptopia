import { Grid, Stack, Typography } from "@mui/material"
import ProfileMediaCard from "../../components/profile_media_card"

const Profile = () => {
    return (
        <Stack minWidth='100%' alignItems='start' justifyContent={{ xs: 'space-between' }} spacing={4} >
            <Stack maxWidth={{ xs: '60%' }} alignItems={{ xs: 'start' }} spacing={3} >
                <Typography fontSize={{ xs: '3rem', md: '4.5rem' }} fontWeight='bold' >My Profile</Typography>
                <Typography fontSize={{ xs: "1.1rem", md: "1.2rem" }} color='gray' >
                    Prompotia is an open-source AI prompting tool for modern world to discover, create and share creative prompts
                </Typography>
            </Stack>
            <Grid container width='100%' spacing={3} >
                {
                    [1, 2, ].map((value, index) => (
                        <Grid spacing={4} my={2} mr={2} key={index} xs={4} rowSpacing={3} columnSpacing={3} >
                            <ProfileMediaCard />
                        </Grid>))
                }
            </Grid>
        </Stack>
    )
}


export default Profile