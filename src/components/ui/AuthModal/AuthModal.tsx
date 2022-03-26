import React, { FC, SyntheticEvent, useState } from 'react';
import { Box, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import { LoginTab, RegisterTab } from '../index';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const AuthModal: FC<ModalProps> = ({ open, onClose }) => {
  const [value, setValue] = useState('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Dialog open={open} onClose={onClose} onBackdropClick={onClose} fullWidth>
        <DialogTitle>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} variant={'fullWidth'}>
              <Tab label="Sign in" value="1" />
              <Tab label="Sign up" value="2" />
            </TabList>
          </Box>
        </DialogTitle>
        <DialogContent>
          <TabPanel value="1">
            <LoginTab />
          </TabPanel>
          <TabPanel value="2">
            <RegisterTab />
          </TabPanel>
        </DialogContent>
      </Dialog>
    </TabContext>
  );
};

export default AuthModal;
