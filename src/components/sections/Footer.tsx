"use client";
export default function FooterBar() {
  return (
    <div className="footer-bar footer-top-gradient footer-border-solid footer-h w-full">
      <div className="mx-auto w-full max-w-[1440px] footer-pad">
        <p className="footer-copy">
          Copyright © {new Date().getFullYear()} Velogo.AI. All rights reserved
        </p>
      </div>
    </div>
  );
}
