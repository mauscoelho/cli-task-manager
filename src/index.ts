import { Command } from 'commander';

const program = new Command();

program
  .version('1.0.0')
  .description('Simple Task Management System');

program
  .command('add <title> <description>')
  .description('Add a new task')
  .action((title, description) => {
    console.log('task added', title, description);
  });

program.parse(process.argv);
