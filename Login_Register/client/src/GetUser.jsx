import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewPaciente() {
  const [paciente, getPaciente] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/paciente`, {
     
    })
      .then((response) => {
        getPaciente(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>View Paciente</h1>
      {paciente.map((pacienteItem, index) => (
        <div key={index}>
          <h2>Paciente {index + 1}</h2>
          <div>
            <strong>Identification:</strong> {pacienteItem.identification}
          </div>
          <div>
            <strong>Name:</strong> {pacienteItem.name}
          </div>
          <div>
            <strong>Last Name:</strong> {pacienteItem.lastName}
          </div>
          <div>
            <strong>Phone:</strong> {pacienteItem.phone}
          </div>
          <div>
            <strong>Birthday:</strong> {pacienteItem.birthday}
          </div>
          <div>
            <strong>Gender:</strong> {pacienteItem.gender}
          </div>
          <div>
            <strong>Email:</strong> {pacienteItem.email}
          </div>
          <div>
            <strong>Province:</strong> {pacienteItem.province}
          </div>
          <div>
            <strong>Canton:</strong> {pacienteItem.canton}
          </div>
          <div>
            <strong>District:</strong> {pacienteItem.distrit}
          </div>
          <div>
            <strong>Image:</strong> {pacienteItem.img}
          </div>
          <div>
            <strong>Role:</strong> {pacienteItem.role1}
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default ViewPaciente;
