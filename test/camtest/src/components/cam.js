import React, { useEffect, useRef } from "react";

export const Cam = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          console.log("Error occurred while accessing camera: ", err);
        });
    }
  }, []);

  return <video ref={videoRef} autoPlay playsInline />;
};
