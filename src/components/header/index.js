class Header extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <header style="width: 300px;margin-left: auto;margin-right: auto;text-align: center;">
            <p><img width="50%" height="50%" src="assets/imagens/logo.png" /></p>
            <h1>Bem Vindo!</h1>
        </header>
      `;
  }
}

customElements.define("header-app", Header);
