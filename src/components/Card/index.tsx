import { CardProps } from "intefaces/Interfaces";
import React, { useRef } from "react";
import { getDiffTime, getMonthAndDay, getTimeString } from "utilities/helper";

const Card = ({
  logoSrc,
  logoStyle,
  src,
  dst,
  boarding,
  transfer,
  gates,
  seat,
  price,
  ...props
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  let flag = 0;
  const srcDate = new Date(Date.parse(src?.time));
  const dstDate = new Date(Date.parse(dst?.time));
  const cardClickHandler = () => {
    if (flag % 2 === 0) {
      if (cardRef.current) cardRef.current.style.transform = "rotateX(-180deg)";
      if (cardContainerRef.current)
        cardContainerRef.current.style.height = "320px";
    } else {
      if (cardRef.current) cardRef.current.style.transform = "rotateX(0deg)";
      if (cardContainerRef.current)
        cardContainerRef.current.style.height = "160px";
    }
    flag++;
  };
  return (
    <div className="card-container" ref={cardContainerRef}>
      <div className="wrapper d-flex align-items-center justify-content-center">
        <div className="card" onClick={cardClickHandler}>
          <div
            ref={cardRef}
            className="section-container position-relative w-100 h-100"
          >
            <div className="main-section">
              <div className="class-type">{props?.class}</div>
              <div className="up-section-wrapper">
                <div className="up-section">
                  <img src={logoSrc} style={logoStyle} alt="logo" />
                  <div className="info-part">
                    <div className="item">
                      <p>{src?.country}</p>
                      <div className={"time"}>{getTimeString(srcDate)}</div>
                      <p>{getMonthAndDay(srcDate)}</p>
                    </div>
                    <img src="airplane.png" alt="airplane" />
                    <div className="item">
                      <p>{dst?.country}</p>
                      <div className={"time"}>{getTimeString(dstDate)}</div>
                      <p>{getMonthAndDay(dstDate)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="end-section">
                <div className="price">${price}</div>
              </div>
            </div>
            <div className="bottom-section">
              <div className="container">
                <div className="item">
                  <p className="value">
                    {getTimeString(srcDate)} - {getTimeString(dstDate)}
                  </p>
                  <p>Flight Time</p>
                </div>
                <div className="item">
                  <p className="value">{transfer ? "Yes" : "No"}</p>
                  <p>Transfer</p>
                </div>
              </div>
              <div className="container">
                <div className="item">
                  <p className="value">{getDiffTime(srcDate, dstDate)}</p>
                  <p>Duraction</p>
                </div>
                <div className="item">
                  <p className="value">{gates}</p>
                  <p>Gate</p>
                </div>
              </div>
              <div className="container">
                <div className="item">
                  <p className="value">{boarding}</p>
                  <p>Boarding</p>
                </div>
                <div className="item">
                  <p className="value">{seat}</p>
                  <p>Seat</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-content">
            <div className="info-part">
              <div className="title">From</div>
              <div className="country">{src?.country}</div>
              <div className="airline">{src?.airline}</div>
            </div>
            <div className="airplan">
              <div className="airplane">
                <img src="airplane.png" alt="airplane" />
              </div>
              <div className="price">{`$${price}`}</div>
            </div>
            <div className="info-part">
              <div className="title">To</div>
              <div className="country">{dst?.country}</div>
              <div className="airline">{dst?.airline}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
