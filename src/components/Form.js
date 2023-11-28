import React, { useState } from "react";

export default function Form({ teamList, setTeamList }) {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: "",
  });
  const changeHandler = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTeamList([...teamList, { ...member, id: teamList.length + 1 }]);
  };
  return (
    <div>
      <form action="addNewMember" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">İsim: </label>
          <input onChange={changeHandler} type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input onChange={changeHandler} type="email" name="email" />
        </div>
        <div>
          <label htmlFor="role">Rol: </label>
          <input onChange={changeHandler} type="text" name="role" />
        </div>
        <button>Ekle</button>
      </form>
    </div>
  );
}
