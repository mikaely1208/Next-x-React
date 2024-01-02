import React, { useState, useEffect } from 'react';
import styles from './profil.module.css';

export default function Profil() {
  const [name, setName] = useState('Mika');
  const [age, setAge] = useState(20);
  const [isEditing, setIsEditing] = useState(false);
  const [profilePic, setProfilePic] = useState('');

  const handleUpdate = () => {
    setIsEditing(true); 
  };

  const handleSave = (e) => {
    e.preventDefault();
    // je met à jour les infos user
    setIsEditing(false);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    // je met à jour l'image de profil
    // File reader permet de lire un fichier et de le convertir pr qu'il soit utilisable par le navigateur
    const reader = new FileReader();

    reader.onload = (event) => {
      setProfilePic(event.target.result);
      localStorage.setItem('profilePic', event.target.result); // cette ligne permet de sauvegarder l'image dans le localStorage
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const savedProfilePic = localStorage.getItem('profilePic'); // j'essaye d'utilser le localStorage pour récupérer sauvegarder l'image au refresh
    if (savedProfilePic) {
      setProfilePic(savedProfilePic);
    }
  }, []); 

  return (
    <div className={styles.card}>
      <div className={styles.profilePicContainer}>
        {isEditing && (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              disabled={!isEditing}
            />
            {profilePic && (
              <img src={profilePic} alt="photo" className={styles.profilePic} />
            )}
          </>
        )}
        {!isEditing && profilePic && (
          <img src={profilePic} alt="photo" className={styles.profilePic} />
        )}
      </div>
      <form onSubmit={handleSave}>
        <label>
          Name : 
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
            />
          ) : (
            <span> {name}</span>
          )}
        </label>
        <br />
        <label>
          Age :
          {isEditing ? (
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              disabled={!isEditing}
            />
          ) : (
            <span> {age}</span>
          )}
        </label>
        <br />
        {isEditing ? (
          <>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <button type="button" onClick={handleUpdate}>
            Edit
          </button>
        )}
      </form>
    </div>
  );
}