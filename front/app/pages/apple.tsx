import React, { FC } from "react";
import { GetStaticProps } from "next";
import DatePicker from "./DatePicker";
import Header from './components/Header'
import Login from './components/Login'
import Nav from './components/Nav'
import Rookie from './components/Rookie'

type Post = {
  id: number;
  title: string;
}

type Props = {
  posts: Post[];
}

const Apple: FC<Props> = (props) => {
  return (
    <div>
      <Nav />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full object-center" onClick={twitter}>ここをクリック</button>
      <Header />
      <DatePicker />
      <Rookie />
      <img src="https://picsum.photos/id/1012/1000/800"></img>
      <div className="h-screen w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
        <h2 className="my-3 hover:text-blue-300">POSTの一覧</h2>
        <table>
	    {props.posts.map((post) =>
	    <tr>
	      <td>{post.id}.</td>
	      <td>{post.title}</td>
	    </tr>
          )}
        </table>
        <Login/>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const response = await fetch("http://api:3000/posts", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}

const twitter = () => {
  console.log("成功しました")
  
}

export default Apple;