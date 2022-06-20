import styles from './App.module.scss';
import TreeView from './FileExplorer';

function App() {
  return (
    <div className={styles.App}>
      <TreeView/>
    </div>
  );
}

export default App;
