import { Header, SplashScreen } from '@vendittelli/common-ui';
import { useState } from 'react';

export function App() {
  const [dismissed, setDismissed] = useState(false);

  if (!dismissed)
    return (
      <SplashScreen
        dismissText="Show me the site anyway"
        onDismiss={() => setDismissed(true)}
      >
        <h1>This site is a work in progress</h1>
        <p>You can see the source code for it on GitHub</p>
        <a href="https://github.com/SVendittelli/vendittelli.co.uk">
          SVendittelli/vendittelli.co.uk
        </a>
      </SplashScreen>
    );

  return <Header text="Sam Vendittelli | Full-stack Web Developer" />;
}

export default App;
