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

program.parse(process.argv);
