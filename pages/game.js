import React, { Component } from "react";

import { requestGame, requestRecords, requestUser } from "../utils/api-service";
import { msToTime } from "../utils/utils";
import Layout from "../components/layout";

export default class Game extends Component {
  static async getInitialProps({ query }) {
    const failObject = {};
    if (!query.slug) return failObject;

    const gameData = await requestGame(query.slug);
    const recordsData = await requestRecords(query.slug);

    const run =
      recordsData.length && recordsData[0].runs && recordsData[0].runs.length
        ? recordsData[0].runs[0].run
        : null;

    let playerData = null;
    if (run && run.players && run.players.length) {
      if (run.players[0].id) {
        playerData = await requestUser(run.players[0].id);
      } else {
        playerData = { names: { international: run.players[0].name } };
      }
    }

    const game = {
      name: gameData.names.international,
      logo: gameData.assets["cover-large"].uri
    };

    if (run) {
      game.run = {
        video: run.videos.links[0].uri,
        runtime: run.times.primary_t,
        player: playerData.names.international
      };
    }

    return { game };
  }

  render() {
    let runInfo = (
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Info</p>
          <p className="title">There are no runs.</p>
        </div>
      </div>
    );

    if (this.props.game.run) {
      runInfo = (
        <>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Runtime</p>
              <p className="title">
                {msToTime(this.props.game.run.runtime * 1000)}
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Video</p>
              <p className="title">
                <a href={this.props.game.run.video} target="_blank">
                  View
                </a>
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Player</p>
              <p className="title"> {this.props.game.run.player}</p>
            </div>
          </div>
        </>
      );
    }

    return (
      <Layout>
        <section className="section has-text-centered">
          <img src={this.props.game.logo} alt={this.props.game.name} />
        </section>
        <section className="section">
          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Game</p>
                <p className="title">{this.props.game.name}</p>
              </div>
            </div>
            {runInfo}
          </div>
        </section>
      </Layout>
    );
  }
}
