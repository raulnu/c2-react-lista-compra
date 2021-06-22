function App() {
  return (
    <>
      {/* index */}
      <header className="cabecera espaciado bloque-superior">
        <h1>Lista de la compra</h1>
        <nav>
          <ul className="navegacion">
            <li>
              <a href="principal">Principal</a>
            </li>
            <li className="actual">
              <a href="lista">Lista</a>
            </li>
            <li>
              <a href="acerca-de">Acerca de</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="home">
        <h2>Bienvenido a la lista de la compra</h2>
      </main>
      {/* formulario */}

      {/* <header className="cabecera espaciado bloque-superior">
        <h1>Lista de la compra</h1>
        <nav>
          <ul className="navegacion">
            <li>
              <a href="principal">Principal</a>
            </li>
            <li>
              <a href="lista">Lista</a>
            </li>
            <li>
              <a href="acerca-de">Acerca de</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="info espaciado bloque-superior">
        <i className="icono fas fa-minus-circle"></i>
        <p className="n-articulos">2/3 comprados</p>
      </section>
      <main className="principal espaciado">
        <h2 className="titulo-seccion">Editar artículo</h2>
        <form className="form-crear">
          <label htmlFor="nombre">Nombre:</label>
          <input className="control" type="text" id="nombre" />
          <label htmlFor="precio">Precio:</label>
          <div className="control-moneda">
            <input className="control" type="number" id="precio" /> €
          </div>
          <button className="enviar" type="submit">
            Modificar
          </button>
        </form>
      </main> */}

      {/* acerca de */}

      {/* <header className="cabecera espaciado bloque-superior">
        <h1>Lista de la compra</h1>
        <nav>
          <ul className="navegacion">
            <li>
              <a href="index">Principal</a>
            </li>
            <li className="actual">
              <a href="lista">Lista</a>
            </li>
            <li>
              <a href="acerca-de">Acerca de</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="acerca-de">
        <h2>Acerca de Lista de la compra</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia
          odio reiciendis vel architecto molestiae, saepe temporibus beatae
          perferendis iste quod excepturi, sit molestias assumenda? Officia
          dolorum similique placeat enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          eveniet, doloremque odit nobis accusamus distinctio autem architecto
          provident veritatis, odio, maiores deserunt repellat iure explicabo
          laboriosam pariatur exercitationem illum aspernatur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi,
          ullam inventore non, perspiciatis necessitatibus, quos error optio et
          dolor temporibus eaque voluptatum! Amet fugit, ad aspernatur minima
          sunt adipisci.
        </p>
      </main> */}

      {/* lista */}

      {/* <header className="cabecera espaciado bloque-superior">
        <h1>Lista de la compra</h1>
        <nav>
          <ul className="navegacion">
            <li>
              <a href="principal">Principal</a>
            </li>
            <li className="actual">
              <a href="lista">Lista</a>
            </li>
            <li>
              <a href="acerca-de">Acerca de</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="info espaciado bloque-superior">
        <i className="icono fas fa-plus-circle"></i>
        <p className="n-articulos">2/3 comprados</p>
      </section>
      <main className="principal espaciado">
        <ul className="articulos">
          <li className="articulo">
            <input type="checkbox" className="marcar" />
            <span className="nombre">Pan</span>
            <span className="precio">0.75€</span>
            <i className="borrar fas fa-times"></i>
          </li>
          <li className="articulo">
            <input type="checkbox" className="marcar" />
            <span className="nombre">Azúcar</span>
            <i className="borrar fas fa-times"></i>
          </li>
          <li className="articulo">
            <input type="checkbox" className="marcar" />
            <span className="nombre">Leche</span>
            <span className="precio">1.20€</span>
            <i className="borrar fas fa-times"></i>
          </li>
        </ul>
        <span className="precio-total">1.95€</span>
      </main> */}
    </>
  );
}

export default App;
