// src/CustomTextfield.jsx

import React from 'react';

const CustomTextField = ({ label, placeholder, onChange }) => {
    return (
        <div>
            <label>{label}</label> 
            <input type="text" placeholder={placeholder} onChange={onChange} />
        </div>
    );
};

export default CustomTextField;

// Label: Der Text für Label des Eingabefeldes
// placeholder: Der Text, der als Platzhalter im Eingabefeld angezeigt wird
// onChange: Eine Funktion, die beim Ändern des Eingabefeldes ausgeführt wird