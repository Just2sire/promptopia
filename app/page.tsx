import MediaCard from "@/components/media_card";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";


export default function Home() {
  return (
    <Stack height='100%' flexDirection={{ xs: 'column' }} justifyContent={{ xs: 'space-between' }} alignItems='center' spacing={5} >
      <Stack alignItems='center' width={{ xs: '70%' }} >
        <Typography fontSize={{ xs: "1.7rem", sm: "2.3rem", md: "4rem", xl: '5rem' }} fontWeight='bold' >
          Discover & Share
        </Typography>
        <Typography fontSize={{ xs: "1.7rem", sm: "2.3rem", md: "4rem", xl: '5rem' }} className="title" fontWeight='bold' >
          AI-Powered Prompts
        </Typography>
        <Typography fontSize={{ xs: "1.1rem", md: "1.2rem" }} color='gray' >
          Prompotia is an open-source AI prompting tool for modern world to discover, create and share creative prompts
        </Typography>
      </Stack>
      <Box width={{ xs: '80%', md: '50%' }} >
        <TextField sx={{ boxShadow: 3 }} placeholder="Search for a tag or a username" fullWidth />
      </Box>
      <Grid container width='100%' >
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => (
          <Grid spacing={4} my={2} key={index} xs={4} rowSpacing={3} columnSpacing={3} >
            <MediaCard />
          </Grid>))
        }
      </Grid>
    </Stack>
  );
}
