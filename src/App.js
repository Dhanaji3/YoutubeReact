import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Watch from './components/Watch';
import SideBar from './components/SideBar';
import { Provider } from 'react-redux';
import store from './utils/store';

const appRouter = createBrowserRouter([
  {
 path : '/',
 element : <Body/>
 },
 {
  path : 'watch',
  element : <Watch/>
  }
])
function App() {
  return (
    <Provider store={store}>
    <div className="App shadow-lg px-2 mx-auto flex gap-2">
      <div><SideBar /></div>
      <div>
      <Header />
      <RouterProvider router={appRouter} />
      </div>
    </div>
    </Provider>
  );
}

export default App;
