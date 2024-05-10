const Header = () => {
  return (
    <header
      style={{
        width: "100vw",
        height: 80,
        borderBottom: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1220,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: 24, fontWeight: "bold" }}>amakdda</h1>
        <p>아 맞다! 하지말고 기록하세요.</p>
      </div>
    </header>
  );
};

export default Header;
