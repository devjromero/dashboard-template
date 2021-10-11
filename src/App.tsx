import {Provider} from 'react-redux';
import AppRouter from "./AppRouter";
import store from "./store";
import initLanguageResources from "./utils/creators/languagues/initLanguageResources";

function App() {
    initLanguageResources();
    return (
        <Provider store={store}>
            <div className={'w-screen h-screen font-montserrat'}>
                {/*<Suspense fallback={Loading}>*/}
                    <AppRouter/>
                {/*</Suspense>*/}
            </div>
        </Provider>
    );
}

export default App;
