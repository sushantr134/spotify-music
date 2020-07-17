import React from "react";
import styles from "./style.scss";
import logo from "../../../static/Spotify_logo.svg";

import { Button } from "antd";

import {CONFIGURATIONS_ENV} from "../../config.env";

const LoginPanel = () => {
  const {SERVER_URL} = CONFIGURATIONS_ENV;
  return (
    <>
      <section className={styles.loginContainer}>
        <picture>
          <img src={logo} alt='spotifyApp' />
        </picture>
        <h1>Spotify Music App</h1>
        <Button type='success' size='large' href={`${SERVER_URL}/login`}>
          Login Spotify
        </Button>
        <h5>
          (Web Music App based on Spotify API - By&nbsp;&nbsp;
          <a href='mailto:sushantr134@gmail.com'>Sushant Singh</a>)
        </h5>
      </section>
    </>
  );
};

export default LoginPanel;
