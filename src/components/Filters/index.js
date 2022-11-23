import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   SearchText,
//   statusFilterChange,
//   priorityChange,
// } from "../../ReduxHome/Action";
import filterSlice from "./FiltersReducerSlice";
const { Search } = Input;

export default function Filters() {
  // const {}
  const [text, setText] = useState();
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState([]);

  // const pr = useSelector((state) => state.filter.priority);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
    dispatch(filterSlice.actions.searchSelector(e.target.value));
  };

  const handleUpdateStatus = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
    // dispatch(statusFilterChange(e.target.value));
    dispatch(filterSlice.actions.statusFilterChange(e.target.value));
  };

  const handleUpdatePriority = (e) => {
    setPriority(e);
    // dispatch(priorityChange(e));
    dispatch(filterSlice.actions.priorityChange(e));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          value={text}
          onChange={(e) => handleChange(e)}
          placeholder="input search text"
        />
      </Col>

      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleUpdateStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>

      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>

        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={priority}
          onChange={handleUpdatePriority}
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
      </Col>
    </Row>
  );
}
