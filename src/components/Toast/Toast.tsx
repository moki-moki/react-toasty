import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./Toast.css";
import CloseIcon from "../../assets/CloseIcon";
import Icon from "../Icon/Icon";
import { IconTypes } from "../../types";

interface Props extends IconTypes {
  label?: string;
  theme?: "dark" | "light";
  duration?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const Toast = ({
  label,
  type = "info",
  theme = "light",
  duration = 3000,
  position = "top-right",
}: Props) => {
  const [render, setRender] = useState(true);
  const toastContainerRef = useRef<HTMLDivElement>(null);

  const toastHandler = (): void => {
    setTimeout(() => {
      setRender((prev) => (prev = false));
    }, duration + 1000);
  };

  const toastClosingAnimation = (): void => {
    if (null !== toastContainerRef.current)
      toastContainerRef.current.style.animation = `toast-fade-out-${position} 3s forwards 0.5s`;
  };

  const toastCloseHandler = (): void => {
    toastClosingAnimation();
    setTimeout(() => {
      setRender((prev) => (prev = false));
    }, 10000);
  };

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
              ref={toastContainerRef}
              className={`${theme} ${type} toast-container toast-container__${position}`}
              style={{
                animation: `toast-fade-${position} ${0.5}s linear, ${0.5}s toast-fade-out-${position} ${
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
              <Icon type={type} />
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
