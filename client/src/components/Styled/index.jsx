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

export const Icon = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
heigth: 15%;
width: 15%;
`

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

export const LocDes = styled.p `
color: white;
font-weight: bold;
`

export const Title = styled.h3 `
color: white;
font-family: 'Cabin Condensed', sans-serif;
`

export const Website = styled.a `
text-decoration: none;
text-align: center;
color: white;

& :link, :hover, :active, :visited {
    text-decoration: none;
    color: white;
    text-shadow: 0px 0px 2px #60144C;
}
`

export const ActivitiesN = styled.p `
color: white;
font-family: 'Lato', sans-serif;
font-size: 20px;
`
export const ActivitiesT = styled.p `
color: white;
font-family: 'Lato', sans-serif;
font-size: 40px;
`

export const White = styled.p `
color: white;
// font-family: 'Roboto Condensed', sans-serif;
`

export const Label = styled.label `
color: white;
`
export const Wrapper = styled.section `
width:100%;
padding: 1%;
background-color: black;
opacity: 0.9;
border-radius: 5px;
`