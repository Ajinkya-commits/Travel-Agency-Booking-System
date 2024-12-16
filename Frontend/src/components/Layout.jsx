import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
