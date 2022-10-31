// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss';
import NxWelcome from './nx-welcome';
import List from "./list/list";

export function App() {
  return (
    <>
      <div className='wrapper'>
        <div className="list">
          <List />
        </div>
      </div>
    </>
  );
}

export default App;
