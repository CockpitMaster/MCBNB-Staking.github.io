import { Box } from '@mui/material';
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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


const EarnHide = () => {
    return (
        <div>
            <Box paddingTop='2ren'>
                <Accordion sx={{backgroundColor:'#393f56', boxShadow:'none'}}>
                    <AccordionSummary sx={{color:'#fff'}}
                        expandIcon={<ExpandMoreIcon sx={{color:'#fff'}} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography color='#fff'>Pool Details </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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
                    </AccordionDetails>
                </Accordion>
            </Box>
        </div>
    )
}

export default EarnHide;