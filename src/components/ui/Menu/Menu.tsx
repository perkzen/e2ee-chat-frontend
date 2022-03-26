import React, { FC, SyntheticEvent, useState } from 'react';
import classes from './Menu.module.scss';
import { Box, Card, CardContent } from '@mui/material';
import { AuthModal, Input, UserList } from '../index';
import { MenuHeader } from '../index';
import { TabContext, TabPanel } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';

const users = ['Domen Perko', 'Gregor Sulcer', 'Davorin Drozg', 'Neke Neke'];
const conversations = ['Jože Boža', 'Rektor bektor'];

const Menu: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setModalOpen(!modalOpen);
  };

  const [value, setValue] = useState('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Card className={classes.Container}>
          <CardContent className={classes.Spacing}>
            <MenuHeader username={'Domen Pero'} />
            <Input placeholder={'Search for users'} />
            <Box className={classes.UserList}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} variant={'fullWidth'}>
                  <Tab label="Online" value="1" />
                  <Tab label="Conversations" value="2" />
                </TabList>
              </Box>
              <TabPanel value={'1'}>
                <UserList users={users} />
              </TabPanel>
              <TabPanel value={'2'}>
                <UserList users={conversations} />
              </TabPanel>
            </Box>
          </CardContent>
        </Card>
        <AuthModal open={modalOpen} onClose={handleClose} />
      </TabContext>
    </>
  );
};

export default Menu;
