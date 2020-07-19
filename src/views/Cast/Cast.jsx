import React, { Component } from "react";
import T from "prop-types";
import * as API from "../../services/Api";
import style from "./Cast.module.css";

class Cast extends Component {
  static propTypes = {
    match: T.shape({
      params: T.shape({
        movieId: T.string,
      }),
    }).isRequired,
  };

  state = {
    cast: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    API.getCast(movieId).then((res) => this.setState({ cast: res.data.cast }));
  }

  render() {
    const { cast } = this.state;

    return (
      <div>
        <ul className={style.list}>
          {cast.map((el) => (
            <li key={el.id} className={style.list_item}>
              <img
                className={style.photo}
                src={`https://image.tmdb.org/t/p/w300${el.profile_path}`}
                alt=""
              />
              <p className={style.name}>Name: {el.name}</p>
              <p className={style.name}>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;
