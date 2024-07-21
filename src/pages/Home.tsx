import Navbar from '../components/Navbar';
import About from '../components/About';

function Home() {
  return (
    <div className='flex dark:bg-dark_bg h-full'>
      <Navbar />
      <section >
        <About />
      </section>
      <section >
        <p>test</p>
      </section>
    </div>
  );
}

export default Home;