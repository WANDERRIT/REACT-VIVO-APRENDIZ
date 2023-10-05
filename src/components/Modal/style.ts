import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
background: #fff;
border-radius: 12px;
max-width: 520px;

`

export const Overlayer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw; 
height: 100vh;
position: fixed;
background: rgb(0,0,0,35%);
top: 0;
Left: 0;
`
export const Header = styled.div`
font-size: 20px;
padding: 24px;
`

export const Main = styled.div`
font-size: 16px;
padding: 24px;
`



export const Footer = styled.div`
display: flex;
justify-content: center;
gap: 24px;
background: #FFFF;
padding: 24px;
border-radius: 12px;
`

export const FormModal =styled.form`
display: flex;
flex-direction: column;
`
