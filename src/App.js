import './App.css';
import GoalList from './components/GoalList';

const App = () => {
  const courseGoals = [{
    id: "cg1",
    text: "Finish the course"
  },
  {
    id: "cg2",
    text: "Learn all about the course"
  },
  {
    id: "cg3",
    text: "Help other"
  }];

  return <div className='course-goals'>
    <h2>Course goals</h2>
    <GoalList goals={courseGoals} />
  </div>
}

export default App;
