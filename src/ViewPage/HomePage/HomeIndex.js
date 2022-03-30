import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { BoxHome  } from '../../Components/HeaderBar/HeaderCs'
import StakeTabs from './StakeTabs';

const HomeIndex = () => {
    return (
        <BoxHome> 
            <Container maxWidth='xl'>
                <Grid container spacing={2}>
                    <Grid item xs='12' md='6' margin='auto' >
                        <Box bgcolor='#232736' padding='10px' borderRadius='12px'>
                             <StakeTabs />
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </BoxHome>
    )
}

export default HomeIndex;