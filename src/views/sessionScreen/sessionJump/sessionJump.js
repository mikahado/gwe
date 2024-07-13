// React
import React from "react";

// Data
import curriculum from "../../../data/curriculum/curriculum";

// Style Sheet
import "./sessionJump.css";
import pageText from "../../../data/pageText";

export const sessionIcons = {
  book: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-book"
      viewBox="0 0 16 16"
    >
      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
    </svg>
  ),
  discussion: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-chat-quote"
      viewBox="0 0 16 16"
    >
      <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
      <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
    </svg>
  ),
  experiment: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="100.03 110.524 18.971 23.938"
    >
      <g>
        <path
          d="M113.756,120.014c0-0.918-0.087-1.246-1.007-1.246h-6.469c-0.92,0-1.008,0.328-1.008,1.246h1.318v2.673
l-3.293,10.111c0,0.919,0.746,1.664,1.666,1.664h9.105c0.919,0,1.666-0.745,1.666-1.664l-3.281-10.14l-0.013-2.644H113.756
L113.756,120.014z M114.388,131.877c0.259,0.845-0.191,1.37-1.368,1.37h-6.998c-1.339,0-1.668-0.565-1.367-1.37l3.178-9.232
l-0.02-2.622l3.361-0.036v2.65L114.388,131.877z"
        />
      </g>
      <path
        stroke-miterlimit="10"
        d="M106.596,130.904l1.529-4.688c0,0,0.531,0.831,1.33,0.931
	s1.53-0.033,1.829,0.632c0.299,0.665,1.13,3.125,1.13,3.125s0.532,0.898-0.598,0.898c-1.13,0-3.857,0-4.755,0
	S106.596,130.904,106.596,130.904z"
      />
      <circle stroke-miterlimit="10" cx="108.179" cy="116.494" r="1.097" />
      <circle stroke-miterlimit="10" cx="111.584" cy="112.948" r="1.622" />
    </svg>
  ),
  video: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-camera-reels"
      viewBox="0 0 16 16"
    >
      <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
      <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
      <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
    </svg>
  ),

  drama: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      fill="currentColor"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 511.999 511"
    >
      <g transform="translate(0, 40)">
        <path
          d="M505.43 29.078C503.73 27.91 462.594.5 361.832.5c-100.766 0-141.906 27.41-143.61 28.578a15.124 15.124 0 0 0-6.566 12.469v30.035c-22.988 4.555-53.66 13.676-91.703 31.523C28.73 145.906 3.13 188.195 2.082 189.973a15.13 15.13 0 0 0-.652 14.082l61.449 130.968c30.203 64.375 94.492 103.575 162.914 103.575 15.156 0 30.52-1.922 45.754-5.922.047-.012.094-.024.14-.04h.004a15.16 15.16 0 0 0 4.813-2.284c26.785-19.149 46.93-44.508 59.625-72.903a180.484 180.484 0 0 0 22.96 5.801c.454.086.907.148 1.368.187h.004a14.929 14.929 0 0 0 4.102-.188C449.995 347.532 512 273.08 512 186.216V41.547c0-4.985-2.457-9.649-6.57-12.469zM90.25 322.18 32.656 199.422c10.04-11.902 38.196-39.879 100.137-68.942 61.953-29.062 101.457-32.832 117.023-32.94l57.594 122.757c30.3 64.586 10.82 141.418-46.238 183.816-69.078 16.778-140.621-17.347-170.922-81.933zm391.512-135.965c0 71.344-50.27 132.625-119.934 146.77a149.895 149.895 0 0 1-15.71-4.087c7.265-28.152 7.737-58.062.726-87.113 18.746-5.2 39.695-.457 54.402 14.25 2.953 2.953 6.824 4.43 10.691 4.43s7.739-1.477 10.692-4.43c5.902-5.902 5.902-15.472 0-21.379-23.063-23.058-56.07-30.258-85.344-21.593a182.349 182.349 0 0 0-2.504-5.61l-24.515-52.258c12.21-.101 23.68-4.894 32.324-13.543 5.902-5.902 5.902-15.476 0-21.379-5.902-5.902-15.477-5.902-21.38 0a15.92 15.92 0 0 1-11.331 4.696c-4.277 0-8.3-1.668-11.328-4.696a15.092 15.092 0 0 0-6.461-3.824l-18.754-39.965a15.116 15.116 0 0 0-11.238-8.5c-.735-.12-7.54-1.148-20.207-.418V50.59c14.023-6.473 51.332-19.856 119.941-19.856 68.422 0 105.79 13.371 119.93 19.883z"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
          class=""
        ></path>
        <path
          d="M420.219 155.203c12.36 0 23.976-4.808 32.715-13.547 5.902-5.906 5.902-15.476 0-21.383-5.907-5.902-15.477-5.902-21.383 0a15.918 15.918 0 0 1-11.328 4.696 15.92 15.92 0 0 1-11.332-4.696c-5.903-5.902-15.477-5.902-21.383 0-5.903 5.907-5.903 15.477 0 21.383 8.738 8.739 20.355 13.547 32.71 13.547zM167.078 248.848c2.84-7.852-1.226-16.52-9.078-19.356-11.625-4.199-24.184-3.62-35.371 1.63s-19.66 14.538-23.86 26.16c-2.835 7.85 1.231 16.519 9.083 19.355 1.695.613 3.43.902 5.136.902 6.188 0 11.996-3.828 14.219-9.984a15.931 15.931 0 0 1 8.266-9.063 15.93 15.93 0 0 1 12.25-.562c7.851 2.836 16.52-1.227 19.355-9.082zM207.742 229.773c1.7.61 3.43.903 5.137.903 6.187 0 11.996-3.828 14.219-9.985a15.92 15.92 0 0 1 8.265-9.062 15.894 15.894 0 0 1 12.25-.563c7.856 2.836 16.52-1.23 19.36-9.082 2.836-7.855-1.23-16.52-9.082-19.355-23.993-8.668-50.563 3.797-59.23 27.785-2.837 7.856 1.23 16.52 9.081 19.36zM274.355 289.063c2.836-7.852-1.23-16.516-9.082-19.356-7.851-2.84-16.52 1.227-19.355 9.082-10.45 28.91-42.473 43.93-71.379 33.488-7.855-2.84-16.52 1.227-19.355 9.078-2.84 7.856 1.226 16.52 9.078 19.36a85.636 85.636 0 0 0 29.136 5.12c35.207 0 68.32-21.8 80.957-56.772zm0 0"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
          class=""
        ></path>
      </g>
    </svg>
  ),

  awareness: (
    <svg
      version="1.1"
      id="svg1461"
      width="682.66669"
      height="682.66669"
      viewBox="0 0 682.66669 682.66669"
    >
      <defs id="defs1465">
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1479">
          <path d="M 0,512 H 512 V 0 H 0 Z" id="path1477" />
        </clipPath>
      </defs>
      <mask id="custom">
        <rect id="bg" x="0" y="0" width="100%" height="100%" fill="white" />
        <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)" />
      </mask>
      <g mask="url(#custom)">
        <g id="g1467" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
          <g id="g1469" transform="translate(163.0488,79.5527)">
            <path
              d="M 0,0 V 0"
              style={{
                fill: "none",
                stroke: "#FFFFFF",
                strokeWidth: 20,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
              id="path1471"
            />
          </g>
          <g id="g1473">
            <g id="g1475" clipPath="url(#clipPath1479)">
              <g id="g1481" transform="translate(159.6587,33.8389)">
                <path
                  d="m 0,0 c -2.38,-14.167 -5.088,-23.839 -5.088,-23.839 h 124.571 l 43.093,59.509 h 77.222 c 14.531,0 26.309,11.766 26.309,26.279 v 89.052 h 30.386 c 10.48,0 17.415,10.868 12.98,20.353 -12.972,27.735 -35.687,75.396 -40.283,94.381 8.659,108.118 -78.905,202.426 -183.978,202.426 -9.526,0 -19.339,-0.578 -29.155,-2.018 -94.739,-13.433 -157.543,-76.407 -171.976,-161.175 -11.139,-73.83 19.283,-173.032 93.575,-200.688 6.52,-3.977 11.522,-9.456 15.309,-15.923"
                  style={{
                    fill: "none",
                    stroke: "#FFFFFF",
                    strokeWidth: 20,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  id="path1483"
                />
              </g>
              <g id="g1485" transform="translate(347.5664,297.5571)">
                <path
                  d="M 0,0 C 13.277,13.262 34.803,13.262 48.08,0"
                  style={{
                    fill: "none",
                    stroke: "#FFFFFF",
                    strokeWidth: 20,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  id="path1487"
                />
              </g>
              <g id="g1489" transform="translate(423.2925,149.0869)">
                <path
                  d="M 0,0 C -8.044,-3.313 -17.354,-3.559 -26.021,0.045"
                  style={{
                    fill: "none",
                    stroke: "#FFFFFF",
                    strokeWidth: 20,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  id="path1491"
                />
              </g>
              <g id="g1493" transform="translate(148.9351,268.5527)">
                <path
                  d="m 0,0 c -19.862,-6.224 -32.568,-13.875 -32.568,-24.559 0,-18.752 39.141,-33.954 87.424,-33.954 48.283,0 87.424,15.202 87.424,33.954 0,10.684 -12.703,18.333 -32.563,24.558"
                  style={{
                    fill: "none",
                    stroke: "#FFFFFF",
                    strokeWidth: 20,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  id="path1495"
                />
              </g>
              <g id="g1497" transform="translate(195.1035,250.6636)">
                <path
                  d="m 0,0 c 4.359,-3.915 7.708,-6.333 8.691,-7.61 0.451,0.571 3.87,3.16 8.521,7.732"
                  style={{
                    fill: "none",
                    stroke: "#FFFFFF",
                    strokeWidth: 20,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  id="path1499"
                />
              </g>
              <g id="g1501" transform="translate(239.6162,351.0684)">
                <path
                  d="M 0,0 C -9.175,33.099 -32.905,46 -35.822,49.784 -37.08,48.191 -61.427,31.834 -71.218,-0.37"
                  style={{
                    fill: "none",
                    stroke: "#FFFFFF",
                    strokeWidth: 20,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  id="path1503"
                />
              </g>
              <g id="g1505" transform="translate(298.4253,375.3506)">
                <path
                  d="m 0,0 -7.701,-1.159 c -27.06,-4.69 -50.825,-19.318 -66.924,-41.172 -16.21,-22.018 -22.905,-49.023 -18.845,-76.037 l 8.118,-5.799 c 27.321,4.584 51.31,19.241 67.532,41.28 16.23,22.038 22.925,49.044 18.851,76.043 z"
                  style={{
                    fill: "none",
                    stroke: "#FFFFFF",
                    strokeWidth: 20,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  id="path1507"
                />
              </g>
              <g id="g1509" transform="translate(108.1323,368.5068)">
                <path
                  d="m 0,0 c -4.074,-27 2.621,-54.005 18.851,-76.043 16.222,-22.039 40.211,-36.697 67.532,-41.28 l 8.118,5.799 C 98.562,-84.51 91.867,-57.505 75.656,-35.487 59.558,-13.633 35.792,0.995 8.732,5.685 L 1.031,6.844 Z"
                  style={{
                    fill: "none",
                    stroke: "#FFFFFF",
                    strokeWidth: 20,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  id="path1511"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
};

function SessionButton(props) {
  let material = props.materialData;
  let content = material.content;

  let sessionInfo = material.sessionInfo;
  let sessionId = sessionInfo.sessionId;
  let partNo = material.sessionInfo.partNo;
  let materialId = sessionInfo.materialId;

  function handleClick() {
    props.moveTrain([sessionId, partNo]);
  }

  return (
    <button
      onClick={handleClick}
      className={
        props.currentSession[0] === sessionId &&
        props.currentSession[1] === partNo
          ? "current"
          : ""
      }
    >
      {materialId}
      {sessionIcons[content.format] ? sessionIcons[content.format] : null}
    </button>
  );
}

export function SessionJump(props) {
  return (
    <div className={"tableContents d-flex flex-column align-items-center"}>
      <p className={"mr-2"}>
        {pageText.labels.jumpToSession.get(props.language)}:
      </p>

      <div className="sessionButtonsList d-flex flex-row flex-md-row justify-content-center align-items-center w-100 flex-wrap">
        {curriculum.sessions.map((session) => {
          return session.material.length > 1 ? (
            <div className={"materialWrap"}>
              {session.material.map((material) => {
                return (
                  <SessionButton
                    materialData={material}
                    moveTrain={props.moveTrain}
                    currentSession={props.currentSession}
                  />
                );
              })}
            </div>
          ) : (
            <SessionButton
              materialData={session.material[0]}
              moveTrain={props.moveTrain}
              currentSession={props.currentSession}
            />
          );
        })}
      </div>
    </div>
  );
}
