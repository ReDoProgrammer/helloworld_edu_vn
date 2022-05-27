const latest = document.getElementById('latest');

const latest_posts = [
    {
        title: 'A Comparison of the Sony FE 85mm f/1.4 GM and Sigma',
        img: 'assets/img/post/9.png',
        timespan: '08.22.2020'
    },
    {
        title: 'Rocket Lab will resume launches no sooner than',
        img: 'assets/img/post/10.png',
        timespan: '08.22.2020'
    },
    {
        title: 'P2P Exchanges in Africa Pivot: Nigeria and Kenya the',
        img: 'assets/img/post/11.png',
        timespan: '08.22.2020'
    },
    {
        title: 'Bitmex Restricts Ontario Residents as Mandated by',
        img: 'assets/img/post/12.png',
        timespan: '08.22.2020'
    },
    {
        title: 'The Bitcoin Network Now 7 Plants Worth of Power',
        img: 'assets/img/post/13.png',
        timespan: '08.22.2020'
    }
];

const trending_videos = [
    {
        img: 'assets/img/post/list/1.png',
        timespan: '08.22.2020',
        title: 'Important to rate more liquidity'
    },
    {
        img: 'assets/img/post/list/2.png',
        timespan: '08.22.2020',
        title: 'Sounds like John got the Josh'
    },
    {
        img: 'assets/img/post/list/3.png',
        timespan: '08.22.2020',
        title: 'Grayscale\'s and Bitcoin Trusts'
    },
    {
        img: 'assets/img/post/list/4.png',
        timespan: '08.22.2020',
        title: 'Sounds like John got the Josh'
    },
    {
        img: 'assets/img/post/list/5.png',
        timespan: '08.22.2020',
        title: 'Grayscale\'s and Bitcoin Trusts'
    }
];

