import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavigationBar from "./components/NavigationBar";
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {MainScreen} from "./screens/MainScreen";
import {TripEditorSreen} from "./screens/TripEditorScreen";
import {TripProvider} from "./context/TripContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainScreen/>,
    },
    {
        path: "/edit",
        element: <TripEditorSreen/>,
    },
]);
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <NavigationBar/>
        <TripProvider>
            <RouterProvider router={router}/>
        </TripProvider>
        <div>Footer</div>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

