import React from 'react';

export const renderInput = ({input, label, type, meta: {touched, error}, disabled}) => (
    <div className="form-group">
        <label>{label}:</label>
        <input {...input} className="form-control" disabled={disabled} type={type}/>
        {touched && error && <span className="text-danger">{error}</span>}
    </div>
);

export const renderTextArea = ({input, label, type, meta: {touched, error}}) => (
    <div className="form-group">
        <label>{label}:</label>
        <textarea {...input} className="form-control"/>
        {touched && error && <span className="text-danger">{error}</span>}
    </div>
);
