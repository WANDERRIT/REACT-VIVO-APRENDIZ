import { ButtonStyled,ButtonGreen, ButtonGray,ButtonBlue, ButtonAtt} from "./style";

interface ButtonProps {
  text?: string;
  style?: string;
  onClick?: ()=> unknown;

}

export default function Button({ text, style, onClick, }: ButtonProps) {
  if(style=="botaoVerde"){
    return <ButtonGreen onClick={onClick}>{text}</ButtonGreen>
  }
   else if (style=="botaoCinza"){
    return <ButtonGray onClick={onClick}>{text}</ButtonGray>
  } 
  else if (style=="botaoAzul"){
    return <ButtonBlue onClick={onClick}>{text}</ButtonBlue>
  }
   else if (style == "atualizarStatus"){
    return <ButtonAtt onClick={onClick} type="submit">{text}</ButtonAtt>
  }
   else {
    return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
  }  
}
