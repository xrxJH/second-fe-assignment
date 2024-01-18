import router from '@routes/router';
import { GlobalStyles } from '@styles/globalStyles';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/designSystem';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyles />
        <RouterProvider router={router} />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
