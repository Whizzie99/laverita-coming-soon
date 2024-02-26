import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: "Cormorant",
            fontSize: "0.9em",
            textAlign: "center",
          },
        }}
      />
    </>
  );
}

export default App;
