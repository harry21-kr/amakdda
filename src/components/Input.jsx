const Input = ({ value, placeholder, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: 160,
        height: 36,
        paddingLeft: 8,
        border: "none",
        borderRadius: 6,
        outline: "none",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    />
  );
};

export default Input;
