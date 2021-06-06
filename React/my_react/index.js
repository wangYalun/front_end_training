/**
 * 简单模拟一个React
 */
const ReactDOM = {
  render(component, wrapper) {
    wrapper.appendChild(component._render(wrapper));
  },
};

class Component {
  constructor(props = {}) {
    this.props = props;
  }
  createDOM(domString) {
    const div = document.createElement("div");
    div.innerHTML = domString;
    return div;
  }

  changeDOM() {
    const oDOM = this.dom;
    this.dom = this._render();
    this.wrapper.insertBefore(this.dom, oDOM);
    this.wrapper.removeChild(oDOM);
  }
  setState(state) {
    this.state = state;
    this.changeDOM();
  }
  _render(wrapper) {
    if (wrapper) {
      this.wrapper = wrapper;
    }
    this.dom = this.createDOM(this.render());
    this.dom.addEventListener("click", () => this.handleAdd(), false);
    return this.dom;
  }
}

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "allen",
      num: 1,
    };
  }
  render() {
    return `<button id="button">${this.state.num}</button>`;
  }
}

ReactDOM.render(
  new AddButton({ name: "allen" }, document.getElementById("root"))
);
