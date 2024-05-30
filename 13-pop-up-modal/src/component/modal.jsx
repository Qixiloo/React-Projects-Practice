import "./style.css";

export default function Modal({ header, body, footer, onClose }) {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="header">
          {header ? header : <h1 style={{textAlign:'center',  flexGrow:1}}>This is title</h1>}
          <span className="close" onClick={onClose}>
            +
          </span>
        </div>

        <div className="body">{body ? body : <p> This is text</p>}</div>
        <div className="footer">{footer ? footer : <h1>This is title</h1>}</div>
      </div>
    </div>
  );
}
