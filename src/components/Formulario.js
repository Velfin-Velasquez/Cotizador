import React, { useState } from "react";
import styled from "@emotion/styled";
import { calcularMarca, obtenerDiferenciaYear, obtenerPlan } from "../helper";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1e1;
  --webkit-appearance: none;
`;

const ImputRadio = styled.input`
  margin: 0 1rem;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Formulario = ({ guardarResumen }) => {
  //definir state
  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, guardarError] = useState(false);

  //extraer valores
  const { marca, year, plan } = datos;

  //funcion para obtener datos
  const obtenerInfo = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario envia el formulario
  const cotizarseguro = (e) => {
    e.preventDefault();

    //validar
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      guardarError(true);
      return;
    }

    //si pasa la validacion
    guardarError(false);

    //una base
    let resultado = 2000;

    //obtener diferencia de años
    const diferencia = obtenerDiferenciaYear(year);

    //por cada año hay que restar 3%
    resultado -= (diferencia * 3 * resultado) / 100;

    //Americano 15%
    //Asiatico 5%
    //Europeo 30%

    resultado = calcularMarca(marca) * resultado;

    //Basico aumenta 20%
    //Completo 50%
    const incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    //total
    guardarResumen({
      cotizacion:resultado,
      datos
    });
  };

  return (
    <form onSubmit={cotizarseguro}>
      {error ? <Error>Hay campos vacios</Error> : null}

      <Campo>
        <Label>Marca</Label>
        <Select value={marca} name="marca" onChange={obtenerInfo}>
          <option value="">---Seleccionar---</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select value={year} name="year" onChange={obtenerInfo}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <ImputRadio
          checked={plan === "basico"}
          type="radio"
          name="plan"
          value="basico"
          onChange={obtenerInfo}
        />
        basico
        <ImputRadio
          checked={plan === "completo"}
          type="radio"
          name="plan"
          value="completo"
          onChange={obtenerInfo}
        />
        Completo
      </Campo>
      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};
