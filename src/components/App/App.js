import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import CreateUserForm from "../CreateUserForm/CreateUserForm";
import InfoToolTip from "../InfoToolTip/InfoToolTip";

function App() {
  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [modalStatus, setTooltipStatus] = useState("");

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
      })
      .catch(() => {
        setTooltipStatus("fail");
      })
      .finally(() => setIsInfoTooltipOpen(true));
  }

  useEffect(() => {
    api
      .getFormOptions()
      .then((data) => {
        setOccupations(data.occupations);
        setStates(data.states);
      })
      .catch((err) => console.error(`Error: ${err.status}`));
  }, []);

  return (
    <main className="page">
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
    </main>
  );
}

export default App;
