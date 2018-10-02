import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = ({ name, onChange, value, type, error }) => {
  const Name = name.slice(0, 1).toUpperCase() + name.slice(1);
  type = name === "name" ? type : name;
  let className = "form-control form-control-lg";
  if (error) className += " is-invalid";
  return (
    <div className="form-group">
      <label htmlFor={name}>{Name}</label>
      <input
        type={type}
        className={className}
        placeholder={`Enter ${Name}`}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  erros: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: "text"
};
export default TextInputGroup;
