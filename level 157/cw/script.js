import React from 'react';

const Child = ({ onCustomClick }) => (
  <button onClick={onCustomClick}>დამაჭირე</button>
);

const Parent = () => {
  const handleClick = () => alert("გამარჯობა!");

  return (
    <div>
      <Child onCustomClick={handleClick} />
    </div>
  );
};

export default Parent;