import { GroupOutlined } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Divider, Typography } from '@mui/material';
import React from 'react'
import { BoStak } from '../../Components/HeaderBar/HeaderCs'
import TextField from '@mui/material/TextField';
import EarnHide from './EarnHide';

const commonStyles = {
    border: 1,
    borderRadius: 2,
    padding: '4px 10px',
};

const freetext = [
    {
        text: 'Fee Distribution Bounty',
        color: '#178aff',
        variant: 'h6',
        component: 'div',
        fontWeight: 'normal',
    },
]
const apytext = [
    {
        text: 'APY / APR',
        color: '#fff',
        variant: 'body1',
        component: 'div'
    },
    {
        text: 'Staked',
        color: '#fff',
        variant: 'body1',
        component: 'div'
    },
    {
        text: 'Profit',
        color: '#fff',
        variant: 'body1',
        component: 'div'
    },
]
const aprtext = [
    {
        text: '5.15% / 5.02%',
        color: '#fff',
        variant: 'body1',
        component: 'div'
    },
    {
        text: '0.000',
        color: '#fff',
        variant: 'body1',
        component: 'div'
    },
    {
        text: '0.000 BNB',
        color: '#fff',
        variant: 'body1',
        component: 'div'
    },
]


const UnstakeDetails = () => {
  return (
    <BoStak>
            <Box sx={{ ...commonStyles, borderColor: 'grey.500' }} display='flex' alignItems='center' justifyContent='space-between'>
                <Box>
                    {freetext.map((heading) => (
                        <Typography key={heading.text}
                            variant={heading.variant}
                            gutterBottom
                            component={heading.component}
                            color={heading.color}
                            fontWeight={heading.fontWeight}
                        >
                            {heading.text}
                        </Typography>

                    ))}
                    <Typography variant='body2' color='#fff' gutterBottom component='div' display='flex' alignItems='center' >
                        <img src='./img/token-bnb.svg' width='30px' />
                        0.000 <span>~0.000 USD</span>
                    </Typography>
                </Box>
                <Box>
                    <Button variant='contained'>
                        Claim
                    </Button>
                </Box>
            </Box>

            <Box paddingY='2rem'>
                <Box display='flex' alignItems='center'>
                    <Box>
                        <img src='./img/token-bunny.svg' width='45px' />
                    </Box>
                    <Box>
                        <Typography variant='span' color='#ddd' component='div'>
                            BUNNY Dividend
                        </Typography>
                        <Typography variant='h6' fontWeight='normal' gutterBottom color='#fff' component='div'>
                            BUNNY
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Divider />
            <Box paddingY='2rem'>
                <Box display='flex' alignItems='center' justifyContent='space-between' >
                    <Box>
                        {apytext.map((heading) => (
                            <Typography key={heading.text}
                                variant={heading.variant}
                                gutterBottom
                                color={heading.color}
                                component={heading.component}
                            >
                                {heading.text}
                            </Typography>
                        ))}
                    </Box>
                    <Box>
                        {aprtext.map((heading) => (
                            <Typography key={heading.text}
                                variant={heading.variant}
                                gutterBottom
                                color={heading.color}
                                component={heading.component}
                            >
                                {heading.text}
                            </Typography>
                        ))}
                    </Box>
                </Box>
                <Box marginTop='1rem'>
                    <Box>
                        <Typography variant='h6' color='#fff' fontWeight='normal' gutterBottom component='div' >
                            Balance:<span> 0.000</span>
                        </Typography>
                    </Box>
                    <Box sx={{ backgroundColor: '#ddd', padding: '10px', borderRadius: '5px' }}>
                        <Box display='flex' sx={{
                            width: 1000,
                            maxWidth: '100%',
                        }}>
                            <Button variant='contained' sx={{ marginRight: '10px', boxShadow: 'none' }} >MAX</Button>
                            <TextField fullWidth id="outlined-basic" label="Amount" variant="outlined" placeholder='0' />
                        </Box>
                    </Box>
                </Box>
                <Box paddingTop='2rem'>
                    <Button variant='contained' sx={{ boxShadow: 'none', width: '100%', padding:'14px' }} >
                        Connect Wallet
                    </Button>
                </Box>
            </Box>
            <Divider />
            <Box>
                <EarnHide />
            </Box>
        </BoStak>
  )
}

export default UnstakeDetails;