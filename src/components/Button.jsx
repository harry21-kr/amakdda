const Button = ({ value, onClick, disabled = false }) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
};

export default Button;
