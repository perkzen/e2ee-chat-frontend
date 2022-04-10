import React, {FC} from 'react';
import classes from './ChatHeader.module.scss';
import OnlineUser from '../OnlineUser/OnlineUser';
import {Box, Divider, Theme} from '@mui/material';
import {useAppSelector} from '../../../store/app/hooks';

const ChatHeader: FC = () => {
    const {receiver} = useAppSelector((state) => state.chat);

    return (
        <>
            {receiver && (
                <>
                    <Box sx={{borderBottom: 1, borderColor: (theme: Theme) => theme.palette.grey["800"]}}
                         className={classes.Container}>
                        <OnlineUser user={receiver} dot={false}/>
                    </Box>
                    <Divider flexItem/>
                </>
            )}
        </>
    );
};

export default ChatHeader;
