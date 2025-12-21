import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
export default function Footer() {
  return (
    <>
      <div className="footer justify-center items-center md:w-full md:h-[400px] bg-black md:mt-10">
        <div className="md:flex md:flex-row">
          <div className="heading md:w-3/4 md:mt-10">
            <div className="heading w-90">
              <h1
                className="text-white text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold pl-3 mt-8 sm:pl-3 sm:mt-0 md:pl-8 md:mt-0 lg:pl-8 lg:mt-0"
                style={{ fontFamily: "'Mulish Variable', sans-serif" }}
              >
                UNLEASH YOUR <span className="text-gray-400">STRENGTH</span>
              </h1>
            </div>
            <div className="logo ">
              <div className="flex gap-4 pl-10 md:flex md:gap-6 md:px-10 pt-20 text-white ">
                <InstagramIcon fontSize="large" />
                <LinkedInIcon fontSize="large" />
                <YouTubeIcon fontSize="large" />
                <XIcon fontSize="large" />
              </div>
            </div>
            <p className="text-white pt-5 pl-10 md:pl-10 md:pt-10">
              © 2025 FITNESS HELPER. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="md:w-2/6">
            <div className="text-gray-300 pl-10 pb-2 md:text-sm tracking-widest leading-loose md:pt-45 md:pl-40">
              <div className="md:mb-4 pl-5">────────────</div>
              <p className="md:pl-6 pl-5">TRAIN SMARTER</p>
              <p className="md:pl-6 pl-5">LIVE STRONGER</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
