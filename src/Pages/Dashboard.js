import * as React from "react";
import Button from "@mui/material/Button";
import "../styles/dashboard.scss";
import TotalSales from "../charts/TotalSales";
import Payment from "../charts/Payment";
import Followers from "../charts/Followers";
import ViewGoals from "../charts/ViewGoals";
import congratulations from "../assets/images/congratulations.png";

function Dashboard() {
  return (
    <div className="heading">
      <h2>Dashboard</h2>

      <div class="grid-container">
        <div class="item1">
          <div className="item1__head">
            <h1>OverView</h1>
            <Button variant="outlined">Check Now</Button>
          </div>
          <div className="item1__content">
            <img className="dash_img" src={congratulations} alt="img" />
          </div>
        </div>

        <div class="item2">
          <div className="item2__head">
            <Button variant="outlined" size="medium">
              View Details
            </Button>
          </div>
          <div className="item2__content">
            <p className="sub_heading">Total Sales</p>
            <TotalSales />
          </div>
        </div>

        <div class="item3">
          <div className="item3__head">
            <p>Payment Stats</p>
          </div>
          <div className="item3__content">
            <p className="sub_heading">Payment</p>
            <Payment />
          </div>
        </div>

        <div class="item4">
          <div className="item4__head">
            <p>Followers Stats</p>
          </div>
          <div className="item4__content">
            <p className="sub_heading">Followers</p>
            <Followers />
          </div>
        </div>

        <div class="item5">
          <div className="item5__head">
            <p>User Visits</p>
          </div>
          <div className="item5__content">
            <p className="sub_heading">View Goals</p>
            <div className="sub__content">
              <ViewGoals />
              <p>Total view made today</p>
              <h2>2400</h2>
              <div class="container">
                <div class="column r_border">
                  <h4> 4800 views </h4>
                  <p> Goal Status</p>
                </div>
                <div class="column r_border">
                  <h4> 2.5 sec </h4>
                  <p>Avg visiting time </p>
                </div>
                <div class="column">
                  <h4> 3404 </h4>
                  <p>Social Share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
