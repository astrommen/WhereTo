import React from "react";
import styled from "styled-components";

const Save = styled.button `
float: right;
background-color: #146028;
padding: 5px;
margin: 2px;
border-radius: 8px;
color: white;
text-decoration: none;
width: 75px;

&:hover {
    opacity: 0.8;
    box-shadow: 0px 0px 3px 3px gray;
}
`

const Site = styled.button `
float: right;
background-color: #142660;
padding: 5px;
margin: 2px;
border-radius: 8px;
color: white;
text-decoration: none;
width: 125px;

&:hover {
    opacity: 0.8;
    box-shadow: 0px 0px 3px 3px gray;
}
`

const Link = styled.a `
text-decoration: none;

&:link, :hover, :active, :visited {
    text-decoration: none;
    color: white;
    text-shadow: 0px 0px 2px black;
}
`


//The ...props prints all of the passed props onto this element
export function DeleteBtn(props) {
    return(
        <span className="delete-btn" {...props} role="button" tabIndex="0">
        Delete Book 
        </span>
    )
}

export function SiteBtn(props) {
    return(
        <Site>
            <Link href={props.href} target="_blank" rel="noopener noreferrer"> {props.children} </Link>
        </Site>
    )
}

export function SeatmapBtn(props) {
    return(
        <Site>
            <Link href={props.href} target="_blank" rel="noopener noreferrer"> Seat Map </Link>
        </Site>
    )
}

export function SaveBtn(props) {
    return(
        <Save className="save-btn" {...props} tabIndex="0">
        Save 
        </Save>
    )
}

