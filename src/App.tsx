import "./App.css";
import Home from "./home/Home";
import Layout from "./layout/Layout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">
          Please upload a CSV file from your device
        </h2>
        <Home />
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default App;
