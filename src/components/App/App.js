import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import CreateUserForm from "../CreateUserForm/CreateUserForm";
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

  function handleCreateUserSubmit({ newUserData }) {
    api
      .postNewUser({ newUserData })
      .then((res) => {
        setTooltipStatus("success");
        setIsInfoTooltipOpen(true);
      })
      .catch(() => {
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
