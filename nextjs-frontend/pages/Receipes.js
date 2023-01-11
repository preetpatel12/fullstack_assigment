import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BreadImage from './../assets/images/bread4.webp'
import { Button, CardMedia, Stack, Tab, Tabs, Typography } from '@mui/material';

const Content = () => {
    const [value, setValue] = React.useState(0);


    const ColorButton = styled(Button)(({ theme }) => ({
        color: '#b34a2bf2',
    }));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const Recepies = () => {
        return (
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={5}>
                <Box gridColumn="span 5">
                    <Typography component="h2" variant="h3" sx={{ paddingBottom: 10 }} >
                        Whole grain Banana Bread
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Whether you need an emergency substitution or are just trying to make healthier food choices, you can handle using whole wheat flour in place of all-purpos
                        Whole-wheat flour has the highest protein content on our list. For that reason, when substituting it for all-purpose, use 50 percent whole-wheat, and 50 percent of another flour, preferably all-purpose, pastry flour or spelt, to avoid a dense result. If you want to use only whole wheat, you'll need to add more water
                    </Typography>
                </Box>
                <Box gridColumn="span 7">
                    <CardMedia
                        component="img"
                        sx={{ width: 700, display: { xs: 'none', sm: 'block' }, borderRadius: 3 }}
                        image={BreadImage.src}
                        alt="banana bread"
                    />
                </Box>
            </Box>
        )
    }

    const Bread = () => {
        return (
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={5}>
                <Box gridColumn="span 5">
                    <Typography component="h2" variant="h3" sx={{ paddingBottom: 10 }} >
                        Whole grain Banana Bread
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Whether you need an emergency substitution or are just trying to make healthier food choices, you can handle using whole wheat flour in place of all-purpos
                        Whole-wheat flour has the highest protein content on our list. For that reason, when substituting it for all-purpose, use 50 percent whole-wheat, and 50 percent of another flour, preferably all-purpose, pastry flour or spelt, to avoid a dense result. If you want to use only whole wheat, you'll need to add more water
                    </Typography>
                </Box>
                <Box gridColumn="span 7">
                    <CardMedia
                        component="img"
                        sx={{ width: 700, display: { xs: 'none', sm: 'block' }, borderRadius: 3 }}
                        image="https://static.toiimg.com/photo/msid-74512833/74512833.jpg"
                        alt="banana bread"
                    />
                </Box>
            </Box>
        )
    }

    const QuickBread = () => {
        return (
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={5}>
                <Box gridColumn="span 5">
                    <Typography component="h2" variant="h3" sx={{ paddingBottom: 10 }} >
                        Whole grain Banana Bread
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Whether you need an emergency substitution or are just trying to make healthier food choices, you can handle using whole wheat flour in place of all-purpos
                        Whole-wheat flour has the highest protein content on our list. For that reason, when substituting it for all-purpose, use 50 percent whole-wheat, and 50 percent of another flour, preferably all-purpose, pastry flour or spelt, to avoid a dense result. If you want to use only whole wheat, you'll need to add more water
                    </Typography>
                </Box>
                <Box gridColumn="span 7">
                    <CardMedia
                        component="img"
                        sx={{ width: 700, display: { xs: 'none', sm: 'block' }, borderRadius: 3 }}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIjfQtrTkT7ZLmlSl0obkM0FMaVAoxwOmPQ&usqp=CAU"
                        alt="banana bread"
                    />
                </Box>
            </Box>
        )
    }

    const content = [
        {
            title: 'Recepies',
            component: Recepies
        },
        {
            title: 'Bread',
            component: Bread
        },
        {
            title: 'Quick Bread',
            component: QuickBread
        }

    ];

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
            color: '#b34a2bf2'
        };
    }
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
    return (
        <>
            <Box sx={{ width: 1 }}>
                <Box component="top-link" >
                    <Stack direction="row" spacing={2} >
                        <Tabs value={value} onChange={handleChange}
                            aria-label="basic Tabs example"
                            indicatorColor=''
                        >
                            {content.map((tab, index) => (<Tab key={index} label={tab.title} {...a11yProps(index)} />))}
                        </Tabs>
                    </Stack>
                </Box>

            </Box>
            {content.map((tab, index) => (<TabPanel key={index} value={value} index={index} ><tab.component /> </TabPanel>))}
        </>

    )
}

export default Content