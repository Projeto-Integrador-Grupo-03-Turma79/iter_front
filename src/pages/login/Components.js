import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
box-shadow: #003152;
position: relative;
overflow: hidden;
width: 100%;
max-width: 100%;
min-height: 100%;

`;

export const SignInContainer = styled.div`
position: absolute;
background-color: #003152;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`;

export const Title = styled.h1`
display: flex;
justify-content: start;
font-size: 3em;
font-weight: bold;
margin: 200;
`;

export const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
`;


export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid #ff4b2b;
   background-color: #ff4b2b;
   color: #ffffff;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
`;
export const GhostButton = styled(Button)`
color: #f1af09;
background-color: transparent;
border-color: #f1af09;
`;

export const Anchor = styled.a`
color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
`;
export const OverlayContainer = styled.div`
position: absolute;
background-color: #ffff;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
 props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background-color: #ffff;
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;



export const OverlayPanel = styled.div`  
    position: absolute;
    background-color: #003152;
    background-image: url("");
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  border-radius: 0% 0% 90% 0%;
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    border-radius: 0% 0% 0% 90%;
    transform: translateX(0);
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
font-size: 1.6em;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px
`;