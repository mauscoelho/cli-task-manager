import { Command } from 'commander';
import TaskManager from './taskManager';

const program = new Command();
const taskManager = new TaskManager();

program
  .version('1.0.0')
  .description('Simple Task Management System');

program
  .command('add <title> <description>')
  .description('Add a new task')
  .action((title, description) => {
    taskManager.addTask(title, description);
  });

program
  .command('list')
  .description('List all tasks')
  .action(() => {
    taskManager.listTasks();
  });

program
  .command('complete <id>')
  .description('Mark a task as completed')
  .action((id) => {
    taskManager.completeTask(parseInt(id));
  });


program.parse(process.argv);
