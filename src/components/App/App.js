import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import CreateUserForm from "../CreateUserForm/CreateUserForm";
import Footer from "../Footer/Footer";
import InfoToolTip from "../InfoToolTip/InfoToolTip";

function App() {
  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState("");

  function handleInfoTooltipOpen() {
    setIsInfoTooltipOpen(true);
  }
  function handleCloseModal() {
    setIsInfoTooltipOpen(false);
  }

  function handleCreateUserSubmit(userData) {
    api
      .postNewUser(userData)
      .then(() => {
        setTooltipStatus("success");
        setIsInfoTooltipOpen(true);
      })
      .catch((err) => {
        console.error(`Error: ${err.status}`);
        setTooltipStatus("fail");
        setIsInfoTooltipOpen(true);
      });
  }

  useEffect(() => {
    api.getFormOptions().then((data) => {
      setOccupations(data.occupations);
      setStates(data.states);
    });
  }, []);

  return (
    <section className="page">
      <Footer />
      <CreateUserForm
        occupations={occupations}
        states={states}
        onCreateUserSubmit={handleCreateUserSubmit}
        infoTooltipOpen={handleInfoTooltipOpen}
      />
        <InfoToolTip
        status={tooltipStatus}
        isOpen={isInfoTooltipOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}

export default App;
