const r1_carousel = ReactDOM.createRoot(document.getElementById("r1_carousel"));

r1_carousel.render(
  <React.StrictMode>
     <div className="row" >
        <div className="col-lg-3 col-sm-6">
            <div className="single-post-wrap style-white">
                <div className="thumb">
                    <img src="assets/img/post/1.png" alt="img"/>
                        <a className="tag-base tag-blue" href="#">Tech</a>
                </div>
                <div className="details">
                    <h6 className="title"><a href="#">The FAA will test drone detecting technologies in airports this year</a></h6>
                    <div className="post-meta-single mt-3">
                        <ul>
                            <li><i className="fa fa-clock-o"></i>08.22.2020</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6">
            <div className="single-post-wrap style-white">
                <div className="thumb">
                    <img src="assets/img/post/2.png" alt="img"/>
                        <a className="tag-base tag-orange" href="#">Food</a>
                </div>
                <div className="details">
                    <h6 className="title"><a href="#">Rocket Lab will resume launches no sooner than August 27th</a></h6>
                    <div className="post-meta-single mt-3">
                        <ul>
                            <li><i className="fa fa-clock-o"></i>08.22.2020</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6">
            <div className="single-post-wrap style-white">
                <div className="thumb">
                    <img src="assets/img/post/3.png" alt="img"/>
                        <a className="tag-base tag-blue" href="#">Tech</a>
                </div>
                <div className="details">
                    <h6 className="title"><a href="#">Google Drive flaw may attackers fool you into install malware</a></h6>
                    <div className="post-meta-single mt-3">
                        <ul>
                            <li><i className="fa fa-clock-o"></i>08.22.2020</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6">
            <div className="single-post-wrap style-white">
                <div className="thumb">
                    <img src="assets/img/post/4.png" alt="img"/>
                        <a className="tag-base tag-orange" href="#">Food</a>
                </div>
                <div className="details">
                    <h6 className="title"><a href="#">TikTok will sue the US over threatened ban</a></h6>
                    <div className="post-meta-single mt-3">
                        <ul>
                            <li><i className="fa fa-clock-o"></i>08.22.2020</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </React.StrictMode>
);

