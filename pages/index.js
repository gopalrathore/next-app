import React, { Component } from "react";
import Name from "../components/Name";
import styles from "../css/Index.css";
import Head from "next/head";
import Link from "next/link";
import Nav from '../components/navbar/nav'

class Index extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "gopal state"
    }

  }

  componentWillMount(){
    let data;
    if(true){
      data = require('../components/data.json');
    }
    console.log("myData here",data);
  }

  componentDidMount() {
    console.log("success gopal", this.state);
    $(document).ready(function() {
      console.log("jquery worked");
      $("p").click(function() {
        console.log("worked");
      });
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid">
          <Head>
            <title>This page has a title 🤔</title>
          </Head>
          <div className="row">
            <div className="col-md-4">
              <ul>
                <li>
                  <Link href="/about">
                    <a>about page</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <h1 className={styles.color}>Hello</h1>
          <p>Gopal click here</p>
          <Name name="Gopal" />
          <div className="row">
            <div className="col-md-12">
              <div className="bd-example">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide"
                        alt="First slide [800x400]"
                        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1660a1062f9%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1660a1062f9%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22215%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        data-holder-rendered="true"
                      />
                    </div>
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide"
                        alt="Second slide [800x400]"
                        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1660a1062fa%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1660a1062fa%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22215%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        data-holder-rendered="true"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                        alt="Third slide [800x400]"
                        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1660a1062fa%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1660a1062fa%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277.0078125%22%20y%3D%22215%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        data-holder-rendered="true"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
