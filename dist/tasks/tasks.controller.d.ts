import { Task } from './tasks.model';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(title: string, description: string): Task;
    deleteTask(id: string): void;
    updateTaskIsDone(id: string, isDone: boolean): Task;
    updateTaskIsDeleted(id: string, isDeleted: boolean): Task;
}
