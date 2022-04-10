import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import classes from './Menu.module.scss';
import { Box, Card, CardContent, Theme } from '@mui/material';
import { Input, UserList, ConversationHistory } from '../index';
import { MenuHeader } from '../index';
import { TabContext, TabPanel } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import { useAppDispatch, useAppSelector } from '../../../store/app/hooks';
import { User } from '../../../store/models/Auth';
import { fetchConversationHistory } from '../../../store/actions/chatActions';

const Menu: FC = () => {
  const [value, setValue] = useState('1');
  const [users, setUsers] = useState<User[]>([]);
  const { history, messages } = useAppSelector((state) => state.chat);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { socket } = useAppSelector((state) => state.socket);

  useEffect(() => {
    socket.on('fetchUsers', (onlineUsers: User[]) => setUsers(onlineUsers));
  }, [users]);

  useEffect(() => {
    if (user) {
      dispatch(fetchConversationHistory(user.id));
    }
  }, [user, messages]);

  return (
    <>
      <TabContext value={value}>
        <Card className={classes.Container}>
          <CardContent className={classes.Spacing}>
            <MenuHeader />
            <Input placeholder={'Search for users'} />
            <Box className={classes.UserList}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: (theme: Theme) => theme.palette.grey['800'],
                }}
              >
                <TabList onChange={handleChange} variant={'fullWidth'}>
                  <Tab label="Online" value="1" />
                  <Tab label="History" value="2" />
                </TabList>
              </Box>
              <TabPanel value={'1'}>
                <UserList users={users} />
              </TabPanel>
              <TabPanel value={'2'}>
                {history && <ConversationHistory conversations={history} />}
              </TabPanel>
            </Box>
          </CardContent>
        </Card>
      </TabContext>
    </>
  );
};

export default Menu;
