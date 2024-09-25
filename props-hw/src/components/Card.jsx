import React from "react";

function Card(props) {
  let today = new Date();
  let activityDate = new Date(props.date);
  let isPassed = false;
  console.log(activityDate > today);

  let cardType = props.type;
  let cardStyle = "";
  if (activityDate > today) {
    if (cardType == "لقاء") {
      cardStyle = "card1";
    } else if (cardType == "معسكر") {
      cardStyle = "card2";
    } else if (cardType == "برنامج") {
      cardStyle = "card3";
    }
  } else {
    isPassed = true;
  }

  return (
    <div className={"Card " + cardStyle}>
      <div className="card-body">
        <p className={"text-end text"}>{props.type}</p>
        <p className="card-text text-end fs-4">{props.name}</p>
        <div className="d-flex justify-content-start flex-row">
          <p className="card-text  details p-1">
           
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#b3b3b3"
                class="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
              </svg>
            </span> 
            {props.location}
          </p>
          <p className="card-text  details p-1">
            <span>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="#b3b3b3"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-week"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M8 14v4" /><path d="M12 14v4" /><path d="M16 14v4" /></svg>            </span>
            {props.duration}
          </p>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <p className="card-text details">
            <span>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#b3b3b3"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-month"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M7 14h.013" /><path d="M10.01 14h.005" /><path d="M13.01 14h.005" /><path d="M16.015 14h.005" /><path d="M13.015 17h.005" /><path d="M7.01 17h.005" /><path d="M10.01 17h.005" /></svg>
            </span>
            يبدأ في {props.date}
          </p>
          <button className="btn mb-2" disabled={isPassed}>
            التفاصيل
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
