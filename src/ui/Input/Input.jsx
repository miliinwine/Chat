import React from "react";

export const Input = ({ className, placeholder, name, onChange, value}) => {
  return <input onChange={onChange} value={value} name={name} className={className} placeholder={placeholder} type="text"></input>;
};
