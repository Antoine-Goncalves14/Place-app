import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

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
    <NewGoal />
    <GoalList goals={courseGoals} />
  </div>
}

export default App;
