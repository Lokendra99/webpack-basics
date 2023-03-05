import './button.css';

class Button {
  buttonCheck = 'btn-wrapper';
  render() {
    const Btn = document.createElement("button");
    Btn.innerText = "Click qwqwqwqMe!";
    Btn.classList = this.buttonCheck;
    Btn.onclick = function () {
      alert("Yesshyghghs");
    };
    const body = document.querySelector("body");
    body.appendChild(Btn);
  }
}
export default Button;
