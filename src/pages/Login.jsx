// src/pages/Login.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('Mustapha');
  const [role, setRole] = useState('formateur');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        id: 1,
        name,
        role,
      })
    );
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">OFPPT AL MAJD</h1>
        <p className="login-subtitle">Système de gestion des absences</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom / Prénom</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Entrez votre nom"
              required
            />
          </div>

          <div className="form-group">
            <label>Rôle</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Administrateur</option>
              <option value="scolarite">Scolarité</option>
              <option value="formateur">Formateur</option>
              <option value="stagiaire">Stagiaire</option>
            </select>
          </div>

          <button type="submit" className="btn-primary full-width">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
