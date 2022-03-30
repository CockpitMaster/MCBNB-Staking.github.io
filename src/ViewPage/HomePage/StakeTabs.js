import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box, Typography } from '@mui/material';
import StakeDetails from './StakeDetails';
import UnstakeDetails from './UnstakeDetails';

const blue = {
    50: '#393f56',
    100: '#C2E0FF',
    200: '#4a4a4a3d',
    300: '#66B2FF',
    400: '#178aff',
    // 500: '#232736',
    600: '#178aff',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(TabUnstyled)` 
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: normal;
  background-color: transparent;
  width: 100%;
  padding: 8px 16px; 
  border: none; 
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff; 
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%; 
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]}; 
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;


const StakeTabs = () => {
    return (
        <div>
            <TabsUnstyled defaultValue={0}>
                <TabsList>
                    <Tab>
                        <Typography variant='h6' component='div' fontWeight='normal'>
                            Stake
                        </Typography>
                    </Tab>
                    <Tab>
                        <Typography variant='h6' component='div' fontWeight='normal'>
                            Unstake
                        </Typography>
                    </Tab>
                </TabsList>
                <TabPanel value={0}>
                    <Box>
                        <StakeDetails />
                    </Box>
                </TabPanel>
                <TabPanel value={1}>
                    <Box>
                        <UnstakeDetails />
                    </Box>
                </TabPanel>
            </TabsUnstyled>
        </div>
    )
}

export default StakeTabs;