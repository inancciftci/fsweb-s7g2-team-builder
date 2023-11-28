import { useState } from "react";
import Form from "./components/Form";
import TeamList from "./components/TeamList";

function App() {
  const [teamList, setTeamList] = useState([
    {
      name: "İsim",
      email: "Email",
      role: "Rol",
    },
  ]);

  // const [duzenlenecekUye, setDuzenlenecekUye] = useState(null);
  return (
    <div className="App">
      <div>
        <h2>Team List</h2>
        <TeamList teamList={teamList} />
      </div>
      <Form teamList={teamList} setTeamList={setTeamList} />
    </div>
  );
}

export default App;
