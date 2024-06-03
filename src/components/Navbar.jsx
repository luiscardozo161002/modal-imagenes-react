function Navbar() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary p-2"
        data-bs-theme="dark">
          <a className="navbar-brand" href="#">  
            Cards | Aliens
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {/*<div className="navbar-nav d-flex align-items-center">
              <a className="nav-link active" aria-current="page" href="#">
                ¡Bienvenido!
              </a>
            </div>
            */}
          </div>
      </nav>
    );
  }
  
  export default Navbar;
  