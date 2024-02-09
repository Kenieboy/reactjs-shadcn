import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const { toast } = useToast();

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    } else {
      alert("Please input task field!");
    }
  };

  return (
    <div className="bg-green-400 h-screen flex items-center justify-center ">
      <div className="bg-white rounded-lg w-1/2 overflow-hidden">
        <h1 className="font-bold mb-10 bg-indigo-400 p-4 text-white">
          Todo List
        </h1>

        <div className="p-10">
          <div className="flex gap-2">
            <Input
              type="text"
              value={newTask}
              onChange={handleChange}
              placeholder="Add New Task"
            />
            <Button onClick={addTask}>Add Task</Button>
            <Button
              onClick={() => {
                console.log("toast");
              }}
            >
              Show Toast
            </Button>
          </div>

          <div className="mt-10">
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
