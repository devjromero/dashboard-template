import {Suspense} from 'react';
import {Provider} from 'react-redux';
import AppRouter from "./AppRouter";
import store from "./store";
import Loading from "./components/loading";

function App() {
  return (
    <Provider store={store}>
        <div className={'w-screen h-screen'}>
            <Suspense fallback={Loading}>
                <AppRouter />
            </Suspense>
        </div>
    </Provider>
  );
}

export default App;
