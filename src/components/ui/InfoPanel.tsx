import { useState } from "react";
import { EmailIcon, InstagramIcon, CopyIcon } from "../icons";

export default function InfoPanel() {
  const [isEmailCopying, setIsEmailCopying] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("martin@studiovroom.fr");
      setIsEmailCopying(true);

      setTimeout(() => {
        setIsEmailCopying(false);
      }, 600);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/studio.vroom/", "_blank");
  };

  return (
    <div className="contact-icons-only">
      <div
        className={`contact-icon email ${isEmailCopying ? "copying" : ""}`}
        onClick={handleEmailClick}
        title="Copy email: martin@studiovroom.fr"
      >
        {isEmailCopying ? <CopyIcon size={20} /> : <EmailIcon size={20} />}
      </div>

      <div
        className="contact-icon instagram"
        onClick={handleInstagramClick}
        title="Follow us on Instagram"
      >
        <InstagramIcon size={20} />
      </div>
    </div>
  );
}
