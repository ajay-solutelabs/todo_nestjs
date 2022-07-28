import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';
import { v4 as uuid} from 'uuid'; 

@Injectable()
export class TasksService {
    private tasks = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find((task) => task.id === id);
    }

    createTask(title: string, description: string): Task {
        const task: Task = {
            id: uuid(),
            title,
            description,
            isDone: false,
            isDeleted: false,
        }

        this.tasks.push(task);
        return task;
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    updateIsDone(id: string, isDone: boolean) {
        const task = this.getTaskById(id);
        task.isDone = isDone;
        return task;
    }

    updateIsDeleted(id: string, isDeleted: boolean) {
        const task = this.getTaskById(id);
        task.isDeleted = isDeleted;
        return task;
    }
}
