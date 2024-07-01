# Task Management System

## Description
A simple command-line task management system built with Node.js and TypeScript.

## Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd cli-task-manager
```

2. Install the dependencies:
```bash
npm install
```

## Usage

Add a Task
```bash
npx ts-node src/index.ts add "Title" "Description"
```

List All Tasks
```bash
npx ts-node src/index.ts list
```

Complete a Task
```bash
npx ts-node src/index.ts complete <id>
```

Remove a Task
```bash
npx ts-node src/index.ts remove <id>
```

## Design Decisions
- Used commander for CLI handling.
- Tasks are persisted in a JSON file using fs-extra.
- TypeScript ensures type safety and improved code quality.
- Keep it simple and minimalistic.

## Future improvements
- Own error handling mechanism.
- Modular code structure for better maintainability
- Add tests
