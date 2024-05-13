const ListBox = ({ children }) => {
  return (
    <div
      style={{
        width: 320,
        height: 200,
        borderRadius: 12,
        display: "flex",
        flexShrink: 0,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 24,
        backgroundColor: "white",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      {children}
    </div>
  );
};

export default ListBox;
