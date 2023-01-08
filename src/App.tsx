import store from 'store';
import { Provider } from 'react-redux';
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query';

import { CssBaseline, StyledEngineProvider } from '@mui/material';
// import { ThemeProvider, Theme } from '@mui/material/styles';
//import project
import { AppContextProvider } from 'contexts/AppContext';
import { JWTContextProvider } from 'contexts/JWTContext';

// routing
import Routes from 'routes';

// load mock apis
import '_mockApis';

// ==============================|| APP ||============================== //

const queryClient = new QueryClient();

const App = () => (
    <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <CssBaseline />
                    <AppContextProvider>
                        <Routes />
                    </AppContextProvider>
            </Provider>
        </QueryClientProvider>
    </StyledEngineProvider>
);

export default App;
