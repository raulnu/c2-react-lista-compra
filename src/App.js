import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { PaginaPrincipal } from "./paginas/PaginaPrincipal";
import { PaginaLista } from "./paginas/PaginaLista";
import { PaginaFormulario } from "./paginas/PaginaFormulario";
import { PaginaAcercaDe } from "./paginas/PaginaAcercaDe";
import { Cabecera } from "./components/Cabecera";
import { useEffect, useState } from "react";
import { ContextoGeneral } from "./contexts/ContextoGeneral";

function App() {
  // llamada API

  const urlAPI = "http://localhost:3001/articulos";
  const [arrayListado, setArrayListado] = useState([]);

  const llamadaAPI = async () => {
    const resp = await fetch(urlAPI);
    const datosResp = await resp.json();
    setArrayListado(datosResp);
  };
  useEffect(() => {
    llamadaAPI();
  }, []);

  return (
    <>
      <Router>
        <ContextoGeneral.Provider value={arrayListado}>
          <Cabecera />
          <Switch>
            <Route path="/principal" exact>
              <PaginaPrincipal />
            </Route>
            <Route path="/formulario" exact>
              <PaginaFormulario />
            </Route>
            <Route path="/acerca-de" exact>
              <PaginaAcercaDe />
            </Route>
            <Route path="/lista" exact>
              <PaginaLista arrayListado={arrayListado} />
            </Route>
            <Route path="/" exact>
              <Redirect to="/principal" />
            </Route>
          </Switch>
        </ContextoGeneral.Provider>
      </Router>
    </>
  );
}

export default App;
