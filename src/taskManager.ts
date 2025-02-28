import fs from 'fs-extra';
import path from 'path';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TASKS_FILE = path.join(__dirname, 'tasks.json');

export default class TaskManager {
  private tasks: Task[] = [];

  constructor() {
    this.loadTasks();
  }

  private loadTasks() {
    if (fs.existsSync(TASKS_FILE)) {
      const data = fs.readFileSync(TASKS_FILE, 'utf-8');
      this.tasks = JSON.parse(data);
    }
  }

  private saveTasks() {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(this.tasks, null, 2));
  }

  addTask(title: string, description: string) {
    const newTask: Task = {
      id: this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1,
      title,
      description,
      completed: false
    };
    this.tasks.push(newTask);
    this.saveTasks();
    console.log(`Task added: ${title}`);
  }

  listTasks() {
    this.tasks.forEach(task => {
      console.log(`[${task.completed ? 'x' : ' '}] ${task.id}. ${task.title} - ${task.description}`);
    });
  }

  completeTask(id: number) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = true;
      this.saveTasks();
      console.log(`Task completed: ${task.title}`);
    } else {
      console.log(`Task not found: ${id}`);
    }
  }

  removeTask(id: number) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex > -1) {
      const removedTask = this.tasks.splice(taskIndex, 1);
      this.saveTasks();
      console.log(`Task removed: ${removedTask[0].title}`);
    } else {
      console.log(`Task not found: ${id}`);
    }
  }
}
