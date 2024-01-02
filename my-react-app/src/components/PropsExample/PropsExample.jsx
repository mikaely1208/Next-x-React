import React, { Component } from 'react'
import { useState } from 'react';

// les composants react communiquent entre eux avec des props
// tout composants peut receveoir des props en paramètre
// les props sont des objets dont l'utilisation est similaire à celle des attributs HTML

export default function PropsExample({name, childonClickHandler}) {
    return (
  <>
    
      <div className='card'>{name}</div>
      <button onClick={() => {childonClickHandler('test');
      }}
      >yehh me!
      </button>
    
    <br/>
    <br/>
    <br/>
    <br/>

    {true && <div>wsh</div>}
    </>
    );
}
