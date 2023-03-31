import Benefits from '../../components/Benefits';
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import Highlights from '../../components/Highlights';
import Rights from '../../components/Rights';
import { SectionBanner } from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <SectionBanner>
        <div>
          <h1>Aromas irresistíveis e sabores únicos.</h1>
          <p>
            Peça agora em nossa padaria virtual e sinta o sabor da nossa
            história em cada mordida!
          </p>
          <button>Ver produtos</button>
        </div>
      </SectionBanner>
      <Highlights />
      <Categories />
      <Benefits />
      <Rights />
    </>
  );
};

export default Home;
