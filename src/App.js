import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Base from './Template/Base';
import TaskManager from './Template/TaskManager';
import NotepadManager from './Template/Note';
 
function App() {
  return (
<Router>
<Routes>
<Route path="/" element={<Base />} />
<Route path="/task-manager" element={<TaskManager />} />
<Route path="/notepad-manager" element={<NotepadManager />} />
</Routes>
</Router>
  );
}
 
export default App;