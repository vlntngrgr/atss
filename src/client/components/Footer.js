import React from "react";

const Footer = () => {
    return (
        <footer className="">
            <div className="">
                <h5 className="">{"Me contacter"}</h5>
                <figure>
                    <a
                        /* onClick="return gtag_report_conversion('tel: 0497301084');"*/
                        href="tel:+32497301084"
                        className="appel">
                        <img src="images/phone.png" className="" />
                        <span className="">{"0497301084"}</span>
                    </a>
                </figure>
                <figure>
                    <a href="mailto:ats.serrurier@gmail.com">
                        <img src="images/email.png" className="" />
                        {"ats.serrurier@gmail.com"}
                    </a>
                </figure>
                <figure>
                    <a
                        href="https://www.google.com/maps/place/A.T.S+Serrurier/@50.5058067,5.1021583,9z/data=!3m1!4b1!4m5!3m4!1s0x47c05924979e3bbd:0x58f0aaccca360d31!8m2!3d50.5052431!4d5.6569098"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src="images/location.png" className="" />
                        {"Sprimont"}
                    </a>
                </figure>
            </div>
            <div className="">
                <div id="fournisseurs" className="">
                    <img src="images/clickplus.png" className="" />
                    <img src="images/hoppe.png" className="" />
                    <img src="images/dom.png" className="" />
                    <img src="images/hoberg.jpg" className="" />
                    <img src="images/titan.jpg" className="" />
                </div>
                <div className="">
                    <a
                        href="https://www.facebook.com/ats.serrurier/"
                        className=""
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="">
                            <img src="images/facebook.png" className="" />
                        </div>
                        <h5 className="">{"Suivez moi sur Facebook"}</h5>
                    </a>
                </div>
            </div>
            <div className="">
                {"&copy; ATS Serrurier / Vlntngrgr - "}
                <a href="sitemap.html">{"Plan du site - "}</a>
                <a href="cgv.html">{"Conditions d'utilisations - "}</a>
                <a href="disclaimer.html">{"Disclaimer"}</a>
            </div>
        </footer>
    );
};

export default Footer;
