import React from 'react';
import styled from "styled-components";

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

export const White = styled.p `
color: white;
`

export const Label = styled.label `
color: white;
`