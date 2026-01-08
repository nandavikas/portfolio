import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const pages = ['Home', 'Portfolio', 'Experience', 'Contact Me'];

function NavBar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleItemClick = (selectedButton) => {
        console.log('handleItemClick', selectedButton)
        const pagesToNavigate = {
            'Home': '/',
            'Portfolio': '/portfolio',
            'Experience': '/experience',
            'Contact Me': '/contact'
        }
        navigate(pagesToNavigate[selectedButton])
    }

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                backgroundColor: '#ffffff',
                borderBottom: '1px solid #e8eaed',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ py: 1.5 }}>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ color: '#2c3e50' }}
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
                                '& .MuiPaper-root': {
                                    borderRadius: 0,
                                    boxShadow: 'none',
                                    mt: 0,
                                    width: '100vw',
                                    maxWidth: '100vw',
                                    left: '0 !important',
                                    right: '0 !important',
                                    border: 'none',
                                    borderBottom: '1px solid #e8eaed',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        handleItemClick(page);
                                    }}
                                    sx={{
                                        py: 2,
                                        px: 3,
                                        justifyContent: 'center',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            backgroundColor: '#f5f7fa',
                                            '& .MuiTypography-root': {
                                                color: '#26a69a'
                                            }
                                        }
                                    }}
                                >
                                    <Typography
                                        textAlign="center"
                                        sx={{
                                            color: '#2c3e50',
                                            fontWeight: 500,
                                            fontSize: '1rem',
                                            width: '100%',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 1 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={(event) => { handleItemClick(page) }}
                                sx={{
                                    my: 1,
                                    color: '#2c3e50',
                                    display: 'block',
                                    px: 3,
                                    py: 1,
                                    fontWeight: 500,
                                    fontSize: '0.95rem',
                                    textTransform: 'none',
                                    borderRadius: '8px',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        backgroundColor: '#f5f7fa',
                                        color: '#26a69a',
                                        transform: 'translateY(-1px)'
                                    }
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
