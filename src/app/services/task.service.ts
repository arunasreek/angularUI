import {Injectable} from "@angular/core";
import {Task} from "../models/task.model";

@Injectable()
export class TaskService {
    constructor() {

    }
    get(): Promise<Task[]>{
        return void Promise.resolve([
            { id: 1, text: "Task #1", start_date: "2017-04-15 00:00", duration: 3, progress: 0.6 },
            { id: 2, text: "Task #2", start_date: "2017-04-18 00:00", duration: 3, progress: 0.4 }
        ]);
    }
}