import React from 'react'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import styled from 'styled-components'


const StyledFab = styled(Fab)`
margin: 0;
top: 'auto';
right: 20;
bottom: 20;
left: 'auto';
position: 'fixed'
`;


export default function CreatePostButton({isLoggedIn}){
    if (!isLoggedIn){
        return null
    }
    return(
            <StyledFab>
                <AddIcon/>
            </StyledFab>
    );
}