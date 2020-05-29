import React from 'react';
import styled from "styled-components";

export const Button = styled.button `
width: 200px;
height: 50px;
margin: 2% 0 0 0;
border-radius: 3px;
letter-spacing: 1.5px;
padding: 1%;
background-color: white;
color: black;`

export const Event = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
box-shadow: 0 0 2 2 white;
`

export const Icon = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
heigth: 15%;
width: 15%;
`

export const Identify = styled.span `
font-weight: bold;`

export const Image = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
`

export const ImgDes = styled.p `
font-style: italic;
text-align: center;
color: white;
`

export const ImageButton = styled.button `
width: 50px;
height: 35px;
margin: 2% 0 0 0;
border-radius: 50%;
background-color: black;
padding: 1%;
border: none;
&:link, :hover, :active, :visited {
    text-decoration: none;
    font-weight: bold;
    box-shadow: 0px 0px 5px white;
    transform: scale(0.9);
`

export const Jumbo = styled.section `
background-color: ${props => props.local ? "rgba(82,82,122,.95)" : "rgba(33,49, 100,.95)"};
color: #ccc;
padding: 2rem 2rem;
text-align: center;
border-radius: 5px;
text-shadow 1px 1px 1px black;
opacity: 1;
`

export const LocDes = styled.p `
color: white;
font-weight: bold;
`
export const Pin = styled.img `
heigth: 30%;
width: 30%;
`

export const FlipBtn = styled.button `
width: 2rem;
height: 2rem;
background-color: "black" 
color: "white";
border-radius: 50%;
border: none;
text-align: center;
margin-right: 3px;
&:hover {
    transform: scale(0.9);
    box-shadow: 0px 0px 10px 2px rgba(16,16,16);

}`

export const LinkBtn = styled.button `
width: 2rem;
height: 2rem;
border-radius: 50%;
border: none;
margin-right: 3px;
background-color: rgba(0, 0, 0,.8);
color: white;
font-weight: bold;
&:link, :hover, :active, :visited {
    text-decoration: none;
    font-weight: bold;
    box-shadow: 0px 0px 5px white;
    transform: scale(1.1);
`

export const Submit = styled.button `
width: 125px;
height: 35px;
margin: 2% 0 0 0;
border-radius: 3px;
border: none;
letter-spacing: 1.5px;
box-shadow: 0px 0px 5px 1px white;
padding: 1%;
background-color: rgba(96, 20, 76,.8);
color: white;
font-weight: bold;
&:link, :hover, :active, :visited {
    text-decoration: none;
    font-weight: bold;
    box-shadow: 0px 0px 5px white;
    transform: scale(1.1);
`

export const TripBtn = styled.button `
width: 125px;
height: 35px;
margin: 0 2% 0 0;
border-radius: 3px;
border: none;
letter-spacing: 1.5px;
padding: 1%;
background-color: ${props => props.vacation ? "rgba(20, 38, 96)" : "rgba(96, 20, 76)" };
color: white;
font-weight: bold;
box-shadow: 0px 0px 1px white;
&:link, :hover, :active, :visited {
    text-decoration: none;
    background-color: ${props => props.local ? "rgba(96, 20, 76, .8)" : "rgba(20, 38, 96, .8)"};
    font-weight: bold;
    box-shadow: 0px 0px 5px white;
    transform: scale(1.1);
`
export const TripBtn2 = styled.button `
margin: 2% 2% 2% 0;
border-radius: 3px;
border: none;
letter-spacing: 1.5px;
padding: 1%;
background-color: ${props => props.local ? "rgba(96, 20, 76)" : "rgba(20, 38, 96)"};
color: white;
font-weight: bold;
box-shadow: 0px 0px 1px white;
&:link, :hover, :active, :visited {
    text-decoration: none;
    background-color: ${props => props.local ? "rgba(96, 20, 76, .8)" : "rgba(20, 38, 96, .8)"};
    font-weight: bold;
    box-shadow: 0px 0px 5px white;
    transform: scale(0.98);
`

export const Submit = styled.button `
width: 125px;
height: 35px;
margin: 2% 0 0 0;
border-radius: 3px;
border: none;
letter-spacing: 1.5px;
padding: 1%;
background-color: rgba(82, 82, 122,.9);
color: white;
font-weight: bold;
&:link, :hover, :active, :visited {
    text-decoration: none;
    font-weight: bold;
    box-shadow: 0px 0px 5px white;
    transform: scale(1.1);
`

export const Title = styled.h3 `
color: white;
text-align: left;
font-family: 'Cabin Condensed', sans-serif;
`

export const Website = styled.a `
text-decoration: none;
text-align: center;
font-size: 17px;
color: white;
display: block;
margin-left: auto;
margin-right: auto;
&:link, :hover, :active, :visited {
    text-decoration: none;
    font-weight: bold;
    transform: scale(0.9);
}
`

export const ActivitiesN = styled.p `
color: white;
font-family: 'Lato', sans-serif;
font-size: 20px;
`

// export const Center = styled.p `
// color: white;
// text-align: center;
// font-size: 20px;`

export const White = styled.p `
color: white;
text-align: ${props => props.center ? "center" : "left" }
`

export const Label = styled.label `
color: white;
text-align: center;
`
export const Wrapper = styled.section `
width:100%;
padding: 3%;
background-color: black;
opacity: 0.95;
border-radius: 5px;
`