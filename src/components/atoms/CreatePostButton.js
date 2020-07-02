import React from 'react'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const StyledFab = styled.div`
margin: 0;
top: 'auto';
right: 20;
bottom: 20;
left: 'auto';
position: 'fixed'
`;

const StyledLink = styled(Link)`
    color: "inherit",
    textDecoration: "inherit"
`


export default function CreatePostButton({isLoggedIn}){
    if (!isLoggedIn){
        return null
    }
    return(
        <StyledFab>
        <StyledLink to="/createblog">
            <Fab>
                <AddIcon/>
            </Fab>
        </StyledLink>
        </StyledFab>
    );
}