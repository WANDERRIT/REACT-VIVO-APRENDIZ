import { ButtonStyled,ButtonGreen, ButtonGray,ButtonBlue} from "./style";

interface ButtonProps {
  text?: string;
  style?: string;
}

export default function Button({ text, style }: ButtonProps) {
  if(style=="botaoVerde"){
    return <ButtonGreen>{text}</ButtonGreen>
  } else if (style=="botaoCinza"){
    return <ButtonGray>{text}</ButtonGray>
  } 
  else if (style=="botaoAzul"){
    return <ButtonBlue>{text}</ButtonBlue>
  } else {
    return <ButtonStyled>{text}</ButtonStyled>
  }
        
}
