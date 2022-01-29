import React from "react";
import CheckBox from "./Checkbox";

const TaskList = props => {
    const { list, setList } = props;

    const onChangeStatus = e => {
        const { name, checked } = e.target;
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList)
    };

    const onClickRemoveItem = e => {
        const updateList = []
        setList(updateList);
    };

    const chk = list.map(item => (
        <CheckBox key={item.id} date={item} onChange={onChangeStatus} />
    ));

    return(
        <div className="todo-list">
            {list.length ? chk : "Sin tareas"}
            {list.length ? (
                <p>
                    <button className="button blue" onClick={onClickRemoveItem}>
                        Eliminar Todo
                    </button>
                </p>
            ) : null}
        </div>
    );
};

export default TaskList;