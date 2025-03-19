import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TaskService } from './task/task.service';
import { TaskStatus } from './task/interfaces/task.interface';

async function bootstrap() {
  const validStatus = ['todo', 'in-progress', 'done'];
  const app = await NestFactory.create(AppModule);
  const taskService = app.get(TaskService);
  const args = process.argv.slice(2);
  const command = args[0];
  switch (command) {
    case 'add': {
      const description = args[1];
      if (!description) {
        console.error('The description is required');
        break;
      }
      const task = taskService.addTask(description);
      console.log(`Task added successfully (ID: ${task.id})`);
      break;
    }
    case 'update': {
      const id = args[1];
      const description = args[2];
      if (!description || !id) {
        console.error('The description or ID is required');
        break;
      }
      const task = taskService.updateTask(+id, description);
      if (task) {
        console.log(`Task updated (ID: ${task.id})`);
        break;
      } else {
        console.log(`Task not found`);
        break;
      }
    }
    case 'mark-done': {
      const doneTask = taskService.mark(+args[1], 'done');
      if (doneTask) {
        console.log('Marked as done');
      } else {
        console.log('Task not found');
      }
      break;
    }
    case 'mark-in-progress': {
      const doneTask = taskService.mark(+args[1], 'in-progress');
      if (doneTask) {
        console.log('Marked as in progress');
      } else {
        console.log('Task not found');
      }
      break;
    }
    case 'list': {
      const listType = args[1];
      if (!listType) {
        taskService.listAll();
        break;
      }
      const findList = validStatus.includes(listType);
      if (!findList) {
        console.log(
          'Invalid list type. Use: list todo, list done, list in-progress',
        );
        break;
      }
      taskService.list(listType as TaskStatus);
      break;
    }
    case 'delete': {
      const id = +args[1];
      if (!id) {
        console.error('The task ID is required.');
        break;
      }
      const deleted = taskService.deleteTask(id);
      if (deleted) {
        console.log(`Task with ID ${id} deleted successfully.`);
      } else {
        console.log(`Task not found.`);
      }
      break;
    }
    default:
      console.log('Command not found');
      break;
  }
  await app.close();
}
void bootstrap();
