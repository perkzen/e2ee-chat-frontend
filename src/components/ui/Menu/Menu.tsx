import React, { FC } from 'react';
import classes from './Menu.module.scss';
import { Box, Card, CardContent, Typography } from '@mui/material';
import {AuthModal, Button} from '../index';

const Menu: FC = () => {
  return (
      <>
        <Card className={classes.Container}>
          <CardContent>
            <Typography variant="h4" align="center">
              Chat
            </Typography>
            <Box className={classes.OnlineUsers}>Online users</Box>
            <div className={classes.ButtonContainer}>
              <Button text={'Login'} onClick={() => console.log('log')} />
            </div>
          </CardContent>
        </Card>
        <AuthModal open={true} onClose={()=>console.log("da")}/>
      </>

  );
};

export default Menu;
