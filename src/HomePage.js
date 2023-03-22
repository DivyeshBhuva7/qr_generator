import "./App.css";
import { Button, Group, Image } from "@mantine/core";
import { ReactComponent as Appwrite } from "./images/appwrite-light.svg";
import Mantine from "./images/mantine.svg";
import qrVideo from "./images/QRVideo.mp4";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-img">
      <div className="description-container">
        <div>
          <h1 className="main-heading">QR Code</h1>
          <h1 className="main-heading">Generator</h1>
          <div>
            <p className="summary">
              Create QR Codes to share your contact info easily ! Just enter the
              data and download the QR-Code as image.
            </p>
            <p className="summary">
              QR Code includes your contact details, making it easy for your
              customers to reach you. It's like an extension of your traditional
              business card.
            </p>
          </div>
          <Group className="submit-btn" position="left" mt="md">
            <Button
              size="sm"
              color="teal"
              variant="filled"
              onClick={() => navigate("/generate-qr")}
            >
              Get Started
            </Button>
          </Group>
        </div>
      </div>
      <div className="img-container">
        <div className="img-preview">
          <video
            className="homepage-video"
            src={qrVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
          />
        </div>
        <div className="disclaimer-container">
          <div className="disclaimer-icons">
            <Appwrite className="logos appwrite" />

            <Image
              className="logos mantine"
              fit="fill"
              height={34}
              width={34}
              src={Mantine}
            />
          </div>
          <p className="disclaimer">
            Created with
            <br />
            Mantine UI
          </p>
        </div>
      </div>
    </div>
  );
}
