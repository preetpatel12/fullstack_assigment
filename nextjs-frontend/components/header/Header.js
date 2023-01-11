import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../Logo/Logo';
import { Tab, Tabs } from '@mui/material';
import Shop from '../../pages/Shop';
import About from '../../pages/About';
import Content from '../../pages/Receipes';
import Blog from '../../pages/Blog';
import { styled } from '@mui/material/styles';
import Learn from '../../pages/Learn';
import { useRouter } from 'next/router';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const tabs = [
    {
        title: 'Shop',
        component: Shop
    },
    {
        title: 'Receipes',
        component: Content
    },
    {
        title: 'Learn',
        component: Learn
    },
    {
        title: 'About',
        component: About
    },
    {
        title: 'Blog',
        component: Blog
    },
];

const Header = ({children}) => {
    const [value, setValue] = React.useState(0);
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const router=useRouter()

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const TabCompo = styled(Tabs)(({ theme }) => ({
        textColor: '#b34a2bf2',
        indicatorColor: '#b34a2bf2'
        

    }));

    function TabPanel(props) {

        const { children, value, index, ...other } = props;

        return (
            <Box
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Box>{children}</Box>
                    </Box>
                )}
            </Box>
        );
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
            color: '#b34a2bf2'
        };
    }

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            sx={{

                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#b34a2bf2',

                            }}
                        >
                            LOGO
                            {/* <Logo /> */}
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
                            <TabCompo value={value} onChange={handleChange}
                          
                                aria-label="basic TabCompo example">
                                {tabs.map((tab, index) => (<Tab key={index} label={tab.title} {...a11yProps(index)} onClick={()=>{router.push(tab.title)}} />))}

                            </TabCompo>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box>
            {/* {tabs.map((tab, index) => (<TabPanel key={index}  value={value} index={index} ><tab.component /> </TabPanel>))} */}
            <main>{children}</main>
            </Box>
         

        </>
    );
}
export default Header;