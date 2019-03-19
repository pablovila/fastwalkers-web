import Head from "next/head";
import { Link } from "../routes";
import "../styles/styles.scss";

export default ({ children }) => {
  const toggleStyles = () => {
    document.querySelector("#burger").classList.toggle("is-active");
    document.querySelector("#navbarmenu").classList.toggle("is-active");
  };

  return (
    <div>
      <Head>
        <title>FastWalkers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link prefetch href="/">
                <a className="navbar-item">
                  <img src="/static/fastwalkers.png" />
                </a>
              </Link>
              <a
                id="burger"
                onClick={toggleStyles}
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarmenu"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div id="navbarmenu" className="navbar-menu">
              <div className="navbar-start">
                <Link prefetch href="/">
                  <a className="navbar-item">Home</a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="section">
        <div className="container">{children}</div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <span>Pablo Vila - {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
};
