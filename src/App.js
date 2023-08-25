import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';

function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.page;
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
