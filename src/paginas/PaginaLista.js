import { Lista } from "../components/Lista";

export const PaginaLista = (props) => {
  const { arrayListado } = props;
  return <Lista arrayListado={arrayListado} />;
};
