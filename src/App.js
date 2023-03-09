import logo from './logo.svg';
import './App.css';
import { Button } from 'flowbite-react';
import { RouterProvider } from 'react-router';
import router from './Pages/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto' data-theme='light'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
