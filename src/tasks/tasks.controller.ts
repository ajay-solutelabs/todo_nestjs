import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { title } from 'process';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(@Body('title') title: string, @Body('description') description: string): Task{
        return this.tasksService.createTask(title,description);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id:string): void{
        this.tasksService.deleteTask(id);
    }

    @Patch('/:id/isDone')
    updateTaskIsDone(@Param('id') id: string, @Body('isDone') isDone: boolean): Task {
        return this.tasksService.updateIsDone(id,isDone);
    }

    @Patch('/:id/isDeleted')
    updateTaskIsDeleted(@Param('id') id: string, @Body('isDeleted') isDeleted: boolean): Task {
        return this.tasksService.updateIsDeleted(id,isDeleted);
    }
}
