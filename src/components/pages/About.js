import React from "react";

export default props => {
  const { id } = props.match.params;
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
      <p className="lead">Simple application to manage Contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
      {id && <p className="text-secondary">About {id}</p>}
    </div>
  );
};
