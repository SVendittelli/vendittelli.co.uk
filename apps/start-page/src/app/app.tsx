import { Box } from 'dracula-ui';
import 'dracula-ui/styles/dracula-ui.css';
import styles from './app.module.scss';
import Search from './search/search';

function App() {
  return (
    <Box className={styles['container']} height="full" width="full">
      <Search />
    </Box>
  );
}

export default App;
