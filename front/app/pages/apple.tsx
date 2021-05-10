import React, { FC } from "react";
import { GetStaticProps } from "next";
import DatePicker from "./DatePicker";
import Header from './components/Header'
import Login from './components/Login'
import Nav from './components/Nav'

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
      <Header />
      <DatePicker />
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

export default Apple;