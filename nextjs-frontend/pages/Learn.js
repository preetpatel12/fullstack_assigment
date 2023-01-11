
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../components/Main/MainFeaturedPost';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const Learn = () => {

    const mainFeaturedPost = {
        title: 'Title of a longer featured blog post',
        description:
            "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
        image: 'https://source.unsplash.com/random',
        imageText: 'main image description',
        linkText: 'Continue reading…',
    };
    const post = {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.    Whether you need an emergency substitution or are just trying to make healthier food choices, you can handle using whole wheat flour in place of all-purpos Whole-wheat flour has the highest protein content on our list. For that reason, when substituting it for all-purpose, use 50 percent whole-wheat, and 50 percent of another flour, preferably all-purpose, pastry flour or spelt, to avoid a dense result. If you want to use only whole wheat, youll need to add more water',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    }

    const theme = createTheme();
    return (
        <>

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg">

                    <MainFeaturedPost post={mainFeaturedPost} />
                
                    <Grid >
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 3, md: 6 },
                                pr: { md: 0 },
                            }}
                        >
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                {post.title}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                {post.description}
                            </Typography>
                            {/* <Link variant="subtitle1" href="#">
                                {post.linkText}
                            </Link> */}
                        </Box>
                    </Grid>
                
            </Container>
        </ThemeProvider>
        </>
    )
}

export default Learn