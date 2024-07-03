"use client";

import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";

function EmailClipboard() {
  const [isCoppied, setIsCoppied] = useState("");

  useEffect(() => {
    if (isCoppied === "Email copied to clipboard") {
      setTimeout(() => {
        setIsCoppied("");
      }, 3000);
    }
  }, [isCoppied]);

  return (
    <>
      <MdEmail
        className="hover:cursor-pointer hover:text-white"
        title="Copy email to clipboard"
        onClick={() => {
          if (isCoppied === "borislavm.atanasov@gmail.com") {
            return setIsCoppied("");
          }
          if (!navigator.clipboard) {
            return setIsCoppied("borislavm.atanasov@gmail.com");
          }
          navigator.clipboard.writeText("borislavm.atanasov@gmail.com");
          setIsCoppied("Email copied to clipboard");
        }}
      />
      {isCoppied && (
        <span className="text-white absolute top-10 left-0 text-sm">
          {isCoppied}
        </span>
      )}
    </>
  );
}

export default EmailClipboard;
