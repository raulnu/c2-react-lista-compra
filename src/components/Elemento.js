import { FaTimes } from "react-icons/fa";

export const Elemento = (props) => {
  const { elemento } = props;
  return (
    <li className="articulo">
      <input type="checkbox" className="marcar" value={elemento.comprado} />
      <span className="nombre">{elemento.nombre}</span>
      <span className="precio">{elemento.precio}</span>
      <i className="borrar">
        <FaTimes />
      </i>
    </li>
  );
};
