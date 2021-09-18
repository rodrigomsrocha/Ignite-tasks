import { Toaster } from "react-hot-toast";
import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";
import "./styles/global.scss";

export function App() {
  return (
    <>
      <Toaster />
      <Header />
      <TaskList />
    </>
  );
}
