import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import todoSlice, { AddToDos } from "./TodoSlice";
import { v4 as uuidv4 } from "uuid";
import { getToDoBySelect, todoList as td } from "../../ReduxHome/selection";
export default function TodoList() {
  const dispatch = useDispatch();
  const todolist = useSelector(getToDoBySelect);
  // const todo1 = useSelector(td);
  // console.log("danh sach todo:, ", todo1);
  const [todo, setTodo] = useState({
    id: uuidv4(),
    name: "",
    prioriry: "Medium",
    complete: false,
  });

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todolist.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.prioriry}
            complete={todo.complete}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            name="name"
            value={todo.name}
            onChange={(e) => handleChange(e)}
          />

          <Select
            value={todo.prioriry}
            defaultValue="Medium"
            onChange={(e) => setTodo({ ...todo, prioriry: e })}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button
            type="primary"
            onClick={() => {
              // dispatch(AddTodo(todo));
              dispatch(todoSlice.actions.add(todo));
              // dispatch(AddToDos(todo));
              setTodo({
                id: uuidv4(),
                name: "",
                prioriry: "Medium",
                complete: false,
              });
            }}
          >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
