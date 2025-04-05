import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Header } from 'components/Header';
import { BlogPost } from 'components/BlogPost';
import mockPosts from 'mock/posts.json';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  overflow: scroll
`;

interface Post {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly body: string;
}


function App() {
  const [posts, setPosts] = useState<ReadonlyArray<Post>>([]);

  useEffect(() => {
      setTimeout(() => {
        setPosts(mockPosts)
      }, 1000);
  }, []);

  return (
    <Container>
      <Header />
      {posts.map((post) => (
        <BlogPost key={post.id} title={post.title} body={post.body} />
      ))}
    </Container>
  );
}

export default App;
