import './App.css';
import './component/component.css';
import { PageHeader } from './component/PageHeader';
import { Post } from './component/Post';
import {Box} from './component/Box';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Post />
      <Box />

      <Post />
      <Post />
      <Post />
      <Post />



    </div>
  );
}

export default App;
