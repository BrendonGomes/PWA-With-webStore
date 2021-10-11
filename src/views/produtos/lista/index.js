class Produtos extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["estados"];
  }

  set state(v) {
    this.setAttribute("estados", v);
  }

  get state() {
    return JSON.parse(this.getAttribute("estados"));
  }

  async connectedCallback() {
    fetch("https://api.github.com/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.state = JSON.stringify(res);
      });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <header-app></header-app>
    <table style="width:100%;">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        ${Object.keys(this.state).map(item => `
            <tr>
                <tr></th>
                <tr>${item}</th>
                <tr></th>
                <tr></th>
                <tr></th>
            </tr>
        `)}
        </tbody>
    </table>
    <footer-app></footer-app>
    `;
  }
}

customElements.define("produtos-list", Produtos);
