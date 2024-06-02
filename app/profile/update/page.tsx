import { Button, Grid, Stack, TextField, Typography } from "@mui/material"

const Profile = () => {
    return (
        <Stack minWidth='100%' alignItems='start' justifyContent={{ xs: 'space-between' }} spacing={4} >
            <Stack maxWidth={{ xs: '60%' }} alignItems={{ xs: 'start' }} spacing={3} >
                <Typography fontSize={{ xs: '3rem', md: '4.5rem' }} fontWeight='bold' >My Profile</Typography>
                <Typography fontSize={{ xs: "1.1rem", md: "1.2rem" }} color='gray' >
                    Edit and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform
                </Typography>
            </Stack>
            <Stack width={{ xs: '60%' }} alignItems={{ xs: 'start' }} p={3} spacing={3} bgcolor="paper" borderRadius={2} border="1px solid black" justifyContent={{ xs: 'start' }} >
                <Typography fontSize={{ xs: '1.2rem', md: '1.2em' }} fontWeight='bold' >Your AI Prompt</Typography>
                <TextField fullWidth multiline rows={5} sx={{ mb: 3 }} />
                <br />
                <Typography fontSize={{ xs: '1.2rem', md: '1.2em' }} fontWeight='bold' >Field of Prompt(#dev, #webdev, #ai)</Typography>
                <TextField fullWidth placeholder="web" />
                <Stack width="100%" direction='row' justifyContent={{ xs: 'end' }} >
                    <Button sx={{ borderRadius: 25, px: 3, py: 1, color: 'gray' }} >Cancel</Button>
                    <Button variant='contained' sx={{ borderRadius: 25, px: 3, py: 1, color: 'white', mx: 2 }} >Edit</Button>
                </Stack>
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