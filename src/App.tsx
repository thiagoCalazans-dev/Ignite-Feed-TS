import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/thiagoCalazans-dev.png",
      name: "Thiago Calazans",
      role: "CTO de MEI",
    },
    content: [
      {
        type: "paragraph",
        content: "fala galera",
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nobis aliquid minima nesciunt magni amet necessitatibus nihil debitis, odit, non consectetur, inventore unde! Aperiam deleniti veritatis obcaecati! Repellat, obcaecati in!",
      },
      {
        type: "link",
        content: "xpto.dev.com.br",
      },
    ],
    publishedAt: new Date("2022-08-12 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/josemiltonsampaio.png",
      name: "Lucas Calazans",
      role: "Social media de MEI",
    },
    content: [
      {
        type: "paragraph",
        content: "Alo",
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nobis aliquid minima nesciunt magni amet necessitatibus nihil debitis, odit, non consectetur, inventore unde! Aperiam deleniti veritatis obcaecati! Repellat, obcaecati in!",
      },
      {
        type: "link",
        content: "xpto23.dev.com.br",
      },
    ],
    publishedAt: new Date("2022-08-19 21:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) => {
            return <Post 
            key={post.id} 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          })}
        </main>
      </div>
    </>
  );
}

export default App;
