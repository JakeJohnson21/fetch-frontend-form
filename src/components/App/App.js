import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import Modal from "../Modal/Modal";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CreateUserForm from "../CreateUserForm/CreateUserForm";

function App() {
  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState("");
  const [buttonIsClicked, setButtonIsClicked] = useState(false);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleCreateUserSubmit(userData) {
    api
      .postNewUser(userData)
      // POST successful
      .then(() => {
        setButtonIsClicked(true);
        setModalStatus("success");
      })
      // POST fail
      .catch(() => {
        setButtonIsClicked(true);
        setModalStatus("fail");
      })
      // Either way open modal
      .finally(() => setIsModalOpen(true));
  }

  useEffect(() => {
    api
      .getFormOptions()
      .then((data) => {
        // GET states / occupations
        setIsModalOpen(false);
        setOccupations(data.occupations);
        setStates(data.states);
      })
      // Modal only opens if cannot GET
      .catch(() => setModalStatus("load"), setIsModalOpen(true));
  }, []);

  return (
    <main className="page">
      <Header />
      <CreateUserForm
        occupations={occupations}
        states={states}
        buttonClicked={buttonIsClicked}
        onCreateUserSubmit={handleCreateUserSubmit}
      />
      <Footer />
      <Modal
        status={modalStatus}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}

export default App;
