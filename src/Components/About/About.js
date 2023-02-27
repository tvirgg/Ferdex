import './About.css';
import React from "react";
import treat from "../../images/Wrapper_vector.png";
import star from "../../images/star.png";
import Circle from "../../images/About_circle.png"
import Signature from "../../images/About_signature.png";
function About() {
    return (
        <div className="About block">
            <div className="About_top"/>
            <div className="About_title About_title__top">
                <h2 className="About_title_h2">
                    Ferdex
                </h2>
                <svg className="qr_code" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 1280.000000"
                     preserveAspectRatio="xMidYMid meet">
                    <metadata>
                        Created by potrace 1.15, written by Peter Selinger 2001-2017
                    </metadata>
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                       fill="#9DE7F0" stroke="none">
                        <path d="M0 10995 l0 -1805 1808 0 1807 0 -3 1805 -2 1805 -1805 0 -1805 0 0
-1805z m3060 0 l0 -1255 -1255 0 -1255 0 0 1255 0 1255 1255 0 1255 0 0 -1255z"/>
                        <path d="M1020 10995 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z"/>
                        <path d="M4590 12545 l0 -255 -255 0 -255 0 0 -275 0 -275 255 0 255 0 0 -235
0 -235 -255 0 -255 0 0 -275 0 -275 510 0 510 0 0 -765 0 -765 280 0 280 0 0
765 0 765 230 0 230 0 0 -255 0 -255 280 0 280 0 0 255 0 255 230 0 230 0 0
-255 0 -255 255 0 255 0 0 -235 0 -235 -252 -2 -253 -3 -3 -272 -2 -273 280 0
280 0 0 255 0 255 230 -2 231 -3 0 -252 0 -253 279 0 280 0 0 785 0 785 -277
-2 -278 -3 0 -253 0 -252 -232 0 -233 0 0 490 0 490 510 0 510 0 0 275 0 275
-255 0 -255 0 0 235 0 235 255 0 255 0 0 275 0 275 -280 0 -281 0 1 -252 1
-253 -255 -3 -256 -2 0 -255 0 -255 -255 0 -255 0 0 -255 0 -255 -255 0 -255
0 0 -255 0 -255 -230 0 -230 0 0 490 0 490 255 0 255 0 0 255 0 255 255 0 255
0 0 275 0 275 -280 0 -280 0 0 -255 0 -255 -510 0 -510 0 0 -255 0 -255 -230
0 -230 0 0 510 0 510 -280 0 -280 0 0 -255z m1020 -1550 l0 -235 -230 0 -230
0 0 235 0 235 230 0 230 0 0 -235z"/>
                        <path d="M9188 10995 l-3 -1805 1808 0 1807 0 0 1805 0 1805 -1805 0 -1805 0
-2 -1805z m3062 0 l0 -1255 -1255 0 -1255 0 0 1255 0 1255 1255 0 1255 0 0
-1255z"/>
                        <path d="M10210 10995 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z"/>
                        <path d="M4080 9720 l0 -530 280 0 280 0 -3 528 -2 527 -277 3 -278 2 0 -530z"/>
                        <path d="M6122 8953 l3 -788 1018 -2 1018 -3 2 -230 2 -230 -255 -2 -255 -3 0
-250 0 -250 -255 -5 -255 -5 -3 -252 -2 -253 -485 0 -485 0 0 233 0 232 252 0
253 0 0 275 0 275 -532 3 -533 2 0 -255 0 -255 -232 0 -233 0 3 487 2 488 253
0 252 0 0 275 0 275 -1297 3 -1298 2 0 -255 0 -255 -235 0 -235 0 0 255 0 255
-1295 0 -1295 0 0 -280 0 -281 510 3 510 3 0 -232 0 -233 -255 0 -255 0 0
-255 0 -255 -255 0 -255 0 0 -280 0 -280 530 0 530 0 0 510 0 510 235 0 235 0
0 -740 0 -740 -255 0 -255 0 0 -255 0 -255 -255 0 -255 0 0 -790 0 -790 275 0
275 0 0 765 0 765 235 0 235 0 0 -255 0 -255 275 0 275 0 0 280 0 280 -255 0
-255 0 0 230 0 230 1000 0 1000 0 0 -230 0 -230 -507 -2 -508 -3 -5 -510 -5
-510 -505 0 -505 0 -3 -278 -2 -277 530 0 530 0 0 255 0 255 235 0 235 0 0
-255 0 -255 275 0 275 0 0 280 0 279 -252 0 -253 0 -3 231 -2 230 1255 0 1255
0 0 -255 0 -255 255 0 255 0 0 -232 0 -233 -252 0 -253 0 -3 -257 -2 -258
-230 0 -230 0 -2 513 -3 512 -275 0 -275 0 -5 -255 -5 -255 -250 0 -250 0 -3
-533 -2 -532 277 2 278 3 0 252 0 253 233 0 232 0 0 -490 0 -490 -510 0 -510
0 0 -1295 0 -1295 1810 0 1810 0 0 275 0 275 -765 0 -765 0 0 255 0 255 -280
0 -280 0 0 -255 0 -255 -485 2 -485 3 -3 233 -2 232 258 0 257 0 0 765 0 765
740 0 740 0 0 -765 0 -765 768 0 767 0 0 -252 0 -253 253 -5 253 -5 -1 -252
-1 -253 281 0 280 0 0 530 0 530 -510 0 -510 0 0 490 0 490 233 0 232 0 0
-252 0 -253 513 -3 512 -2 0 -765 0 -765 1550 0 1550 0 0 1040 0 1040 -510 0
-510 0 0 255 0 255 -255 0 -255 0 0 235 0 235 765 0 765 0 0 275 0 275 -510 0
-510 0 0 515 0 516 -255 -3 -255 -3 0 743 0 742 235 0 235 0 0 -510 0 -510
255 0 255 0 0 -255 0 -255 275 0 275 0 0 535 0 535 -255 0 -255 0 0 230 0 230
255 0 255 0 0 790 0 790 -255 0 -255 0 0 510 0 510 -275 0 -275 0 0 -790 0
-790 255 0 255 0 0 -230 0 -230 -510 0 -510 0 0 -255 0 -255 -235 0 -235 0 0
255 0 255 -255 0 -255 0 0 230 0 230 510 0 510 0 0 280 0 280 -510 0 -510 0 0
510 0 510 -275 0 -275 0 0 -510 0 -510 -235 0 -235 0 0 510 0 510 -277 -2
-278 -3 0 -253 0 -252 -232 0 -233 0 0 255 0 255 -765 0 -765 0 0 510 0 510
-280 0 -280 0 2 -787z m-3572 -1043 l5 -255 252 -3 253 -2 2 -253 3 -252 253
-3 252 -2 0 -230 0 -230 -490 0 -490 0 0 255 0 255 -255 0 -255 0 0 255 0 255
-255 0 -255 0 0 228 c0 126 2 231 4 233 2 2 222 4 488 4 l483 0 5 -255z m1530
-232 l0 -488 -235 0 -235 0 0 255 0 255 -255 0 -255 0 0 228 c0 126 2 231 4
233 2 2 223 4 490 4 l486 0 0 -487z m4595 -258 l0 -230 -232 0 -233 0 0 230 0
230 233 0 232 0 0 -230z m-510 -533 l0 -252 513 -3 512 -2 0 -255 0 -255 255
0 255 0 -2 -740 -3 -740 -488 -3 -487 -2 0 233 0 232 255 0 255 0 -2 278 -3
277 -252 3 -253 2 0 255 0 255 -277 -2 -278 -3 0 -252 0 -253 -232 0 -233 0 0
740 0 740 233 0 232 0 0 -253z m1535 23 l0 -230 -235 0 -235 0 0 230 0 230
235 0 235 0 0 -230z m-4090 -510 l0 -230 -232 0 -233 0 0 230 0 230 233 0 232
0 0 -230z m-510 -510 l0 -230 -232 0 -233 0 0 230 0 230 233 0 232 0 0 -230z
m1022 -22 l3 -253 252 -3 253 -2 2 -253 3 -252 278 -3 277 -2 0 255 0 255 233
0 232 0 -3 -487 -2 -488 -738 0 -737 0 -5 255 -5 255 -252 3 -253 2 0 485 0
485 230 0 230 0 2 -252z m1018 22 l0 -230 -230 0 -230 0 0 230 0 230 230 0
230 0 0 -230z m3580 0 l0 -230 -235 0 -235 0 0 230 0 230 235 0 235 0 0 -230z
m-2 -1020 l-3 -231 -233 -2 -232 -2 0 233 0 232 235 0 235 0 -2 -230z m510
-510 l-3 -231 -233 -2 -232 -2 0 233 0 232 235 0 235 0 -2 -230z m-4086 -787
l3 -508 278 -3 277 -2 0 255 0 255 233 0 232 0 -2 -487 -3 -488 -255 -3 -255
-2 0 -510 0 -510 -230 0 -230 0 0 510 0 510 -255 0 -255 0 0 510 0 510 -255 0
-255 0 0 235 0 235 485 0 485 0 2 -507z m3066 -235 l-3 -743 -742 -3 -743 -2
0 745 0 745 745 0 745 0 -2 -742z m-4088 -3 l0 -235 -230 0 -230 0 0 235 0
235 230 0 230 0 0 -235z m5110 -1785 l0 -490 -490 0 -490 0 0 235 0 235 255 0
255 0 0 255 0 255 235 0 235 0 0 -490z m1020 -510 l0 -490 -490 0 -490 0 0
235 0 235 255 0 255 0 0 255 0 255 235 0 235 0 0 -490z"/>
                        <path d="M9188 3335 l3 -275 274 0 275 0 0 275 0 275 -277 0 -278 0 3 -275z"/>
                        <path d="M10720 8440 l0 -281 273 3 272 3 3 278 2 277 -275 0 -275 0 0 -280z"/>
                        <path d="M0 1805 l0 -1805 1805 0 1805 0 2 1805 3 1805 -1807 0 -1808 0 0
-1805z m3060 0 l0 -1255 -1255 0 -1255 0 0 1255 0 1255 1255 0 1255 0 0 -1255z"/>
                        <path d="M1020 1805 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z"/>
                        <path d="M5610 1805 l0 -275 280 0 280 0 0 275 0 275 -280 0 -280 0 0 -275z"/>
                    </g>
                </svg>
                <img src={treat} className="treat"/>
                <img src={star} className="star"/>
            </div>
            <h1 className="About_h1">
                WELCOME TO Ferdex
            </h1>
            <p className="About_p">
                Each droid is not just an awesome profile picture. It's your pass in the future of crypto community. There will be only droids.
            </p>
            <div className="About_title About_title__right">
                <h2 className="About_title_h2">
                    Ferdex
                </h2>
                <svg className="qr_code" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 1280.000000"
                     preserveAspectRatio="xMidYMid meet">
                    <metadata>
                        Created by potrace 1.15, written by Peter Selinger 2001-2017
                    </metadata>
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                       fill="#9DE7F0" stroke="none">
                        <path d="M0 10995 l0 -1805 1808 0 1807 0 -3 1805 -2 1805 -1805 0 -1805 0 0
-1805z m3060 0 l0 -1255 -1255 0 -1255 0 0 1255 0 1255 1255 0 1255 0 0 -1255z"/>
                        <path d="M1020 10995 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z"/>
                        <path d="M4590 12545 l0 -255 -255 0 -255 0 0 -275 0 -275 255 0 255 0 0 -235
0 -235 -255 0 -255 0 0 -275 0 -275 510 0 510 0 0 -765 0 -765 280 0 280 0 0
765 0 765 230 0 230 0 0 -255 0 -255 280 0 280 0 0 255 0 255 230 0 230 0 0
-255 0 -255 255 0 255 0 0 -235 0 -235 -252 -2 -253 -3 -3 -272 -2 -273 280 0
280 0 0 255 0 255 230 -2 231 -3 0 -252 0 -253 279 0 280 0 0 785 0 785 -277
-2 -278 -3 0 -253 0 -252 -232 0 -233 0 0 490 0 490 510 0 510 0 0 275 0 275
-255 0 -255 0 0 235 0 235 255 0 255 0 0 275 0 275 -280 0 -281 0 1 -252 1
-253 -255 -3 -256 -2 0 -255 0 -255 -255 0 -255 0 0 -255 0 -255 -255 0 -255
0 0 -255 0 -255 -230 0 -230 0 0 490 0 490 255 0 255 0 0 255 0 255 255 0 255
0 0 275 0 275 -280 0 -280 0 0 -255 0 -255 -510 0 -510 0 0 -255 0 -255 -230
0 -230 0 0 510 0 510 -280 0 -280 0 0 -255z m1020 -1550 l0 -235 -230 0 -230
0 0 235 0 235 230 0 230 0 0 -235z"/>
                        <path d="M9188 10995 l-3 -1805 1808 0 1807 0 0 1805 0 1805 -1805 0 -1805 0
-2 -1805z m3062 0 l0 -1255 -1255 0 -1255 0 0 1255 0 1255 1255 0 1255 0 0
-1255z"/>
                        <path d="M10210 10995 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z"/>
                        <path d="M4080 9720 l0 -530 280 0 280 0 -3 528 -2 527 -277 3 -278 2 0 -530z"/>
                        <path d="M6122 8953 l3 -788 1018 -2 1018 -3 2 -230 2 -230 -255 -2 -255 -3 0
-250 0 -250 -255 -5 -255 -5 -3 -252 -2 -253 -485 0 -485 0 0 233 0 232 252 0
253 0 0 275 0 275 -532 3 -533 2 0 -255 0 -255 -232 0 -233 0 3 487 2 488 253
0 252 0 0 275 0 275 -1297 3 -1298 2 0 -255 0 -255 -235 0 -235 0 0 255 0 255
-1295 0 -1295 0 0 -280 0 -281 510 3 510 3 0 -232 0 -233 -255 0 -255 0 0
-255 0 -255 -255 0 -255 0 0 -280 0 -280 530 0 530 0 0 510 0 510 235 0 235 0
0 -740 0 -740 -255 0 -255 0 0 -255 0 -255 -255 0 -255 0 0 -790 0 -790 275 0
275 0 0 765 0 765 235 0 235 0 0 -255 0 -255 275 0 275 0 0 280 0 280 -255 0
-255 0 0 230 0 230 1000 0 1000 0 0 -230 0 -230 -507 -2 -508 -3 -5 -510 -5
-510 -505 0 -505 0 -3 -278 -2 -277 530 0 530 0 0 255 0 255 235 0 235 0 0
-255 0 -255 275 0 275 0 0 280 0 279 -252 0 -253 0 -3 231 -2 230 1255 0 1255
0 0 -255 0 -255 255 0 255 0 0 -232 0 -233 -252 0 -253 0 -3 -257 -2 -258
-230 0 -230 0 -2 513 -3 512 -275 0 -275 0 -5 -255 -5 -255 -250 0 -250 0 -3
-533 -2 -532 277 2 278 3 0 252 0 253 233 0 232 0 0 -490 0 -490 -510 0 -510
0 0 -1295 0 -1295 1810 0 1810 0 0 275 0 275 -765 0 -765 0 0 255 0 255 -280
0 -280 0 0 -255 0 -255 -485 2 -485 3 -3 233 -2 232 258 0 257 0 0 765 0 765
740 0 740 0 0 -765 0 -765 768 0 767 0 0 -252 0 -253 253 -5 253 -5 -1 -252
-1 -253 281 0 280 0 0 530 0 530 -510 0 -510 0 0 490 0 490 233 0 232 0 0
-252 0 -253 513 -3 512 -2 0 -765 0 -765 1550 0 1550 0 0 1040 0 1040 -510 0
-510 0 0 255 0 255 -255 0 -255 0 0 235 0 235 765 0 765 0 0 275 0 275 -510 0
-510 0 0 515 0 516 -255 -3 -255 -3 0 743 0 742 235 0 235 0 0 -510 0 -510
255 0 255 0 0 -255 0 -255 275 0 275 0 0 535 0 535 -255 0 -255 0 0 230 0 230
255 0 255 0 0 790 0 790 -255 0 -255 0 0 510 0 510 -275 0 -275 0 0 -790 0
-790 255 0 255 0 0 -230 0 -230 -510 0 -510 0 0 -255 0 -255 -235 0 -235 0 0
255 0 255 -255 0 -255 0 0 230 0 230 510 0 510 0 0 280 0 280 -510 0 -510 0 0
510 0 510 -275 0 -275 0 0 -510 0 -510 -235 0 -235 0 0 510 0 510 -277 -2
-278 -3 0 -253 0 -252 -232 0 -233 0 0 255 0 255 -765 0 -765 0 0 510 0 510
-280 0 -280 0 2 -787z m-3572 -1043 l5 -255 252 -3 253 -2 2 -253 3 -252 253
-3 252 -2 0 -230 0 -230 -490 0 -490 0 0 255 0 255 -255 0 -255 0 0 255 0 255
-255 0 -255 0 0 228 c0 126 2 231 4 233 2 2 222 4 488 4 l483 0 5 -255z m1530
-232 l0 -488 -235 0 -235 0 0 255 0 255 -255 0 -255 0 0 228 c0 126 2 231 4
233 2 2 223 4 490 4 l486 0 0 -487z m4595 -258 l0 -230 -232 0 -233 0 0 230 0
230 233 0 232 0 0 -230z m-510 -533 l0 -252 513 -3 512 -2 0 -255 0 -255 255
0 255 0 -2 -740 -3 -740 -488 -3 -487 -2 0 233 0 232 255 0 255 0 -2 278 -3
277 -252 3 -253 2 0 255 0 255 -277 -2 -278 -3 0 -252 0 -253 -232 0 -233 0 0
740 0 740 233 0 232 0 0 -253z m1535 23 l0 -230 -235 0 -235 0 0 230 0 230
235 0 235 0 0 -230z m-4090 -510 l0 -230 -232 0 -233 0 0 230 0 230 233 0 232
0 0 -230z m-510 -510 l0 -230 -232 0 -233 0 0 230 0 230 233 0 232 0 0 -230z
m1022 -22 l3 -253 252 -3 253 -2 2 -253 3 -252 278 -3 277 -2 0 255 0 255 233
0 232 0 -3 -487 -2 -488 -738 0 -737 0 -5 255 -5 255 -252 3 -253 2 0 485 0
485 230 0 230 0 2 -252z m1018 22 l0 -230 -230 0 -230 0 0 230 0 230 230 0
230 0 0 -230z m3580 0 l0 -230 -235 0 -235 0 0 230 0 230 235 0 235 0 0 -230z
m-2 -1020 l-3 -231 -233 -2 -232 -2 0 233 0 232 235 0 235 0 -2 -230z m510
-510 l-3 -231 -233 -2 -232 -2 0 233 0 232 235 0 235 0 -2 -230z m-4086 -787
l3 -508 278 -3 277 -2 0 255 0 255 233 0 232 0 -2 -487 -3 -488 -255 -3 -255
-2 0 -510 0 -510 -230 0 -230 0 0 510 0 510 -255 0 -255 0 0 510 0 510 -255 0
-255 0 0 235 0 235 485 0 485 0 2 -507z m3066 -235 l-3 -743 -742 -3 -743 -2
0 745 0 745 745 0 745 0 -2 -742z m-4088 -3 l0 -235 -230 0 -230 0 0 235 0
235 230 0 230 0 0 -235z m5110 -1785 l0 -490 -490 0 -490 0 0 235 0 235 255 0
255 0 0 255 0 255 235 0 235 0 0 -490z m1020 -510 l0 -490 -490 0 -490 0 0
235 0 235 255 0 255 0 0 255 0 255 235 0 235 0 0 -490z"/>
                        <path d="M9188 3335 l3 -275 274 0 275 0 0 275 0 275 -277 0 -278 0 3 -275z"/>
                        <path d="M10720 8440 l0 -281 273 3 272 3 3 278 2 277 -275 0 -275 0 0 -280z"/>
                        <path d="M0 1805 l0 -1805 1805 0 1805 0 2 1805 3 1805 -1807 0 -1808 0 0
-1805z m3060 0 l0 -1255 -1255 0 -1255 0 0 1255 0 1255 1255 0 1255 0 0 -1255z"/>
                        <path d="M1020 1805 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z"/>
                        <path d="M5610 1805 l0 -275 280 0 280 0 0 275 0 275 -280 0 -280 0 0 -275z"/>
                    </g>
                </svg>
                <img src={treat} className="treat"/>
            </div>
            <div className="About_title About_title__bottom">
                <h2 className="About_title_h2">
                    Ferdex
                </h2>
                <svg className="qr_code" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 1280.000000"
                     preserveAspectRatio="xMidYMid meet">
                    <metadata>
                        Created by potrace 1.15, written by Peter Selinger 2001-2017
                    </metadata>
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                       fill="#9DE7F0" stroke="none">
                        <path d="M0 10995 l0 -1805 1808 0 1807 0 -3 1805 -2 1805 -1805 0 -1805 0 0
-1805z m3060 0 l0 -1255 -1255 0 -1255 0 0 1255 0 1255 1255 0 1255 0 0 -1255z"/>
                        <path d="M1020 10995 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z"/>
                        <path d="M4590 12545 l0 -255 -255 0 -255 0 0 -275 0 -275 255 0 255 0 0 -235
0 -235 -255 0 -255 0 0 -275 0 -275 510 0 510 0 0 -765 0 -765 280 0 280 0 0
765 0 765 230 0 230 0 0 -255 0 -255 280 0 280 0 0 255 0 255 230 0 230 0 0
-255 0 -255 255 0 255 0 0 -235 0 -235 -252 -2 -253 -3 -3 -272 -2 -273 280 0
280 0 0 255 0 255 230 -2 231 -3 0 -252 0 -253 279 0 280 0 0 785 0 785 -277
-2 -278 -3 0 -253 0 -252 -232 0 -233 0 0 490 0 490 510 0 510 0 0 275 0 275
-255 0 -255 0 0 235 0 235 255 0 255 0 0 275 0 275 -280 0 -281 0 1 -252 1
-253 -255 -3 -256 -2 0 -255 0 -255 -255 0 -255 0 0 -255 0 -255 -255 0 -255
0 0 -255 0 -255 -230 0 -230 0 0 490 0 490 255 0 255 0 0 255 0 255 255 0 255
0 0 275 0 275 -280 0 -280 0 0 -255 0 -255 -510 0 -510 0 0 -255 0 -255 -230
0 -230 0 0 510 0 510 -280 0 -280 0 0 -255z m1020 -1550 l0 -235 -230 0 -230
0 0 235 0 235 230 0 230 0 0 -235z"/>
                        <path d="M9188 10995 l-3 -1805 1808 0 1807 0 0 1805 0 1805 -1805 0 -1805 0
-2 -1805z m3062 0 l0 -1255 -1255 0 -1255 0 0 1255 0 1255 1255 0 1255 0 0
-1255z"/>
                        <path d="M10210 10995 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z"/>
                        <path d="M4080 9720 l0 -530 280 0 280 0 -3 528 -2 527 -277 3 -278 2 0 -530z"/>
                        <path d="M6122 8953 l3 -788 1018 -2 1018 -3 2 -230 2 -230 -255 -2 -255 -3 0
-250 0 -250 -255 -5 -255 -5 -3 -252 -2 -253 -485 0 -485 0 0 233 0 232 252 0
253 0 0 275 0 275 -532 3 -533 2 0 -255 0 -255 -232 0 -233 0 3 487 2 488 253
0 252 0 0 275 0 275 -1297 3 -1298 2 0 -255 0 -255 -235 0 -235 0 0 255 0 255
-1295 0 -1295 0 0 -280 0 -281 510 3 510 3 0 -232 0 -233 -255 0 -255 0 0
-255 0 -255 -255 0 -255 0 0 -280 0 -280 530 0 530 0 0 510 0 510 235 0 235 0
0 -740 0 -740 -255 0 -255 0 0 -255 0 -255 -255 0 -255 0 0 -790 0 -790 275 0
275 0 0 765 0 765 235 0 235 0 0 -255 0 -255 275 0 275 0 0 280 0 280 -255 0
-255 0 0 230 0 230 1000 0 1000 0 0 -230 0 -230 -507 -2 -508 -3 -5 -510 -5
-510 -505 0 -505 0 -3 -278 -2 -277 530 0 530 0 0 255 0 255 235 0 235 0 0
-255 0 -255 275 0 275 0 0 280 0 279 -252 0 -253 0 -3 231 -2 230 1255 0 1255
0 0 -255 0 -255 255 0 255 0 0 -232 0 -233 -252 0 -253 0 -3 -257 -2 -258
-230 0 -230 0 -2 513 -3 512 -275 0 -275 0 -5 -255 -5 -255 -250 0 -250 0 -3
-533 -2 -532 277 2 278 3 0 252 0 253 233 0 232 0 0 -490 0 -490 -510 0 -510
0 0 -1295 0 -1295 1810 0 1810 0 0 275 0 275 -765 0 -765 0 0 255 0 255 -280
0 -280 0 0 -255 0 -255 -485 2 -485 3 -3 233 -2 232 258 0 257 0 0 765 0 765
740 0 740 0 0 -765 0 -765 768 0 767 0 0 -252 0 -253 253 -5 253 -5 -1 -252
-1 -253 281 0 280 0 0 530 0 530 -510 0 -510 0 0 490 0 490 233 0 232 0 0
-252 0 -253 513 -3 512 -2 0 -765 0 -765 1550 0 1550 0 0 1040 0 1040 -510 0
-510 0 0 255 0 255 -255 0 -255 0 0 235 0 235 765 0 765 0 0 275 0 275 -510 0
-510 0 0 515 0 516 -255 -3 -255 -3 0 743 0 742 235 0 235 0 0 -510 0 -510
255 0 255 0 0 -255 0 -255 275 0 275 0 0 535 0 535 -255 0 -255 0 0 230 0 230
255 0 255 0 0 790 0 790 -255 0 -255 0 0 510 0 510 -275 0 -275 0 0 -790 0
-790 255 0 255 0 0 -230 0 -230 -510 0 -510 0 0 -255 0 -255 -235 0 -235 0 0
255 0 255 -255 0 -255 0 0 230 0 230 510 0 510 0 0 280 0 280 -510 0 -510 0 0
510 0 510 -275 0 -275 0 0 -510 0 -510 -235 0 -235 0 0 510 0 510 -277 -2
-278 -3 0 -253 0 -252 -232 0 -233 0 0 255 0 255 -765 0 -765 0 0 510 0 510
-280 0 -280 0 2 -787z m-3572 -1043 l5 -255 252 -3 253 -2 2 -253 3 -252 253
-3 252 -2 0 -230 0 -230 -490 0 -490 0 0 255 0 255 -255 0 -255 0 0 255 0 255
-255 0 -255 0 0 228 c0 126 2 231 4 233 2 2 222 4 488 4 l483 0 5 -255z m1530
-232 l0 -488 -235 0 -235 0 0 255 0 255 -255 0 -255 0 0 228 c0 126 2 231 4
233 2 2 223 4 490 4 l486 0 0 -487z m4595 -258 l0 -230 -232 0 -233 0 0 230 0
230 233 0 232 0 0 -230z m-510 -533 l0 -252 513 -3 512 -2 0 -255 0 -255 255
0 255 0 -2 -740 -3 -740 -488 -3 -487 -2 0 233 0 232 255 0 255 0 -2 278 -3
277 -252 3 -253 2 0 255 0 255 -277 -2 -278 -3 0 -252 0 -253 -232 0 -233 0 0
740 0 740 233 0 232 0 0 -253z m1535 23 l0 -230 -235 0 -235 0 0 230 0 230
235 0 235 0 0 -230z m-4090 -510 l0 -230 -232 0 -233 0 0 230 0 230 233 0 232
0 0 -230z m-510 -510 l0 -230 -232 0 -233 0 0 230 0 230 233 0 232 0 0 -230z
m1022 -22 l3 -253 252 -3 253 -2 2 -253 3 -252 278 -3 277 -2 0 255 0 255 233
0 232 0 -3 -487 -2 -488 -738 0 -737 0 -5 255 -5 255 -252 3 -253 2 0 485 0
485 230 0 230 0 2 -252z m1018 22 l0 -230 -230 0 -230 0 0 230 0 230 230 0
230 0 0 -230z m3580 0 l0 -230 -235 0 -235 0 0 230 0 230 235 0 235 0 0 -230z
m-2 -1020 l-3 -231 -233 -2 -232 -2 0 233 0 232 235 0 235 0 -2 -230z m510
-510 l-3 -231 -233 -2 -232 -2 0 233 0 232 235 0 235 0 -2 -230z m-4086 -787
l3 -508 278 -3 277 -2 0 255 0 255 233 0 232 0 -2 -487 -3 -488 -255 -3 -255
-2 0 -510 0 -510 -230 0 -230 0 0 510 0 510 -255 0 -255 0 0 510 0 510 -255 0
-255 0 0 235 0 235 485 0 485 0 2 -507z m3066 -235 l-3 -743 -742 -3 -743 -2
0 745 0 745 745 0 745 0 -2 -742z m-4088 -3 l0 -235 -230 0 -230 0 0 235 0
235 230 0 230 0 0 -235z m5110 -1785 l0 -490 -490 0 -490 0 0 235 0 235 255 0
255 0 0 255 0 255 235 0 235 0 0 -490z m1020 -510 l0 -490 -490 0 -490 0 0
235 0 235 255 0 255 0 0 255 0 255 235 0 235 0 0 -490z"/>
                        <path d="M9188 3335 l3 -275 274 0 275 0 0 275 0 275 -277 0 -278 0 3 -275z"/>
                        <path d="M10720 8440 l0 -281 273 3 272 3 3 278 2 277 -275 0 -275 0 0 -280z"/>
                        <path d="M0 1805 l0 -1805 1805 0 1805 0 2 1805 3 1805 -1807 0 -1808 0 0
-1805z m3060 0 l0 -1255 -1255 0 -1255 0 0 1255 0 1255 1255 0 1255 0 0 -1255z"/>
                        <path d="M1020 1805 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z"/>
                        <path d="M5610 1805 l0 -275 280 0 280 0 0 275 0 275 -280 0 -280 0 0 -275z"/>
                    </g>
                </svg>
                <img src={treat} className="treat"/>
                <img src={star} className="star"/>
            </div>
            <div className="About_title About_title__left">
                <h2 className="About_title_h2">
                    Ferdex
                </h2>
                <svg className="qr_code" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 1280.000000"
                     preserveAspectRatio="xMidYMid meet">
                    <metadata>
                        Created by potrace 1.15, written by Peter Selinger 2001-2017
                    </metadata>
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                       fill="#9DE7F0" stroke="none">
                        <path d="M0 10995 l0 -1805 1808 0 1807 0 -3 1805 -2 1805 -1805 0 -1805 0 0
-1805z m3060 0 l0 -1255 -1255 0 -1255 0 0 1255 0 1255 1255 0 1255 0 0 -1255z"/>
                        <path d="M1020 10995 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z"/>
                        <path d="M4590 12545 l0 -255 -255 0 -255 0 0 -275 0 -275 255 0 255 0 0 -235
0 -235 -255 0 -255 0 0 -275 0 -275 510 0 510 0 0 -765 0 -765 280 0 280 0 0
765 0 765 230 0 230 0 0 -255 0 -255 280 0 280 0 0 255 0 255 230 0 230 0 0
-255 0 -255 255 0 255 0 0 -235 0 -235 -252 -2 -253 -3 -3 -272 -2 -273 280 0
280 0 0 255 0 255 230 -2 231 -3 0 -252 0 -253 279 0 280 0 0 785 0 785 -277
-2 -278 -3 0 -253 0 -252 -232 0 -233 0 0 490 0 490 510 0 510 0 0 275 0 275
-255 0 -255 0 0 235 0 235 255 0 255 0 0 275 0 275 -280 0 -281 0 1 -252 1
-253 -255 -3 -256 -2 0 -255 0 -255 -255 0 -255 0 0 -255 0 -255 -255 0 -255
0 0 -255 0 -255 -230 0 -230 0 0 490 0 490 255 0 255 0 0 255 0 255 255 0 255
0 0 275 0 275 -280 0 -280 0 0 -255 0 -255 -510 0 -510 0 0 -255 0 -255 -230
0 -230 0 0 510 0 510 -280 0 -280 0 0 -255z m1020 -1550 l0 -235 -230 0 -230
0 0 235 0 235 230 0 230 0 0 -235z"/>
                        <path d="M9188 10995 l-3 -1805 1808 0 1807 0 0 1805 0 1805 -1805 0 -1805 0
-2 -1805z m3062 0 l0 -1255 -1255 0 -1255 0 0 1255 0 1255 1255 0 1255 0 0
-1255z"/>
                        <path d="M10210 10995 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z"/>
                        <path d="M4080 9720 l0 -530 280 0 280 0 -3 528 -2 527 -277 3 -278 2 0 -530z"/>
                        <path d="M6122 8953 l3 -788 1018 -2 1018 -3 2 -230 2 -230 -255 -2 -255 -3 0
-250 0 -250 -255 -5 -255 -5 -3 -252 -2 -253 -485 0 -485 0 0 233 0 232 252 0
253 0 0 275 0 275 -532 3 -533 2 0 -255 0 -255 -232 0 -233 0 3 487 2 488 253
0 252 0 0 275 0 275 -1297 3 -1298 2 0 -255 0 -255 -235 0 -235 0 0 255 0 255
-1295 0 -1295 0 0 -280 0 -281 510 3 510 3 0 -232 0 -233 -255 0 -255 0 0
-255 0 -255 -255 0 -255 0 0 -280 0 -280 530 0 530 0 0 510 0 510 235 0 235 0
0 -740 0 -740 -255 0 -255 0 0 -255 0 -255 -255 0 -255 0 0 -790 0 -790 275 0
275 0 0 765 0 765 235 0 235 0 0 -255 0 -255 275 0 275 0 0 280 0 280 -255 0
-255 0 0 230 0 230 1000 0 1000 0 0 -230 0 -230 -507 -2 -508 -3 -5 -510 -5
-510 -505 0 -505 0 -3 -278 -2 -277 530 0 530 0 0 255 0 255 235 0 235 0 0
-255 0 -255 275 0 275 0 0 280 0 279 -252 0 -253 0 -3 231 -2 230 1255 0 1255
0 0 -255 0 -255 255 0 255 0 0 -232 0 -233 -252 0 -253 0 -3 -257 -2 -258
-230 0 -230 0 -2 513 -3 512 -275 0 -275 0 -5 -255 -5 -255 -250 0 -250 0 -3
-533 -2 -532 277 2 278 3 0 252 0 253 233 0 232 0 0 -490 0 -490 -510 0 -510
0 0 -1295 0 -1295 1810 0 1810 0 0 275 0 275 -765 0 -765 0 0 255 0 255 -280
0 -280 0 0 -255 0 -255 -485 2 -485 3 -3 233 -2 232 258 0 257 0 0 765 0 765
740 0 740 0 0 -765 0 -765 768 0 767 0 0 -252 0 -253 253 -5 253 -5 -1 -252
-1 -253 281 0 280 0 0 530 0 530 -510 0 -510 0 0 490 0 490 233 0 232 0 0
-252 0 -253 513 -3 512 -2 0 -765 0 -765 1550 0 1550 0 0 1040 0 1040 -510 0
-510 0 0 255 0 255 -255 0 -255 0 0 235 0 235 765 0 765 0 0 275 0 275 -510 0
-510 0 0 515 0 516 -255 -3 -255 -3 0 743 0 742 235 0 235 0 0 -510 0 -510
255 0 255 0 0 -255 0 -255 275 0 275 0 0 535 0 535 -255 0 -255 0 0 230 0 230
255 0 255 0 0 790 0 790 -255 0 -255 0 0 510 0 510 -275 0 -275 0 0 -790 0
-790 255 0 255 0 0 -230 0 -230 -510 0 -510 0 0 -255 0 -255 -235 0 -235 0 0
255 0 255 -255 0 -255 0 0 230 0 230 510 0 510 0 0 280 0 280 -510 0 -510 0 0
510 0 510 -275 0 -275 0 0 -510 0 -510 -235 0 -235 0 0 510 0 510 -277 -2
-278 -3 0 -253 0 -252 -232 0 -233 0 0 255 0 255 -765 0 -765 0 0 510 0 510
-280 0 -280 0 2 -787z m-3572 -1043 l5 -255 252 -3 253 -2 2 -253 3 -252 253
-3 252 -2 0 -230 0 -230 -490 0 -490 0 0 255 0 255 -255 0 -255 0 0 255 0 255
-255 0 -255 0 0 228 c0 126 2 231 4 233 2 2 222 4 488 4 l483 0 5 -255z m1530
-232 l0 -488 -235 0 -235 0 0 255 0 255 -255 0 -255 0 0 228 c0 126 2 231 4
233 2 2 223 4 490 4 l486 0 0 -487z m4595 -258 l0 -230 -232 0 -233 0 0 230 0
230 233 0 232 0 0 -230z m-510 -533 l0 -252 513 -3 512 -2 0 -255 0 -255 255
0 255 0 -2 -740 -3 -740 -488 -3 -487 -2 0 233 0 232 255 0 255 0 -2 278 -3
277 -252 3 -253 2 0 255 0 255 -277 -2 -278 -3 0 -252 0 -253 -232 0 -233 0 0
740 0 740 233 0 232 0 0 -253z m1535 23 l0 -230 -235 0 -235 0 0 230 0 230
235 0 235 0 0 -230z m-4090 -510 l0 -230 -232 0 -233 0 0 230 0 230 233 0 232
0 0 -230z m-510 -510 l0 -230 -232 0 -233 0 0 230 0 230 233 0 232 0 0 -230z
m1022 -22 l3 -253 252 -3 253 -2 2 -253 3 -252 278 -3 277 -2 0 255 0 255 233
0 232 0 -3 -487 -2 -488 -738 0 -737 0 -5 255 -5 255 -252 3 -253 2 0 485 0
485 230 0 230 0 2 -252z m1018 22 l0 -230 -230 0 -230 0 0 230 0 230 230 0
230 0 0 -230z m3580 0 l0 -230 -235 0 -235 0 0 230 0 230 235 0 235 0 0 -230z
m-2 -1020 l-3 -231 -233 -2 -232 -2 0 233 0 232 235 0 235 0 -2 -230z m510
-510 l-3 -231 -233 -2 -232 -2 0 233 0 232 235 0 235 0 -2 -230z m-4086 -787
l3 -508 278 -3 277 -2 0 255 0 255 233 0 232 0 -2 -487 -3 -488 -255 -3 -255
-2 0 -510 0 -510 -230 0 -230 0 0 510 0 510 -255 0 -255 0 0 510 0 510 -255 0
-255 0 0 235 0 235 485 0 485 0 2 -507z m3066 -235 l-3 -743 -742 -3 -743 -2
0 745 0 745 745 0 745 0 -2 -742z m-4088 -3 l0 -235 -230 0 -230 0 0 235 0
235 230 0 230 0 0 -235z m5110 -1785 l0 -490 -490 0 -490 0 0 235 0 235 255 0
255 0 0 255 0 255 235 0 235 0 0 -490z m1020 -510 l0 -490 -490 0 -490 0 0
235 0 235 255 0 255 0 0 255 0 255 235 0 235 0 0 -490z"/>
                        <path d="M9188 3335 l3 -275 274 0 275 0 0 275 0 275 -277 0 -278 0 3 -275z"/>
                        <path d="M10720 8440 l0 -281 273 3 272 3 3 278 2 277 -275 0 -275 0 0 -280z"/>
                        <path d="M0 1805 l0 -1805 1805 0 1805 0 2 1805 3 1805 -1807 0 -1808 0 0
-1805z m3060 0 l0 -1255 -1255 0 -1255 0 0 1255 0 1255 1255 0 1255 0 0 -1255z"/>
                        <path d="M1020 1805 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z"/>
                        <path d="M5610 1805 l0 -275 280 0 280 0 0 275 0 275 -280 0 -280 0 0 -275z"/>
                    </g>
                </svg>
                <img src={treat} className="treat"/>
            </div>
            <div className="About_main"/>
            <img src={Signature} alt="" className="About_signature"/>
            <img src={Circle} alt="Circle" className="About_circle"/>
        </div>
    );
}

export default About;
