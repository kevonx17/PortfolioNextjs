import Link from 'next/link';
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";//_error page reference
import { Component } from "react";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/kevonx17");
    //check status of page returned if greater than 200 display error page
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return { user: data, statusCode };//props values
  }

  render() {
    const { user, statusCode } = this.props;
    //Return _error page if status code error above
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        
        <p>{user.name}</p>
        <div><img src={user.avatar_url} alt="Tyrone" height="200px" width="200px" /></div>
      </Layout>
    );
  }
}