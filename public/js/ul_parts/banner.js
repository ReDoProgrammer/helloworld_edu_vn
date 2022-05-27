const banner = document.getElementById('banner');

const bn = React.createElement(
    'div',{
        className:'banner-inner pt-5'
    },
    React.createElement(
        'div',{
            className:'container'
        },
        React.createElement(
            'div',{
                className:'row'
            },
            React.createElement(
                'div',{
                    className:'col-lg-6'
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
                            'ul',null,
                            React.createElement(
                                'li',{
                                    className:'tag-base tag-blue'
                                },
                                React.createElement(
                                    'a',{
                                        className:'tag-base tag-blue',
                                        href:'#',
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
                        'p',null,'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
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
)