import router from '@routes/router';
import { GlobalStyles } from '@styles/globalStyles';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { theme } from 'styles/designSystem';
import {
  ResetRecoilContext,
  useResetRecoilByKey,
} from '@context/resetRecoilContext';

function App() {
  const { key, updateKey } = useResetRecoilByKey();

  return (
    <ThemeProvider theme={theme}>
      <ResetRecoilContext.Provider value={updateKey}>
        <RecoilRoot key={key}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </RecoilRoot>
      </ResetRecoilContext.Provider>
    </ThemeProvider>
  );
}

export default App;
