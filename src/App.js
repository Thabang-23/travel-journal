import data from './data'
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        imageUrl={item.imageUrl}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section>
        {cards}
      </section>
    </div>
  );
}

export default App;
