import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgba(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const Parrafo = styled.p`
  background-color: rgba(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const TextoCotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

export const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Parrafo>Elige marca, año, Parrafolan</Parrafo>
  ) : (
    <ResultadoCotizacion>
      <TransitionGroup component="p" className="resultado">
        <CSSTransition
          key={cotizacion}
          classNames="resultado"
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextoCotizacion>El total es $ {cotizacion}</TextoCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
  );
};
