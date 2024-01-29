import { FormEvent, useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

const App = () => {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (true) {
      handleModalClose();
    }
  };

  return (
    <Container>
      <div className=" relative h-screen w-full flex justify-center items-center">
        <Button onClick={() => setModal((prev) => !prev)}>Opne Modal</Button>
        <Modal isOpne={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h1>THis is modal title</h1>
            <Modal.CloseButton />
          </Modal.Header>
          <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">submit</button>
          </form>
          <p>THis is a Modal</p>
        </Modal>
      </div>
    </Container>
  );
};

export default App;
