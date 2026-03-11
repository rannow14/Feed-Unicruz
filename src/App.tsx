import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Kauagoulart.png',
      name: 'Kauã',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Lorem Ipsum'},
      {type: 'paragraph', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti earum labore eos animi ullam ipsum, voluptates vitae, sint, odio et cum facilis tempora distinctio est. Odio earum veritatis eligendi.'},
      {type: 'link', content: '👉 [link]https://github.com/Kauagoulart'},
      {type: 'link', content: '#novoprojeto'},
      {type: 'link', content: '#nlw'},
      {type: 'link', content: '#rocketseat'}
    ],
    publishedAt: new Date('2026-02-10 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/iuri2505.png',
      name: 'Iuri',
      role: 'Desempregado Profissional'
    },
    content: [
      {type: 'paragraph', content: 'Lorem Ipsum'},
      {type: 'paragraph', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'},
      {type: 'link', content: '👉 [link]https://github.com/iuri2505'}
    ],
    publishedAt: new Date('2001-09-11 21:00:00'),
  }
]


export default function App() {
  return(
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post 
              key={post.id} 
              author={post.author} 
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}