import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import BlogPage, { loader as postsLoader } from './pages/blog/blog';
import HomePage from './pages/home/home';
// import PostPage, { loader as postLoader } from './pages/post/post';
import RootLayout from './pages/main-layout/main-layout';

const BlogPage = lazy(() => import('./pages/blog/blog'));
const PostPage = lazy(() => import('./pages/post/post'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'posts',
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<p>Loading...</p>}>
                                <BlogPage/>
                            </Suspense>
                        ),
                        loader: () => import('./pages/blog/blog').then((module) => module.loader()),
                    },
                    {
                        path: ':id',
                        element: (
                            <Suspense fallback={<p>Loading...</p>}>
                                <PostPage/>
                            </Suspense>
                        ),
                        loader:
                            (meta) => import('./pages/post/post').then((module) => module.loader(meta))
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
