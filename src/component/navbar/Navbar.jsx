import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { grey } from '@mui/material/colors';

const pages = [{name:'Proyectos', url:'/proyectos'}, {name:'curriculum', url:'/cv/alemcuitino'}, {name:'Sobre mi', url:'/sobremi'}]; // cada uno que sea un objeto
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const color = grey[50];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color="grey" sx={{
            width: '100%',
            boxShadow: 'none'
        }}>
            <Container maxWidth="xl">
                <Toolbar 
                        disableGutters 
                        sx={{ 
                            mx: { xs: 5, md: 10, lg: 20, xl: 25 },
                            display: 'flex', 
                            justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            my: { sm: 1, lg:2, xl:5 },
                            mr: { xl:40},
                            display: { xs: 'none', md: 'flex' },
                            fontSize: { sm: 22, md: 28, lg:32, xl:38 },
                            fontWeight: 700,
                            color: "#E9417B",
                            textDecoration: 'none',
                        }}
                    >
                        Ale M.Cuitiño
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ my: 2, color: "#E9417B", }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                color: "#E9417B"
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} 
                                to= {page.url}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            my: { sm: 2, lg:2, xl:8 },
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            textDecoration: 'none',
                            color: "#E9417B"
                        }}
                    >
                        Ale M.Cuitiño
                    </Typography>
                    <Box 
                        sx={{
                            my: { sm: 2, lg:2, xl:8 },
                            flexGrow: 1, 
                            display: { xs: 'none', md: 'flex'}, 
                            justifyContent: 'flex-end',
                            gap: 5, 
                            }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ 
                                    // mr: { sm: 1, md:2},
                                    color: "#E9417B",
                                    fontSize:18, 
                                    display: 'block' }}
                                component={Link} 
                                to= {page.url}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;