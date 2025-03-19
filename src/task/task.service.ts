import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { Task, TaskStatus } from './interfaces/task.interface';

@Injectable()
export class TaskService {
  private readonly filePath = './task.json';

  private readTask(): Task[] {
    if (!existsSync(this.filePath)) return [];
    const taskBuffer = readFileSync(this.filePath, 'utf-8');
    return JSON.parse(taskBuffer) as Task[];
  }

  private writeTasks(task: Task[]): void {
    writeFileSync(this.filePath, JSON.stringify(task, null, 2));
  }

  addTask(description: string): Task {
    const task = this.readTask();
    const newTask: Task = {
      id: task.length ? task[task.length - 1].id + 1 : 1,
      status: 'todo',
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    task.push(newTask);
    this.writeTasks(task);
    return newTask;
  }

  mark(id: number, status: TaskStatus): Task | undefined {
    const tasks = this.readTask();
    const task = tasks.find((t) => t.id === id);
    if (!task) return undefined;
    if (task.status === status) {
      return task;
    }
    task.status = status;
    task.updatedAt = new Date();
    this.writeTasks(tasks);
    return task;
  }

  list(status: TaskStatus): void {
    const tasks = this.readTask();
    const todos = tasks.filter((task) => task.status === status);
    if (todos.length === 0) {
      console.log('No pending tasks.');
      return;
    }
    console.log('Pending Tasks:');
    todos.forEach((task) => {
      console.log(
        `- [ID: ${task.id}] ${task.description} (Created: ${task.createdAt.toString()})`,
      );
    });
  }

  updateTask(id: number, description: string): Task | undefined {
    const tasks = this.readTask();
    const taskIndex = tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      console.error(`Task with ID ${id} not found.`);
      return undefined;
    }
    tasks[taskIndex] = {
      ...tasks[taskIndex],
      description,
      updatedAt: new Date(),
    };
    this.writeTasks(tasks);
    return tasks[taskIndex];
  }

  deleteTask(id: number): boolean {
    const tasks = this.readTask();
    const initialLength = tasks.length;
    const filteredTasks = tasks.filter((t) => t.id !== id);
    if (filteredTasks.length === initialLength) {
      console.error(`Task with ID ${id} not found.`);
      return false;
    }
    this.writeTasks(filteredTasks);
    console.log(`Task with ID ${id} deleted successfully.`);
    return true;
  }
  listAll(): void {
    const tasks = this.readTask();
    if (tasks.length === 0) {
      console.log('No tasks available.');
      return;
    }

    console.log('All Tasks:');
    tasks.forEach((task) => {
      console.log(
        `- [ID: ${task.id}] ${task.description} [${task.status}] (Created: ${task.createdAt.toString()})`,
      );
    });
  }
}
