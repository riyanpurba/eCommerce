import { title } from "process";
import Layout from "../components/Layout";

const HomePage = () => {
  const meta = {
    title: "Shop Smart",
    description: "Shop Smart is a shopping app that helps you save money and time."
  }
  return (
    <Layout meta={meta}>
      <h1>Shop Smart</h1>
    </Layout>
  );
}

export default HomePage;