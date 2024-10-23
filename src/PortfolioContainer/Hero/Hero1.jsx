import "./Hero1.css";
import React, { useEffect, useState } from "react";
import Introduction from "./Introduction";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "../../imports/ThemeContext.jsx";
import Hill1 from "../../assets/images/landscape/colina1.png";
import Hill2 from "../../assets/images/landscape/colina2.png";
import Hill3 from "../../assets/images/landscape/colina3.png";
import women from "../../assets/images/landscape/mujer.png";
const Hero = () => {
  //changed background
  const { isDarkMode } = useTheme();
  //changed languague
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  // Manejador del scroll
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="hero" className="hero w-full h-screen">
      {isDarkMode ? (
        <section className="night_landscape">
          <div className="star star1"></div>
          <div className="star star2"></div>
          <div className="star star3"></div>
          <div className="star star4"></div>
          <div className="star star5"></div>
          <div className="forest hill1 "></div>
          <div className="  ">
            <Introduction />
          </div>
          <div className="night_landscape invisible md:visible">
          <img
            className="absolute"
            src={Hill1}
            alt="hill right"
            style={{ transform: `translateX(${scrollY * 0.9}px)` }}
          />
          <img
            className="absolute"
            src={Hill3}
            alt="hill center"
            style={{ transform: `translateX(${-scrollY * 0.9}px)` }}
          />
          <img
            className="absolute "
            src={Hill2}
            alt="hill center"
            style={{ transform: `translateX(${scrollY * 2}px)` }}
          />
          <img
            className="absolute "
            src={women}
            alt="hill center"
            style={{ transform: `translateX(${scrollY * 0.9}px)` }}
          />
          </div>

          
        </section>
      ) : (
        <section className="day_landscape w-full">
          <div className="ml-8 mr-8 md:ml-20 md:mr-20">
            <Introduction />
          </div>
          <div className="w-full absolute justify-end justify-items-end items-end text-right">
            <svg
              className="w-full"
              width="100%"
              height="700"
              viewBox="0 0 1365 773"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="1365" height="773" fill="" />
              <g id="daylandscape">
                <g id="skyTop">
                  <path
                    id="cloudHTop"
                    d="M116.41 155.59C115.14 156.83 114.11 157.87 113.43 158.57L12 170.5L83.6 171.99L182.05 170.5H290.94L390.88 171.99L458 170.5L335.69 158.57C335.47 157.46 335.05 155.86 334.2 154.1C328.71 142.65 313.32 140.83 311.83 140.68C308.19 140.3 303.4 139.81 298.41 142.17C294.15 144.19 292.67 146.91 289.46 146.64C286.26 146.38 284.81 143.44 282 140.67C276.96 135.7 270.83 134.51 264.1 133.21C260.22 132.46 243.32 129.19 237.25 136.19C236.51 137.04 234.96 139.18 232.78 139.17C230.65 139.17 229.1 137.14 228.31 136.19C224.92 132.12 220.85 130.14 214.89 127.24C208.35 124.06 202.28 124.16 196.99 124.26C196.99 124.26 181.35 124.53 168.65 133.21C164.67 135.93 162.67 137.29 161.19 139.18C159.52 141.3 158.7 143.25 156.72 143.65C154.81 144.04 153.13 142.74 152.25 142.16C146.43 138.34 136.8 140.67 132.86 142.16C128.6 143.76 124.55 147.7 116.45 155.58L116.41 155.59Z"
                    fill="white"
                  />
                  {/* <path id="cloudMTop" d="M69.91 314.69C69.26 315.32 68.74 315.85 68.4 316.2L17 322.25L53.28 323.01L103.17 322.25H158.35L208.99 323.01L243 322.25L181.02 316.2C180.91 315.64 180.69 314.83 180.26 313.93C177.48 308.13 169.68 307.21 168.92 307.13C167.07 306.94 164.65 306.69 162.12 307.89C159.96 308.91 159.21 310.29 157.58 310.16C155.96 310.03 155.22 308.54 153.8 307.14C151.24 304.62 148.14 304.02 144.73 303.36C142.76 302.98 134.2 301.32 131.12 304.87C130.75 305.3 129.96 306.38 128.85 306.38C127.77 306.38 126.99 305.35 126.58 304.87C124.86 302.81 122.8 301.8 119.78 300.33C116.46 298.72 113.39 298.77 110.71 298.82C110.71 298.82 102.79 298.96 96.35 303.36C94.33 304.74 93.32 305.43 92.57 306.38C91.73 307.45 91.31 308.44 90.3 308.65C89.33 308.85 88.48 308.19 88.03 307.89C85.08 305.95 80.2 307.14 78.2 307.89C76.04 308.7 73.99 310.7 69.89 314.69H69.91Z" fill="white"/> */}
                  <path
                    id="cloudHMiddle"
                    d="M104.41 404.59C103.14 405.83 102.11 406.87 101.43 407.57L0 419.51L71.6 421L170.05 419.51H278.94L378.88 421L446 419.51L323.69 407.58C323.47 406.47 323.05 404.87 322.2 403.11C316.71 391.66 301.32 389.84 299.83 389.69C296.19 389.31 291.4 388.82 286.41 391.18C282.15 393.2 280.67 395.92 277.46 395.65C274.26 395.39 272.81 392.45 270 389.68C264.96 384.71 258.83 383.52 252.1 382.22C248.22 381.47 231.32 378.2 225.25 385.2C224.51 386.05 222.96 388.19 220.78 388.18C218.65 388.18 217.1 386.15 216.31 385.2C212.92 381.13 208.85 379.15 202.89 376.25C196.35 373.07 190.28 373.17 184.99 373.27C184.99 373.27 169.35 373.54 156.65 382.22C152.67 384.94 150.67 386.3 149.19 388.19C147.52 390.31 146.7 392.26 144.72 392.66C142.81 393.05 141.13 391.75 140.25 391.17C134.43 387.35 124.8 389.68 120.86 391.17C116.6 392.77 112.55 396.71 104.45 404.59H104.41Z"
                    fill="white"
                  />
                </g>
                <g id="papalote">
                  <path
                    id="papaloteAm"
                    d="M1006.07 321.26L853.51 261.73L925.43 209.51L1006.07 321.26Z"
                    fill="#FFC84A"
                  />
                  <path
                    id="PapaloteR"
                    d="M997.41 157.56L1006.07 321.26L925.53 209.44L997.41 157.56Z"
                    fill="#D63920"
                  />
                  <path
                    id="PapaloteAz"
                    d="M931.75 217.95L853.51 261.73L881.55 148.15L931.75 217.95Z"
                    fill="#28569C"
                  />
                  <path
                    id="PapaloteV"
                    d="M997.41 157.56L931.75 217.95L881.55 148.15L997.41 157.56Z"
                    fill="#52A58C"
                  />
                  <path
                    id="LazoDer"
                    d="M854.46 260.22L933.56 233.08"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="LazoMedio"
                    d="M882.18 148.83C898.87 176.12 913.43 204.82 934.79 234.4C956.91 265.02 983.29 292.84 1004.63 317.94"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="LazoIzq"
                    d="M994.33 162L934.36 232.88"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="lazoAlto"
                    d="M935 232C916.078 264.543 898.45 290.458 885.506 308.531C751.795 495.218 587.386 584.559 544.338 606.835C514.198 622.436 488.549 633.621 471.785 640.556L457 667"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <rect
                  id="Rectangle 1"
                  x="335"
                  y="433"
                  width="233"
                  height="340"
                  fill="#B8E5FA"
                />

                <g id="skyBottom">
                  <path
                    id="cloudMBottop"
                    d="M73 527C72.15 527.83 71.46 528.53 71 529L3 537L51 538L117 537H190L257 538L302 537L220 529C219.85 528.25 219.57 527.18 219 526C215.32 518.32 205 517.1 204 517C201.56 516.75 198.35 516.41 195 518C192.14 519.36 191.16 521.18 189 521C186.85 520.82 185.88 518.86 184 517C180.62 513.67 176.51 512.87 172 512C169.4 511.5 158.07 509.3 154 514C153.51 514.57 152.46 516 151 516C149.58 516 148.53 514.64 148 514C145.73 511.27 143 509.94 139 508C134.61 505.87 130.54 505.94 127 506C127 506 116.52 506.18 108 512C105.33 513.82 103.99 514.74 103 516C101.88 517.42 101.33 518.73 100 519C98.72 519.26 97.59 518.39 97 518C93.1 515.44 86.64 517 84 518C81.15 519.08 78.43 521.72 73 527Z"
                    fill="white"
                  />
                  {/* <path id="cloudSBottop" d="M52.91 618.69C52.26 619.32 51.74 619.85 51.4 620.2L0 626.25L36.28 627.01L86.17 626.25H141.35L191.99 627.01L226 626.25L164.02 620.2C163.91 619.64 163.69 618.83 163.26 617.93C160.48 612.13 152.68 611.21 151.92 611.13C150.07 610.94 147.65 610.69 145.12 611.89C142.96 612.91 142.21 614.29 140.58 614.16C138.96 614.03 138.22 612.54 136.8 611.14C134.24 608.62 131.14 608.02 127.73 607.36C125.76 606.98 117.2 605.32 114.12 608.87C113.75 609.3 112.96 610.38 111.85 610.38C110.77 610.38 109.99 609.35 109.58 608.87C107.86 606.81 105.8 605.8 102.78 604.33C99.46 602.72 96.39 602.77 93.71 602.82C93.71 602.82 85.79 602.96 79.35 607.36C77.33 608.74 76.32 609.43 75.57 610.38C74.73 611.45 74.31 612.44 73.3 612.65C72.33 612.85 71.48 612.19 71.03 611.89C68.08 609.95 63.2 611.14 61.2 611.89C59.04 612.7 56.99 614.7 52.89 618.69H52.91Z" fill="white"/> */}
                </g>
                <g id="Woman">
                  <path
                    id="feetright"
                    d="M587.68 755.42C589.54 755.28 589.54 757.91 589.54 763.16C589.54 765.01 584.17 761.45 582.73 761.6C581.77 761.7 580.26 761.6 580.26 761.6L581.5 756.65C581.5 756.65 584.85 755.63 587.69 755.41L587.68 755.42Z"
                    fill="#FBEEE6"
                  />
                  <path
                    id="feetleft"
                    d="M559.22 755.39C559.73 755.51 560.03 755.73 560.16 756.01C560.55 756.84 562.24 758.74 561.79 759.21C561.38 759.64 557.16 760.34 554.98 760.69C554.1 760.83 553.36 760.77 552.86 760.69L553.92 756.45C553.92 756.45 556.85 754.81 559.22 755.39Z"
                    fill="#FBEEE6"
                  />
                  <path
                    id="shoeright"
                    d="M579.45 760.43C579.82 759.8 580.16 759.47 580.26 759.37C582.42 757.29 586.99 757.34 589.54 759.54C591.92 761.58 592.07 765.08 592.17 767.43C592.17 767.43 592.17 767.57 592.17 771.75C592.17 771.75 586.08 772.09 579.02 771.75C579.02 771.25 577.81 763.2 579.45 760.43Z"
                    fill="white"
                  />
                  <path
                    id="shoeleft"
                    d="M551.7 760.1C552.07 759.47 552.41 759.14 552.51 759.04C554.67 756.96 559.24 757.01 561.79 759.21C564.17 761.25 564.32 764.75 564.42 767.1C564.42 767.1 564.42 767.24 564.42 771.42C564.42 771.42 558.33 771.76 551.27 771.42C551.27 770.92 550.06 762.87 551.7 760.1Z"
                    fill="white"
                  />
                  <path
                    id="leftArm"
                    d="M544.58 600.18C542.54 599.82 540.87 599.19 539.52 598.49C529.07 593.09 527.86 578.62 527.72 576.58H544.57V600.17L544.58 600.18Z"
                    fill="#FBEEE6"
                  />
                  <path
                    id="righArm"
                    d="M579.97 600.18C582.01 599.82 583.68 599.19 585.03 598.49C595.48 593.09 596.69 578.62 596.83 576.58H579.98V600.17L579.97 600.18Z"
                    fill="#FBEEE6"
                  />
                  <path
                    id="fund"
                    d="M546.19 611.3C542.3 633.84 529.45 714.5 551.31 723.2C553.71 724.16 557.41 723.84 564.79 723.2C586.33 721.34 591.9 716.57 611.98 713.09C616.67 712.28 624.65 709.74 644 708.03C656.81 706.9 659.35 706.85 660.85 704.66C667.79 694.55 636.74 661.9 627.08 651.74C615.71 639.79 599.69 624.77 578.21 609.61L546.19 611.3Z"
                    fill="#EEFAFA"
                  />
                  <path
                    id="leftLeg"
                    d="M542.06 650.09C542.62 660.93 541.86 662.86 543.37 672.44C547.31 697.42 553.89 756.58 553.89 756.58L561.78 759.21V732.92C561.78 732.92 559.15 654.04 560.47 650.09C561.03 648.42 564.54 646.43 565.73 642.2C566.81 638.36 566.66 632.58 563.1 629.05C557.51 623.52 552.58 624.7 548.64 630.36C545.74 634.52 541.54 639.99 542.07 650.08L542.06 650.09Z"
                    fill="#FBEEE6"
                  />
                  <path
                    id="rightLeg"
                    d="M598.74 650.41C598.18 661.25 598.94 663.18 597.43 672.76C593.49 697.74 589.54 756.9 589.54 756.9H581.65V733.23C581.65 733.23 581.65 654.35 580.34 650.4C579.78 648.73 576.27 646.74 575.08 642.51C574 638.67 574.15 632.89 577.71 629.36C583.3 623.83 588.23 625.01 592.17 630.67C595.07 634.83 599.27 640.3 598.74 650.39V650.41Z"
                    fill="#FBEEE6"
                  />
                  <path
                    id="dess"
                    d="M590.08 617.03L546.26 620.4L544.58 610.29L578.28 606.92L590.08 617.03Z"
                    fill="white"
                    stroke="#FAFCFC"
                    strokeWidth="0.5"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="dress"
                    d="M577.37 599.5H546.19C543.59 597.88 540.24 594.19 537.76 587.7C533.52 576.57 539.45 565.79 546.19 557.37C554.79 546.62 574.45 549 581.58 557.37C585.99 562.54 587.22 569.77 586.64 579.28C586.04 588.92 581.82 594.83 579.9 599.5H577.37Z"
                    fill="white"
                    stroke="#FAFCFC"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="waist"
                    d="M546.19 609.61L578.21 607.93L579.9 599.5H546.19V609.61Z"
                    fill="white"
                    stroke="#FAFCFC"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="skirtLeft"
                    d="M546.19 611.3C538.07 614.82 536.38 633.85 534.39 651.75C531.02 682.08 541.3 717.74 544.5 720.85C552.39 728.51 574.91 723.84 583.26 710.74C585.16 707.76 587.58 702.39 583.26 678.72C578.17 650.82 550.43 609.47 546.18 611.31L546.19 611.3Z"
                    fill="white"
                    stroke="#FAFCFC"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="skirtMedio"
                    d="M551.32 622.09C556.08 638.1 558.46 646.11 563.12 654.11C580.54 684.05 572.7 712.84 583.34 714.78C588.22 715.67 589.21 709.5 600.19 706.35C613.34 702.58 623.84 708 625.47 704.66C626.6 702.34 622.18 698.38 618.73 694.55C613.42 688.65 609.56 679.39 601.88 660.85C593.83 641.43 584.55 614.84 573.37 609.86C573.21 609.79 572.39 609.45 572.39 609.45L548.8 611.14C548.8 611.14 547.15 612.46 547.4 613.02C548.8 616.2 550.91 620.68 551.33 622.1L551.32 622.09Z"
                    fill="white"
                    stroke="#FAFCFC"
                    strokeMiterlimit="10"
                  />

                  <g id="skirt">
                    <path
                      id="dressMove2"
                      d="M651.59 703.82C647.17 712.66 673.95 702.81 673.5 698.76C673.21 696.19 658.33 692.02 658.33 692.02L654.96 698.76C654.96 698.76 653.27 700.45 651.59 703.82Z"
                      fill="white"
                      stroke="#FAFCFC"
                      strokeMiterlimit="10"
                    />
                    <path
                      id="dressMove1"
                      d="M665.07 697.08C665.56 697.73 668.15 699.2 667.6 701.29C666.97 703.68 664.23 704.66 659.17 704.66C654.66 704.66 656.63 691.09 659.17 692.86C660.03 693.46 664.79 696.71 665.07 697.07V697.08Z"
                      fill="white"
                    />
                    <path
                      id="skirtRight"
                      d="M622.1 645.68C634.34 658.11 632.51 659.48 645.69 672.64C645.69 672.64 651.05 677.99 660.86 692.86C663.77 697.27 664.8 699.21 664.23 701.29C662.2 708.64 642.36 708.83 638.11 708.87C637.14 708.87 621.28 708.92 609.46 703.81C573.27 688.16 561.24 616.57 574.07 609.44C583.13 604.4 607.43 630.78 622.1 645.67V645.68Z"
                      fill="white"
                      stroke="#FAFCFC"
                      strokeMiterlimit="10"
                    />
                  </g>
                  <path
                    id="hair"
                    d="M556.82 497.79C561.29 497.53 566.03 499.53 568.97 502.65C571.15 504.96 573.7 509.65 573.83 514.8C573.9 517.46 574.87 522.76 575.75 525.18C576.69 527.78 576.87 529.49 578.28 532.76C579.96 536.13 580.51 538.17 580.81 538.66C583.34 542.87 586.71 547.93 591.76 554.67C596.15 560.52 565.18 567.33 546.26 561.41C540.69 559.67 534.09 558.24 532.78 552.98C531.03 546 535.58 526.1 535.75 525.33C537.83 515.91 545.29 498.46 556.82 497.78V497.79Z"
                    fill="black"
                  />
                  <path
                    id="sleeveLeft"
                    d="M537.36 553.71C542.37 555.86 544.61 567.86 539.04 574.49C536.45 577.57 531.19 580.66 526.27 578.8C522.56 577.4 520.24 573.64 519.84 570.3C518.76 561.2 531.44 551.17 537.36 553.71Z"
                    fill="#F0FEFF"
                  />
                  <path
                    id="sleeveRight"
                    d="M586.44 553.71C581.43 555.86 579.19 567.86 584.76 574.49C587.35 577.57 592.61 580.66 597.53 578.8C601.24 577.4 603.56 573.64 603.96 570.3C605.04 561.2 592.36 551.17 586.44 553.71Z"
                    fill="#F0FEFF"
                  />
                  <path
                    id="hairMove"
                    d="M574.18 524.71C574.2 524.82 574.45 525.86 574.9 526.96C585.25 552.76 594.41 556.94 594.41 556.94C596.76 558.25 602.18 560.68 608.19 565.04C609.21 565.78 610.64 566.87 610.62 568.28C610.58 570.84 605.77 573.55 603.33 572.33C601.42 571.38 598.86 569.83 598.47 569.9C598.08 569.97 601.17 571.52 600.9 573.95C600.06 581.43 589.59 589 583.07 586.92C578.73 585.53 576.56 579.99 575.78 580.44C575.13 580.81 577.48 584.09 576.59 586.11C574.6 590.66 555.07 591.39 543.37 582.06C523.62 566.3 536.31 529.02 536.08 525.34C535.37 514.29 573.78 522.72 574.2 524.71H574.18Z"
                    fill="black"
                  />
                </g>
              </g>
            </svg>
          </div>
        </section>
      )}
      <div
        className={`absolute w-full h-full flex ${
          isDarkMode
            ? "justify-center justify-items-center text-center items-center"
            : "md:ml-20 md:top-1/2"
        }`}
      >
        {/* className="absolute w-full h-full flex justify-center justify-items-center text-center items-center" */}
        <ScrollLink
          to="about-me"
          smooth={true}
          duration={800}
          offset={-55}
          className={` md:mt-8 p-4 h-14 bg-blue-500 text-white rounded cursor-pointer ${
            isDarkMode
              ? "mt-52":"mt-80 ml-8 md:ml-0 "}`}
          
        >
          <p>{t("seeMore")}</p>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Hero;
