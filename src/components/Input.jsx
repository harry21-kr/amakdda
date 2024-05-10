const Input = ({ title, onChange }) => {
  return (
    <input
      type="text"
      value={title}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
