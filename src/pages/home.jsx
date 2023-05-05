import homeStyle from "@/styles/HomeView.module.css";
import MenuBar from "@/components/MenuBar/MenuBar";

const Home = () => {
  return (
    <div className={`${homeStyle.homeView}`}>
      <MenuBar />
    </div>
  );
};

export default Home;
