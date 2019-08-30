import {keyframes} from "styled-components";

// Inicia 20px mas abajo con `opacity` 0, luego se acomoda y aparece
export const aparecerDeAbajo = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`

// Inicia con un ancho de 0 y color rojo y toma el ancho y color del argumento `valor` que le pasemos
export const carga = valor => keyframes`
  0% {
    width: 0;
    background-color: hsl(0, 100%, 50%);
  }

  100% {
    background-color: hsl(${valor}, 100%, 50%);
    width: ${valor}%;
  }
  `