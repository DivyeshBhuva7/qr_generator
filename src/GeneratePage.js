import { Button, Group, TextInput } from "@mantine/core";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import { QRCode } from "react-qrcode-logo";

export default function GenerateQR() {
  const [qrData, setQrData] = useState({
    first_name: "",
    last_name: "",
    mobile_num: "",
    email: "",
  });

  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [mobileErr, setMobileErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [QrTxt, setQrTxt] = useState("");

  const generateQRImage = (e) => {
    e.preventDefault();

    if (qrData.first_name.length === "" || qrData.first_name.length < 3) {
      setFirstNameErr("First name must be at least 3 characters long.");
    }

    if (qrData.last_name.length === "" || qrData.last_name.length < 3) {
      setLastNameErr("Last name must be at least 3 characters long.");
    }

    if (qrData.mobile_num.length === "" || qrData.mobile_num.length < 11) {
      setMobileErr("Please enter proper mobile number.");
    }

    if (qrData.email === "") {
      setEmailErr("Email should not be empty.");
    } else if (
      /^\b[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\b$/.test(
        qrData.email
      ) === false
    ) {
      setEmailErr("Invalid email");
    }

    if (
      qrData.first_name.length >= 3 &&
      qrData.last_name.length >= 3 &&
      qrData.mobile_num.length === 11 &&
      /^\b[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\b$/.test(
        qrData.email
      ) === true
    ) {
      let QRText = `BEGIN:VCARD
VERSION:4.0
N:${qrData.last_name};${qrData.first_name};;;
FN:${qrData.first_name} ${qrData.last_name}
EMAIL:${qrData.email}
TEL;type=CELL;type=VOICE;type=pref:${qrData.mobile_num}
END:VCARD`;

      setQrTxt(QRText);
    }
  };

  return (
    <div className="bg-img">
      <div className="input-container">
        <div className="input-container-gap"></div>
        <div className="inputs">
          <h3 className="headers">Enter your details</h3>
          <TextInput
            label="First name"
            placeholder="First name"
            mb="sm"
            withAsterisk
            error={firstNameErr}
            onFocus={() => setFirstNameErr("")}
            onChange={(e) =>
              setQrData({ ...qrData, first_name: e.target.value })
            }
            value={qrData.first_name}
          ></TextInput>
          <TextInput
            label="Last name"
            placeholder="Last name"
            mb="sm"
            withAsterisk
            error={lastNameErr}
            onFocus={() => setLastNameErr("")}
            onChange={(e) =>
              setQrData({ ...qrData, last_name: e.target.value })
            }
            value={qrData.last_name}
          ></TextInput>
          <TextInput
            label="Mobile No."
            mb="sm"
            withAsterisk
            placeholder="00000 00000"
            component={IMaskInput}
            mask="00000 00000"
            error={mobileErr}
            onFocus={() => setMobileErr("")}
            onChange={(e) =>
              setQrData({ ...qrData, mobile_num: e.target.value })
            }
            value={qrData.mobile_num}
          ></TextInput>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            mb="sm"
            withAsterisk
            error={emailErr}
            onFocus={() => setEmailErr("")}
            onChange={(e) =>
              setQrData({ ...qrData, email: e.target.value.toLowerCase() })
            }
            value={qrData.email}
          ></TextInput>

          <Group className="submit-btn" position="left" mt="md">
            <Button
              size="sm"
              color="teal"
              variant="filled"
              onClick={generateQRImage}
            >
              Generate QR
            </Button>
          </Group>
        </div>

        <p className="genPage-disclaimer">
          This webpage is created for sole purpose of coding practice.
        </p>
      </div>

      <div className="genPage-qr-container">
        <div className="qr-preview">
          {QrTxt !== "" ? (
            <div className="qr-img">
              <QRCode qrStyle="dots" size="240" value={QrTxt} />
            </div>
          ) : (
            <div className="fallback-qr-img">
              <div> </div>
            </div>
          )}
        </div>
        <div className="genPage-gap"></div>
      </div>
    </div>
  );
}
