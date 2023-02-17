import { useLoaderData } from 'react-router-dom';

import PostItem from '../../components/post-item/post-item';

function PostPage() {
  const post = useLoaderData();

  return <PostItem post={post} />;
}

export default PostPage;

export function loader({ params }) {
  const postId = params.id;
  return fetch('https://jsonplaceholder.typicode.com/posts/' + postId);
}
