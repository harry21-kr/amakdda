const Button = ({ type, value, onClick, disabled = false, color }) => {
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 120,
        height: 40,
        border: "none",
        borderRadius: 6,
        background: color,
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        cursor: "pointer",
        fontSize: 18,
      }}
    >
      {value}
    </button>
  );
};

export default Button;
