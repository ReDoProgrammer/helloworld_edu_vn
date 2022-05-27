const navbar = document.getElementById('navbar');

const nav = React.createElement(

    'div', {
    className: 'topbar-area'
},
    React.createElement(
        'div', {
        className: 'container'
    },
        React.createElement(
            'div', {
            className: 'row justify-content-center'
        },
            React.createElement(
                'div', {
                className: 'col-lg-6 col-md-7 align-self-center'
            },
                React.createElement(
                    'div', {
                    className: 'topbar-menu text-md-left text-center'
                },
                    React.createElement(
                        'ul', {
                        className: 'align-self-center'
                    },
                        React.createElement(
                            'li', null,
                            React.createElement(
                                'a', {
                                href: '#'
                            }, 'Author'
                            )
                        ),
                        React.createElement(
                            'li', null,
                            React.createElement(
                                'a', {
                                href: '#'
                            }, 'Advertisment'
                            )
                        ),
                        React.createElement(
                            'li', null,
                            React.createElement(
                                'a', {
                                href: '#'
                            }, 'Member'
                            )
                        ),
                        React.createElement(
                            'li', null,
                            React.createElement(
                                'a', {
                                href: '#'
                            }, 'Sitemap'
                            )
                        )

                    )
                )
            ),
            React.createElement(
                'div',{
                    className:'col-lg-6 col-md-5 mt-2 mt-md-0 text-md-right text-center'
                },
                React.createElement(
                    'div',{
                        className:'topbar-social'
                    },
                    React.createElement(
                        'div',{
                            className:'topbar-date d-none d-lg-inline-block'
                        },
                        React.createElement(
                            'i',{
                                className:'fa fa-calendar'
                            }
                        ),'Saturday, October 7'
                    ),
                    React.createElement(
                        'ul',{
                            className:'social-area social-area-2'
                        },
                        React.createElement(
                            'li',null,
                            React.createElement(
                                'a',{
                                    className:'facebook-icon',
                                    href:'#'
                                },
                                React.createElement(
                                    'i',{
                                        className:'fa fa-facebook'
                                    }
                                )
                            )
                        ),
                        React.createElement(
                            'li',null,
                            React.createElement(
                                'a',{
                                    className:'twitter-icon',
                                    href:'#'
                                },
                                React.createElement(
                                    'i',{
                                        className:'fa fa-twitter'
                                    }
                                )
                            )
                        ),
                        React.createElement(
                            'li',null,
                            React.createElement(
                                'a',{
                                    className:'youtube-icon',
                                    href:'#'
                                },
                                React.createElement(
                                    'i',{
                                        className:'fa fa-youtube-play'
                                    }
                                )
                            )
                        ),
                        React.createElement(
                            'li',null,
                            React.createElement(
                                'a',{
                                    className:'instagram-icon',
                                    href:'#'
                                },
                                React.createElement(
                                    'i',{
                                        className:'fa fa-instagram'
                                    }
                                )
                            )
                        ),
                        React.createElement(
                            'li',null,
                            React.createElement(
                                'a',{
                                    className:'google-icon',
                                    href:'#'
                                },
                                React.createElement(
                                    'i',{
                                        className:'fa fa-google-plus'
                                    }
                                )
                            )
                        ),

                    )
                )
            )


        )
    )

)

ReactDOM.render(nav, navbar);