import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import classes from './Menu.module.scss';
import {Box, Card, CardContent, Theme} from '@mui/material';
import { Input, UserList } from '../index';
import { MenuHeader } from '../index';
import { TabContext, TabPanel } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import { useAppSelector } from '../../../store/app/hooks';
import { User } from '../../../store/models/Auth';

const Menu: FC = () => {
  const [value, setValue] = useState('1');
  const [users, setUsers] = useState<User[]>([]);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { socket } = useAppSelector((state) => state.socket);

  useEffect(() => {
    socket.on('fetchUsers', (onlineUsers: User[]) => setUsers(onlineUsers));
  }, [users]);

  return (
    <>
      <TabContext value={value}>
        <Card className={classes.Container} style={{backgroundColor: "#1C1C1C"}}>
          <CardContent className={classes.Spacing}>
            <MenuHeader />
            <Input placeholder={'Search for users'}/>
            <Box className={classes.UserList}>
              <Box sx={{ borderBottom: 1,  borderColor: (theme: Theme) => theme.palette.grey["800"] }}>
                <TabList onChange={handleChange} variant={'fullWidth'}>
                  <Tab label="Online" value="1" />
                  <Tab label="History" value="2" />
                </TabList>
              </Box>
              <TabPanel value={'1'}>
                <UserList users={users} />
              </TabPanel>
              <TabPanel value={'2'}>
                {/*<UserList users={conversations} />*/}
              </TabPanel>
            </Box>
          </CardContent>
        </Card>
      </TabContext>
    </>
  );
};

export default Menu;
