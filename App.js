import './App.css';
import TodoItem from './TodoItem'
import Header from './Header'
import Footer from './Footer'
import SayHello from './Hello'
import ContactCard from './ContactCard'
import Joke from './Joke'

function App() {
 const jokeComponent = <Joke id="1" question="What" punchLine="something" />

  return (
    <div>
      <Header motto="Today is a good day"/>
      <SayHello />
      <div className="todo-list">
      <TodoItem />
      {jokeComponent}
      <ContactCard 
        src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg"
        name="Mr Whiskerson"
        phone="123-123-1234"
      />
      </div>
      <Footer />
    </div>
  );
}

export default App;
