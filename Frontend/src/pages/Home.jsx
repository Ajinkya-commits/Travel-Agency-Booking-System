// Home.js
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full text-slate-300 font-bold">
          <div className="w-[60vw] space-y-4">
            <div className="text-3xl  md:text-5xl font-bold">
              Discover the Wonders of the World with Our Expertly Curated
              Packages
            </div>
            <div className="ubuntu-medium md:text-xl">
              Whether it's a weekend getaway or a dream vacation, our
              budget-friendly options ensure you can travel without breaking the
              bank
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
