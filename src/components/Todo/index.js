import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import todoSlice from "../TodoList/TodoSlice";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ id, name, prioriry, complete }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(complete);
  const toggleCheckbox = () => {
    setChecked(!checked);
    // dispatch({
    //   type: "TodoList/update",
    //   payload: { id: id, name: name, prioriry: prioriry, complete: !checked },
    // });
    dispatch(
      todoSlice.actions.update({
        id: id,
        name: name,
        prioriry: prioriry,
        complete: !checked,
      })
    );
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
