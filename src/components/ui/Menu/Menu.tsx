import React, { FC, useState } from 'react';
import classes from './Menu.module.scss';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { AuthModal, Button } from '../index';
import OnlineUser from '../OnlineUser/OnlineUser';
import { v4 } from 'uuid';

const users = ['Domen Perko', 'Gregor Sulcer', 'Davorin Drozg', 'Neke Neke'];

const Menu: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Card className={classes.Container}>
        <CardContent>
          <Typography variant="h4" align="center">
            Chat
          </Typography>
          <Box className={classes.OnlineUsers}>
            Online users
            {users.map((user) => (
              <OnlineUser username={user} key={v4()} />
            ))}
          </Box>
          <Box className={classes.ButtonContainer}>
            <Button text={'Login'} onClick={handleClose} />
          </Box>
        </CardContent>
      </Card>
      <AuthModal open={modalOpen} onClose={handleClose} />
    </>
  );
};

export default Menu;
