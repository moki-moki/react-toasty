import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./Toast.css";
import Checkmark from "../../assets/Checkmark";
import ErrorIcon from "../../assets/ErrorIcon";
import Warning from "../../assets/Warning";
import InfoIcon from "../../assets/InfoIcon";
import CloseIcon from "../../assets/CloseIcon";

interface Props {
  label?: string;
  theme?: "dark" | "light";
  type?: "warning" | "error" | "info" | "success";
  duration?: number;
}

const Toast = ({
  label,
  type = "info",
  theme = "light",
  duration = 3000,
}: Props) => {
  const [render, setRender] = useState(true);

  const toastHandler = (): void => {
    setTimeout(() => {
      setRender((prev) => (prev = false));
    }, duration + 1000);
  };

  const toastCloseHandler = (): void => setRender((prev) => (prev = false));

  const convertToSeconds = (): number => duration / 1000;

  useEffect(() => {
    toastHandler();
  }, []);

  return (
    <>
      {render ? (
        <>
          {createPortal(
            <div
              className={`${theme} ${type} toast-container`}
              style={{
                animation: `toast-fade-in ${0.5}s linear, ${0.5}s toast-fade-out ${
                  convertToSeconds() + 0.5
                }s forwards`,
              }}
            >
              <button
                className="toast-container__btn"
                type="button"
                onClick={toastCloseHandler}
              >
                <CloseIcon theme={theme} />
              </button>
              {type === "success" ? <Checkmark /> : null}
              {type === "error" ? <ErrorIcon /> : null}
              {type === "warning" ? <Warning /> : null}
              {type === "info" ? <InfoIcon /> : null}
              <span>{label}</span>
              <div
                className={`toast-line ${type}`}
                style={{
                  animation: `toast-line-width ${convertToSeconds()}s ease-in`,
                }}
              ></div>
            </div>,
            document.body
          )}
        </>
      ) : null}
    </>
  );
};

export default Toast;
