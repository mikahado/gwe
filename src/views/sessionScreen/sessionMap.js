import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Summary from "../../components/summary/summary";
import SessionListItem from "./sessionListItem/sessionListItem";
import SplashTrain from "../splash/splashTrain/splashTrain";
import { SessionJump } from "./sessionJump/sessionJump";
import "./sessionMap.css";
import "./mapRepeat/mapRepeat.css";
import "./mapBottom/mapBottom.css";
import trainBody from "../splash/splashTrain/newTrain.png";
import curriculum from "../../data/curriculum/curriculum";

function SessionMap(props) {
  const { sessionId, partNo } = useParams();
  const sessionRoute = parseInt(sessionId) || 1;
  const partNoRoute = parseInt(partNo) || 1;

  const [currentSession, setCurrentSession] = useState([sessionRoute, partNoRoute]);
  const [sessionSummary, setSessionSummary] = useState("");
  const [mobile, setMobile] = useState(false);

  function checkMobile() {
    let short = window.matchMedia(`(max-height: 500px)`).matches;
    let skinny = window.matchMedia(`(max-width: 767px)`).matches;
    if (short || skinny) {
      setMobile(true);
    }
  }

  function closeSummary() {
    setSessionSummary("");
  }

  function getBgPosition(sessionId) {
    const end = 83.25;
    const increment = end / curriculum.sessions.length;
    const nextPosition = `${increment * sessionId}%`;
    return `${nextPosition} 0`;
  }

  function moveBG(session) {
    const bg = document.getElementById("bg");
    if (bg) {
      bg.style.backgroundPosition = getBgPosition(session);
    }
  }

  function moveTrain(newSession) {
    const session = curriculum.sessions[newSession[0] - 1];
    const material = session?.material[newSession[1] - 1];
    const percent = material?.sessionInfo.curricPercent || 0;

    function animateTrain(state) {
      const train = document.getElementById("splashTrain");
      if (train) {
        train.style.animationPlayState = state === "start" ? "running" : "paused";
      }
    }

    function animateWheels(state) {
      const wheels = document.getElementsByClassName("trainWheel");
      Array.from(wheels).forEach(wheel => {
        wheel.style.animationName = state === "start" ? "spinWheelsBack" : "spinWheels";
        wheel.style.animationPlayState = state === "start" ? "running" : "paused";
      });
    }

    function fadeSession(state) {
      const sessionWrap = document.getElementById("sessionWrap");
      if (sessionWrap) {
        sessionWrap.style.opacity = state === "out" ? "0" : "1";
      }
    }

    function startMovement() {
      animateWheels("start");
      moveBG(percent);
      animateTrain("start");
      fadeSession("out");
    }

    function stopMovement() {
      animateWheels("stop");
      animateTrain("stop");
      fadeSession("in");
      setCurrentSession([newSession[0], newSession[1]]);
    }

    if (!mobile) {
      startMovement();
      setTimeout(stopMovement, 3000); // Adjust timing as needed
    } else {
      setCurrentSession([newSession[0], newSession[1]]);
    }
  }

  function nextSession() {
    const session = curriculum.sessions[currentSession[0] - 1];
    const material = session?.material[currentSession[1] - 1];
    if (currentSession[0] < curriculum.sessions.length) {
      if (currentSession[1] < (material?.sessionInfo.ofParts || 1)) {
        moveTrain([currentSession[0], currentSession[1] + 1]);
      } else {
        moveTrain([currentSession[0] + 1, 1]);
      }
    }
  }

  function backSession() {
    if (currentSession[0] > 1) {
      if (currentSession[1] > 1) {
        moveTrain([currentSession[0], currentSession[1] - 1]);
      } else {
        moveTrain([currentSession[0] - 1, 1]);
      }
    }
  }

  useEffect(() => {
    function handleResize() {
      setTimeout(checkMobile, 1000); // Adjust delay as needed
    }
    checkMobile();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const session = curriculum.sessions[currentSession[0] - 1];
  const material = session?.material[currentSession[1] - 1];

  console.log(material);

  return (
    <div className={`sessionMap container-fluid ${currentSession ? "scrollLock" : ""}`}>
      {sessionSummary && <Summary currentMaterial={sessionSummary} closeCurrent={closeSummary} language={props.language} />}
      
      <div id="bg" className="row no-gutters" style={sessionRoute ? { backgroundPosition: getBgPosition(sessionRoute) } : {}}>
        <div className="col h-100 w-100 justify-content-start mapRowGrid">
          <div className="trainCol h-100 d-none d-md-flex">
            <div className="trainWrap">
              <SplashTrain />
              <img src={trainBody} className="sizeTrain" alt="" />
            </div>
          </div>

          <div className="md-auto d-flex align-items-center justify-content-center">
            {material && (
              <SessionListItem
                sessionId={material.sessionInfo.materialId}
                title={material.content.title.get(props.language)}
                subtitle={material.content.subtitle ? material.content.subtitle.get(props.language) : null}
                format={material.content.format}
                currentMaterial={currentSession}
                image={material.content.graphic}
                changeSession={setSessionSummary}
                currentSession={currentSession}
                nextSession={nextSession}
                backSession={backSession}
                moveTrain={moveTrain}
                language={props.language}
              />
            )}
          </div>
        </div>
      </div>

      <div className="row no-gutters">
        <div className="col">
          <SessionJump moveTrain={moveTrain} currentSession={currentSession} language={props.language} />
        </div>
      </div>
    </div>
  );
}

export default SessionMap;
