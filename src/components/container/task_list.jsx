import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { TaskM } from '../../models/task.class';
import TaskComponent from '../pure/task';



const TaskListComponent = () => {

    const defaultTask = new TaskM('Example', 'default description', false, LEVELS.NORMAL)

    return (
        <div>
            <div>
                Your tasks:
            </div>
            {/* TODO: Aplicar un for/map para renderizar multiples tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};




export default TaskListComponent;
