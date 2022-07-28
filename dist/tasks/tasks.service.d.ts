import { Task } from './tasks.model';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(title: string, description: string): Task;
    deleteTask(id: string): void;
    updateIsDone(id: string, isDone: boolean): Task;
    updateIsDeleted(id: string, isDeleted: boolean): Task;
}
