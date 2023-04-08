import '../styles/index.scss';
import Main from "../components/Main";
import Banner from '../components/HomeBanner/Banner';
import Apartment from "../components/Apartment/Apartment";

function HomePage() {
  return (
    <div>
      <Main>
        <Banner/>
        <Apartment/>
      </Main>
    </div>
  );
}

export default HomePage;
