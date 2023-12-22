import { useEffect, useRef } from "react";
import {IoClose} from "react-icons/io5"

function CapturePhoto({ setImage, hideCapturePhoto } : any) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach((track:any) => track.stop());
      }
    };
  }, []);
  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (context) {
        const videoWidth = videoRef.current.videoWidth;
        const videoHeight = videoRef.current.videoHeight;
        const squareSize = Math.min(videoWidth, videoHeight);
        const x = (videoWidth - squareSize) / 2;
        const y = (videoHeight - squareSize) / 2;
        canvas.width = squareSize;
        canvas.height = squareSize;
        context.drawImage(videoRef.current, x, y, squareSize, squareSize, 0, 0, squareSize, squareSize);
        setImage((val :any) => ({ ...val, image: canvas.toDataURL('image/jpeg') }));
        hideCapturePhoto(false);
      }
    }
  };

  return (
    <section className="absolute h-full w-full top-0 left-0 bg-ctertiary flex gap-3 pt-2 items-center justify-center">
      <div className="gap-4 flex flex-col items-center">
        <div className="w-full justify-end flex pr-2 pt-2">
          <IoClose className="w-10 h-10 cursor-pointer text-neutral-200" onClick={()=>hideCapturePhoto(false)} />
        </div>
        <div className="flex justify-center">
          <video id="video" width="400" autoPlay ref={videoRef}></video>
        </div>
        <button onClick={capturePhoto} className="h-16 w-16 border-8 bg-white rounded-full border-cprimary p-2 mb-10">

        </button>
      </div>
    </section>
  );
}

export default CapturePhoto;
