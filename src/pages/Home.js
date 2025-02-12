import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";


function Home({ tasks, addTask }) {
  return (
    <div>
      <h1>To-Do List</h1>
      <TaskList tasks={tasks} addTask={addTask}/>
    </div>
  );
}

export default Home;
