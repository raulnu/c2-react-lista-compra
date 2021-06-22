import { FaPlusCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Elemento } from "./Elemento";

export const Lista = (props) => {
  const { arrayListado } = props;
  return (
    <>
      <section className="info espaciado bloque-superior">
        <i className="icono">
          <NavLink to="/formulario">
            <FaPlusCircle />
          </NavLink>
        </i>
        <p className="n-articulos">2/3 comprados</p>
      </section>
      <main className="principal espaciado">
        <ul className="articulos">
          {arrayListado.map((elemento) => (
            <Elemento key={elemento.id} elemento={elemento} />
          ))}
        </ul>
        <span className="precio-total">1.95€</span>
      </main>
    </>
  );
};
