import React, { Component } from "react";

import { requestGames } from "../utils/api-service";

import Layout from "../components/layout";
import GamesList from "../components/games-list";

export default class Index extends Component {
  static async getInitialProps() {
    const data = await requestGames();
    return {
      games: data.map(d => {
        return {
          id: d.id,
          name: d.names.international,
          logo: d.assets["cover-large"].uri
        };
      })
    };
  }

  render() {
    return (
      <Layout>
        <GamesList games={this.props.games} />
      </Layout>
    );
  }
}
