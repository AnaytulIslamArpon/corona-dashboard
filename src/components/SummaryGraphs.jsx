import numeral from "numeral";
import React from "react";
import "./styles/Summary.styles.scss";
import ReactMinimalPieChart from "react-minimal-pie-chart";
import { Row, Col } from "react-grid-system";

const SummaryGraphs = ({ TotalConfirmed, TotalDeaths, TotalRecovered }) => {
  return (
    <div className="summaryGraph">
      <div className="container">
        <Row>
          <Col md={6}>
            <div className="info-box info">
              <div className="stat summary">
                <h4>Summary</h4>
                <ReactMinimalPieChart
                  animate
                  animationDuration={500}
                  animationEasing="ease-out"
                  cx={50}
                  cy={50}
                  data={[
                    {
                      color: "#a2a89b",
                      title: "Total Active",
                      value: TotalConfirmed - TotalDeaths - TotalRecovered,
                    },
                    {
                      color: "#e85b5b",
                      title: "Total Deaths",
                      value: TotalDeaths,
                    },
                    {
                      color: "#65c109",
                      title: "Total Recovered",
                      value: TotalRecovered,
                    },
                  ]}
                  label
                  labelPosition={112}
                  labelStyle={{
                    fontFamily: "sans-serif",
                    fontSize: "5px",
                  }}
                  lengthAngle={360}
                  lineWidth={100}
                  paddingAngle={0}
                  radius={42}
                  rounded={false}
                  startAngle={0}
                  style={{
                    height: "300px",
                  }}
                  viewBoxSize={[100, 100]}
                />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="info-box info">
              <div className="stat active">
                <h4>Total Active Percent</h4>
                <ReactMinimalPieChart
                  animate
                  animationDuration={500}
                  animationEasing="ease-out"
                  cx={50}
                  cy={50}
                  data={[
                    {
                      title: "Total Active Percent",
                      color: "#E38627",
                      value: numeral(
                        ((TotalConfirmed - TotalDeaths - TotalRecovered) /
                          TotalConfirmed) *
                          100
                      ).format("0,0"),
                    },
                  ]}
                  label
                  labelPosition={0}
                  labelStyle={{
                    fontFamily: "sans-serif",
                    fontSize: "25px",
                  }}
                  lengthAngle={360}
                  lineWidth={20}
                  paddingAngle={0}
                  radius={50}
                  rounded={false}
                  startAngle={0}
                  style={{
                    height: "300px",
                  }}
                  totalValue={100}
                  viewBoxSize={[100, 100]}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SummaryGraphs;
