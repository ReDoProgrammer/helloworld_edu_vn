{/* <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="thumb after-left-top">
                    <img src="assets/img/banner/1.png" alt="img">
                </div>
            </div>
            <div class="col-lg-6 align-self-center">
                <div class="banner-details mt-4 mt-lg-0">
                    <div class="post-meta-single">
                        <ul>
                            <li><a class="tag-base tag-blue" href="#">Tech</a></li>
                            <li class="date"><i class="fa fa-clock-o"></i>08.22.2020</li>
                        </ul>
                    </div>
                    <h2>ReZoom outage left some people locked out.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <a class="btn btn-blue" href="#">Read More</a>
                </div>
            </div>
        </div>
    </div> */}

const banner = React.createElement(
    'div', {
    className: 'container'
},
React.createElement(
    'div',{
        className:'row'
    },
    React.createElement(
        'div',{
            className:'ol-lg-6'
        },
        React.createElement(
            'div',{
                className:'thumb after-left-top'
            },
            React.createElement(
                'img',{
                    src:'assets/img/banner/1.png',
                    alt:'img'
                }
            )
        )
    ),
    React.createElement(
        'div',{
            className:'col-lg-6 align-self-center'
        },
        React.createElement(
            'div',{
                className:'banner-details mt-4 mt-lg-0'
            },
            React.createElement(
                'div',{
                    className:'post-meta-single'
                },
                React.createElement(
                    'ul',{},
                    React.createElement(
                        'li',null,
                        React.createElement(
                            'a',{
                                className:'tag-base tag-blue',
                                href:'#'
                            },'Tech'
                        )
                    ),
                    React.createElement(
                        'li',{
                            className:'date'
                        },
                        React.createElement(
                            'i',{
                                className:'fa fa-clock-o'
                            },'08.22.2020'
                        )
                    )
                )
            ),
            React.createElement(
                'h2',null,'ReZoom outage left some people locked out.'
            ),
            React.createElement(
                'p',null,'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            ),
            React.createElement(
                'a',{
                    className:'btn btn-blue',
                    href:'#'
                },'Read More'
            )
        )
    )
)

)

const r1_banner = document.getElementById('r1_banner');
ReactDOM.render(banner, r1_banner);