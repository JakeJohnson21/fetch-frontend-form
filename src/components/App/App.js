import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import CreateUserForm from "../CreateUserForm/CreateUserForm";
import Modal from "../Modal/Modal";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function App() {
  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState("");

  function handleModalOpen() {
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleCreateUserSubmit(userData) {
    api
      .postNewUser(userData)
      .then(() => setModalStatus("success"))
      .catch(() => setModalStatus("fail"))
      .finally(() => setIsModalOpen(true));
  }

  useEffect(() => {
    api
      .getFormOptions()
      .then((data) => {
        setIsModalOpen(false);
        setOccupations(data.occupations);
        setStates(data.states);
      })
      .catch(() => setModalStatus("load"), setIsModalOpen(true));
  }, []);

  return (
    <main className="page">
      <Header />
      <CreateUserForm
        getByTestId="form"
        occupations={occupations}
        states={states}
        onCreateUserSubmit={handleCreateUserSubmit}
        isModalOpen={handleModalOpen}
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
