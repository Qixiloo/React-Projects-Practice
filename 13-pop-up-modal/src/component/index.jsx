import { useState } from "react";
import Modal from "./modal";
import "./style.css";

export default function CustomerModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleIsOpen() {
    setIsOpenModal(!isOpenModal);
  }

  function handleOnClose() {
    setIsOpenModal(false);
  }

  return (
    <div>
      {!isOpenModal && (
        <button className="button" onClick={handleIsOpen}>
          Click Me!
        </button>
      )}

      {isOpenModal ? (
        <Modal  header={<h1>New header</h1>} onClose={handleOnClose} />
      ) : null}
    </div>
  );
}