const lp = React.createElement(
    'div', {
    className: 'container'
},
    React.createElement(
        'div', {
        className: 'row'
    },
        React.createElement(
            'div', {
            className: 'col-lg-3 col-sm-6'
        },
            React.createElement(
                'div', {
                className: 'single-post-wrap style-overlay-bg'
            },
                React.createElement(
                    'div', {
                    className: 'thumb'
                },
                    React.createElement(
                        'img', {
                        src: 'assets/img/post/9.png',
                        alt: 'img'
                    }
                    )
                ),
                React.createElement(
                    'div', {
                    className: 'details'
                },
                    React.createElement(
                        'div', {
                        className: 'post-meta-single mb-3'
                    },
                        React.createElement(
                            'ul', null,
                            React.createElement(
                                'li', null,
                                React.createElement(
                                    'a', {
                                    className: 'tag-base tag-blue',
                                    href: '#'
                                }, 'fashion'
                                )
                            ),
                            React.createElement(
                                'li', null,
                                React.createElement(
                                    'p', null,
                                    React.createElement(
                                        'i', {
                                        className: 'fa fa-clock-o'
                                    }
                                    ), '08.22.2020'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'h6', {
                        className: 'title'
                    },
                        React.createElement(
                            'a', {
                            href: '#'
                        }, 'A Comparison of the Sony FE 85mm f/1.4 GM and Sigma'
                        )
                    )
                )
            )
        ),
        React.createElement(
            'div', {
            className: 'col-lg-3 col-sm-6'
        },
            React.createElement(
                'div', {
                className: 'single-post-wrap'
            },
                React.createElement(
                    'div', {
                    className: 'thumb'
                },
                    React.createElement(
                        'img', {
                        src: latest_posts[1].img,
                        alt: 'img'
                    }
                    ),
                    React.createElement(
                        'p', {
                        className: 'btn-date'
                    },
                        React.createElement(
                            'i', {
                            className: 'fa fa-clock-o'
                        }
                        ), latest_posts[1].timespan
                    )
                ),
                React.createElement('div', {
                    className: 'details'
                },
                    React.createElement(
                        'h6', {
                        className: 'title'
                    },
                        React.createElement(
                            'a', {
                            href: '#'
                        }), latest_posts[1].title
                    )
                )
            ),
            React.createElement(
                'div', {
                className: 'single-post-wrap'
            },
                React.createElement(
                    'div', {
                    className: 'thumb'
                },
                    React.createElement(
                        'img', {
                        src: latest_posts[2].img,
                        alt: 'img'
                    }
                    ),
                    React.createElement(
                        'p', {
                        className: 'btn-date'
                    },
                        React.createElement(
                            'i', {
                            className: 'fa fa-clock-o'
                        }
                        ), latest_posts[2].timespan
                    )
                ),
                React.createElement('div', {
                    className: 'details'
                },
                    React.createElement(
                        'h6', {
                        className: 'title'
                    },
                        React.createElement(
                            'a', {
                            href: '#'
                        }), latest_posts[2].title
                    )
                )
            )
        ),
        React.createElement(
            'div', {
            className: 'col-lg-3 col-sm-6'
        },
            React.createElement(
                'div', {
                className: 'single-post-wrap'
            },
                React.createElement(
                    'div', {
                    className: 'thumb'
                },
                    React.createElement(
                        'img', {
                        src: latest_posts[3].img,
                        alt: 'img'
                    }
                    ),
                    React.createElement(
                        'p', {
                        className: 'btn-date'
                    },
                        React.createElement(
                            'i', {
                            className: 'fa fa-clock-o'
                        }
                        ), latest_posts[3].timespan
                    )
                ),
                React.createElement('div', {
                    className: 'details'
                },
                    React.createElement(
                        'h6', {
                        className: 'title'
                    },
                        React.createElement(
                            'a', {
                            href: '#'
                        }), latest_posts[3].title
                    )
                )
            ),
            React.createElement(
                'div', {
                className: 'single-post-wrap'
            },
                React.createElement(
                    'div', {
                    className: 'thumb'
                },
                    React.createElement(
                        'img', {
                        src: latest_posts[4].img,
                        alt: 'img'
                    }
                    ),
                    React.createElement(
                        'p', {
                        className: 'btn-date'
                    },
                        React.createElement(
                            'i', {
                            className: 'fa fa-clock-o'
                        }
                        ), latest_posts[4].timespan
                    )
                ),
                React.createElement('div', {
                    className: 'details'
                },
                    React.createElement(
                        'h6', {
                        className: 'title'
                    },
                        React.createElement(
                            'a', {
                            href: '#'
                        }), latest_posts[4].title
                    )
                )
            )
        ),
        React.createElement(
            'div', {
            className: 'col-lg-3 col-sm-6'
        },
            React.createElement(
                'div', {
                className: 'trending-post style-box'
            },
                React.createElement(
                    'div', {
                    className: 'section-title'
                },
                    React.createElement(
                        'h6', {
                        className: 'title'
                    }, 'Trending Videos'
                    )
                ),
                React.createElement(
                    'div', {
                    className: 'post-slider owl-carousel owl-loaded owl-drag'
                },
                    React.createElement(
                        'div', {
                        className: 'owl-stage-outer'
                    },
                        React.createElement(
                            'div', {
                            className: 'owl-stage'
                        },
                            React.createElement(
                                'div', {
                                className: 'owl-item cloned'
                            },
                                React.createElement(
                                    'div', {
                                    className: 'item'
                                },

                                    trending_videos.map((v, i) => {
                                        return (
                                            React.createElement(
                                                'div', {
                                                className: 'single-post-list-wrap',
                                                key: i
                                            },
                                                React.createElement(
                                                    'div', {
                                                    className: 'media'
                                                },
                                                    React.createElement(
                                                        'div', {
                                                        className: 'media-left'
                                                    },
                                                        React.createElement(
                                                            'img', {
                                                            src: v.img
                                                        }
                                                        )
                                                    ),
                                                    React.createElement(
                                                        'div', {
                                                        className: 'media-body'
                                                    },
                                                        React.createElement(
                                                            'div', {
                                                            className: 'details'
                                                        },
                                                            React.createElement(
                                                                'div', {
                                                                className: 'post-meta-single'
                                                            },
                                                                React.createElement(
                                                                    'ul', null,
                                                                    React.createElement(
                                                                        'li', null,
                                                                        React.createElement(
                                                                            'i', {
                                                                            className: 'fa fa-clock-o'
                                                                        }
                                                                        ), v.timespan
                                                                    )
                                                                )
                                                            ),
                                                            React.createElement(
                                                                'h6', {
                                                                className: 'title'
                                                            },
                                                                React.createElement(
                                                                    'a', {
                                                                    href: '#'
                                                                }, v.title
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    })


                                )

                            )
                        )
                    )
                )
            )
        )
    )
)

ReactDOM.render(lp, latest);