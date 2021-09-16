import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "./hooks/useTypedSelector";
import { fetchData } from "./store/action-creators";

import './App.css';
import { DataItem } from "./types";
import { Card } from "./components/Card";


function App() {
  const { data, loading, error } = useTypeSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div >Loading...</div>;
  if (error) return <div>{error}</div>

  return (
    <div className="App">
      <div className="Layout">
      {data.map((el:DataItem) =>
         <Card data={el} key={el.id}/>
      )}
     </div>
    </div>
    );
}

export default App;

