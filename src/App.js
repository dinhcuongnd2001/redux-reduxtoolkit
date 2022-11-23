import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { useSelector, useDispatch } from "react-redux";
const { Title } = Typography;

function App() {
  // console.log(store);
  // const dispatch = useDispatch();
  // const count = useSelector((state) => {
  //   console.log(state);
  //   return state.value;
  // });
  return (
    <div
      style={{
        position: "relative",
        top: "35px",
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
