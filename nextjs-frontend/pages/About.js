import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Box, Card, CardMedia, Typography } from '@mui/material';

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'Food blogging is a feature of food journalism interlinking a gourmet interest in food, blog writing, and food photography. Food blogs are generally written by food enthusiasts often referred to as a “foodies” and can be used commercially by the blogger to earn a profit.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4S8FCS-v2zZ-VFE2O0uUVuQde_b4QDzAvLw&usqp=CAU',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'I love food. Ever since I was a little kid I have had this immense passion for cooking. I thought to myself. Why not share with the rest of the world wholesome healthy foods and ways to be happy and healthy that will keep even the most snobby foodie asking for more',
        image: 'http://cdn.shopify.com/s/files/1/0394/4087/5687/articles/how_healthy_food_is_good_for_us.jpg?v=1670572068',
        imageLabel: 'Image Text',
    },

    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'I love food. Ever since I was a little kid I have had this immense passion for cooking. I thought to myself. Why not share with the rest of the world wholesome healthy foods and ways to be happy and healthy that will keep even the most snobby foodie asking for more',
        image: 'http://cdn.shopify.com/s/files/1/0394/4087/5687/articles/how_healthy_food_is_good_for_us.jpg?v=1670572068',
        imageLabel: 'Image Text',
    },
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'Food blogging is a feature of food journalism interlinking a gourmet interest in food, blog writing, and food photography. Food blogs are generally written by food enthusiasts often referred to as a “foodies” and can be used commercially by the blogger to earn a profit.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4S8FCS-v2zZ-VFE2O0uUVuQde_b4QDzAvLw&usqp=CAU',
        imageLabel: 'Image Text',
    },
];

const About = () => {

    return (
        <Box sx={{ flexGrow: 1, margin: 5 }}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                style={{ minHeight: '100vh' }}
            >
                {featuredPosts.map((post, index) => (
                    (index % 2 == 0) ?
                        <Grid key={index}>
                            <Box sx={{ display: { xs: 'flex' } }}>
                                <Box gridColumn="span 5" sx={{ margin: 3 }}>
                                    <CardMedia
                                        sx={{ width: 500, display: { xs: 'none', sm: 'block' }, borderRadius: 5 }}
                                        component="img"
                                        image={post.image}
                                        alt={post.imageLabel}
                                    />
                                </Box>
                                <Box gridColumn="span 7" sx={{ margin: 3 }}>
                                    <Typography component="h1" variant="h3" alignItems >
                                        {post.title}
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        {post.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        :
                        <Grid key={index}>
                            <Box sx={{ display: { xs: 'flex' } }}>
                                <Box gridColumn="span 7" sx={{ margin: 3 }}>
                                    <Typography component="h1" variant="h3"  >
                                        {post.title}
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph >
                                        {post.description}
                                    </Typography>
                                </Box>
                                <Box gridColumn="span 5" sx={{ margin: 3 }}>
                                    <CardMedia
                                        sx={{ width: 500, display: { xs: 'none', sm: 'block' }, borderRadius: 5 }}
                                        component="img"
                                        image={post.image}
                                        alt={post.imageLabel}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                ))}
            </Grid>
        </Box>

    )
}

export default About