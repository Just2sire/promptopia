"use client"
import Link from 'next/link';
import { DarkMode, LightMode, LogoutOutlined, Menu } from '@mui/icons-material'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { useContext, useState } from 'react';
import { AppThemeContext } from '@/lib/theme_registry';
import { usePathname } from 'next/navigation';

interface Route {
  name: string
  link: string
}

const Header = () => {

  const [routeId, setRouteId] = useState<number>(0);

  const themeContext = useContext(AppThemeContext)

  const links: Route[] = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Portfolio',
      link: '/portfolio'
    },
    {
      name: 'Blog',
      link: '/blog'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
    {
      name: 'Dashboard',
      link: '/dashboard/login'
    },
  ];

  const path = usePathname();



  const handleThemeChange = () => {
    themeContext?.toggle();
  }

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar
          sx={{
            bgcolor: "white",
            // mb: 3,
          }}
        >
          <Stack
            // container
            width='100%'
            direction='row'
            py={1}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Link href='/' style={{ textDecoration: 'none' }} >
              <Typography color="secondary" sx={{ fontSize: "1.5rem", fontWeight: 'bold', '&:hover': { color: 'primary' }, cursor: 'pointer' }} >
                Promptopia
              </Typography>
            </Link>

            <Stack
              direction="row"
              display={{
                xs: "none",
                md: "flex",
              }}
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >

              {/* 
              <IconButton size='large' >
                <LogoutOutlined fontSize='large' />
              </IconButton> 
              */}

              <Link href="/profile">
                <Button variant='contained' sx={{ borderRadius: 25, px: 2, py: 1, bgcolor: 'black', color: 'white' }} >Create Post</Button>
              </Link>
              <Button variant='outlined' sx={{ borderRadius: 25, px: 2, py: 1, color: 'gray', borderColor: 'gray' }} >Sign Out</Button>

              {/* Resonsive menu icon */}
              <IconButton
                color='secondary'
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
              >
                <Menu color='primary' />
              </IconButton>
            </Stack>

            {/* <Button>
              <Typography variant="h6" color="#166B54">
                <Screen />
              </Typography>
            </Button> */}


          </Stack>
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
    </>
  )
}



export default Header