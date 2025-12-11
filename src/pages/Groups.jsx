import React from 'react';
import { useSelector } from 'react-redux';

const Groups = () => {
  const groups = useSelector((state) => state.groups.groups);

  return (
    <div>
      <h2>Groupes</h2>
      <p>Liste des groupes de l’établissement.</p>

      <table className="table-basic">
        <thead>
          <tr>
            <th>Code</th>
            <th>Filière</th>
            <th>Niveau</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((g) => (
            <tr key={g.id}>
              <td>{g.code}</td>
              <td>{g.filiere}</td>
              <td>{g.niveau}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Groups;
