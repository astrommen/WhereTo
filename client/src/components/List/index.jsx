import React from "react";
import styled from "styled-components";

const Card = styled.li `
border-radius: 5px;
margin-bottom: .8rem;
padding: .5rem; 
background-color: white;
box-shadow: 0px 0px 5px 3px black;
`

const NoBullet = styled.ul `
list-style-type: none;`

export function List({children}) {
    return(
        <div>
            <NoBullet>{children}</NoBullet>
        </div>
    );
}

export function ListItem({ children }) {
    return <Card>{children}</Card>
}

