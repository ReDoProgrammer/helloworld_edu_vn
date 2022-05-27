const trending = document.getElementById('trending');

const trending_videos = [
    {
        title: 'The FAA will test drone ',
        timespan: 'December 26, 2018',
        img: 'assets/img/post/5.png',
        url: '#'
    },
    {
        title: 'Flight schedule and quarantine',
        timespan: 'December 26, 2018',
        img: 'assets/img/post/6.png',
        url: '#'
    },
    {
        title: 'Indore bags cleanest city',
        timespan: 'December 26, 2018',
        img: 'assets/img/post/7.png',
        url: '#'
    }
];

const latest_videos = [
    {
        img: 'assets/img/post/list/1.png',
        timespan: '08.22.2020',
        title: 'Himachal Pradesh rules in order to allow tourists',
        url: '#'
    },
    {
        img: 'assets/img/post/list/2.png',
        timespan: '08.22.2020',
        title: 'Online registration, booking for Vaishno Devi ',
        url: '#'
    },
    {
        img: 'assets/img/post/list/3.png',
        timespan: '08.22.2020',
        title: 'Detecting technologies in airports this year',
        url: '#'
    },
    {
        img: 'assets/img/post/list/4.png',
        timespan: '08.22.2020',
        title: 'The FAA will drone detect-ing in airports this year',
        url: '#'
    },
    {
        img: 'assets/img/post/list/5.png',
        timespan: '08.22.2020',
        title: 'Thailand makes it mand-atory for tourists to stay',
        url: '#'
    }
];

const trend = React.createElement(
    'div', {
    className: 'container'
},
    React.createElement(
        'div', {
        className: 'row'
    },
        React.createElement(
            'div', {
            className: 'col-lg-3 col-md-6'
        },
            React.createElement(
                'div', {
                className: 'section-title'
            },
                React.createElement(
                    'h6', {
                    className: 'title'
                }, 'Trending videos'
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
                                React.createElement(
                                    'div', {
                                    className: 'trending-post'
                                },
                                    trending_videos.map((v, i) => {
                                        return (
                                            React.createElement(
                                                'div', {
                                                className: 'single-post-wrap style-overlay',
                                                key: i
                                            },
                                                React.createElement(
                                                    'div', {
                                                    className: 'thumb'
                                                },
                                                    React.createElement(
                                                        'img', {
                                                        src: v.img,
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
                                                        className: 'post-meta-single'
                                                    },
                                                        React.createElement(
                                                            'p', null,
                                                            React.createElement(
                                                                'i', {
                                                                className: 'fa fa-clock-o'
                                                            }
                                                            ), v.timespan
                                                        )
                                                    ),
                                                    React.createElement(
                                                        'h6', {
                                                        className: 'title'
                                                    },
                                                        React.createElement(
                                                            'a', {
                                                            href: v.url
                                                        }, v.title
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
                ),
                React.createElement(
                    'div', {
                    className: 'owl-nav'
                },
                    React.createElement(
                        'button', {
                        type: 'button',
                        role: 'presentation',
                        className: 'owl-prev'
                    },
                        React.createElement(
                            'i', {
                            className: 'la la-angle-left'
                        }
                        )
                    ),
                    React.createElement(
                        'button', {
                        type: 'button',
                        role: 'presentation',
                        className: 'owl-next'
                    },
                        React.createElement(
                            'i', {
                            className: 'la la-angle-right'
                        }
                        )
                    )
                ),
                React.createElement(
                    'div', {
                    className: 'owl-dots disabled'
                }
                )
            )
        ),


        React.createElement(
            'div', {
            className: 'col-lg-3 col-md-6'
        },
            React.createElement(
                'div', {
                className: 'section-title'
            },
                React.createElement(
                    'h6', {
                    className: 'title'
                }, 'Latest Videos'
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
                            className: 'item'
                        },
                            latest_videos.map((v, i) => {
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
                                                    src: v.img,
                                                    alt: 'img'
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
                                                            href: v.url
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
                ),
                React.createElement(
                    'div', {
                    className: 'owl-nav'
                },
                    React.createElement(
                        'button', {
                        type: 'button',
                        role: 'presentation',
                        className: 'owl-prev'
                    },
                        React.createElement(
                            'i', {
                            className: 'la la-angle-left'
                        }
                        )
                    ),
                    React.createElement(
                        'button', {
                        type: 'button',
                        role: 'presentation',
                        className: 'owl-next'
                    },
                        React.createElement(
                            'i', {
                            className: 'la la-angle-right'
                        }
                        )
                    )
                ),
                React.createElement(
                    'div', {
                    className: 'owl-dots disabled'
                }
                )
            )
        ),


        React.createElement(
            'div', {
            className: 'col-lg-3 col-md-6'
        },
            React.createElement(
                'div', {
                className: 'section-title'
            },
                React.createElement(
                    'h6', {
                    className: 'title'
                }, 'What’s new'
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
                                            src: 'assets/img/post/8.png',
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
                                            className: 'post-meta-single mb-4 pt-1'
                                        },
                                            React.createElement(
                                                'ul', null,
                                                React.createElement(
                                                    'li', null,
                                                    React.createElement(
                                                        'a', {
                                                        href: '#',
                                                        className: 'tag-base tag-blue'
                                                    }, 'Tech'
                                                    )
                                                ),
                                                React.createElement(
                                                    'li', null,
                                                    React.createElement(
                                                        'i', {
                                                        className: 'fa fa-clock-o'
                                                    }
                                                    ), '08.22.2020'
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
                                            }, 'Uttarakhand’s Hemkund Sahib yatra to start from September4'
                                            )
                                        ),
                                        React.createElement(
                                            'p', null, 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        ),


        React.createElement(
            'div', {
            className: 'col-lg-3 col-md-6'
        },
            React.createElement(
                'div', {
                className: 'section-title'
            },
                React.createElement(
                    'h6', {
                    className: 'title'
                }, 'Join With Us'
                )
            ),
            React.createElement(
                'div', {
                className: 'social-area-list mb-4'
            },
                React.createElement(
                    'ul', null,
                    React.createElement(
                        'li', {
                        key: 'fb'
                    },
                        React.createElement(
                            'a', {
                            className: 'facebook',
                            href: '#'
                        },
                            React.createElement(
                                'i', {
                                className: 'fa fa-facebook social-icon'
                            }
                            ),
                            React.createElement(
                                'span', null, '12,300'
                            ),
                            React.createElement(
                                'span', null, 'Like'
                            ),
                            React.createElement(
                                'i', {
                                className: 'fa fa-plus'
                            }
                            )
                        )
                    ),

                    React.createElement(
                        'li', {
                        key: 'twitter'
                    },
                        React.createElement(
                            'a', {
                            className: 'twitter',
                            href: '#'
                        },
                            React.createElement(
                                'i', {
                                className: 'fa fa-twitter social-icon'
                            }
                            ),
                            React.createElement(
                                'span', null, '12,600'
                            ),
                            React.createElement(
                                'span', null, 'Followers'
                            ),
                            React.createElement(
                                'i', {
                                className: 'fa fa-plus'
                            }
                            )
                        )
                    ),

                    React.createElement(
                        'li', {
                        key: 'youtube'
                    },
                        React.createElement(
                            'a', {
                            className: 'youtube',
                            href: '#'
                        },
                            React.createElement(
                                'i', {
                                className: 'fa fa-youtube-play social-icon'
                            }
                            ),
                            React.createElement(
                                'span', null, '12,600'
                            ),
                            React.createElement(
                                'span', null, 'Subscribers'
                            ),
                            React.createElement(
                                'i', {
                                className: 'fa fa-plus'
                            }
                            )
                        )
                    ),

                    React.createElement(
                        'li', {
                        key: 'instagram'
                    },
                        React.createElement(
                            'a', {
                            className: 'instagram',
                            href: '#'
                        },
                            React.createElement(
                                'i', {
                                className: 'fa fa-instagram social-icon'
                            }
                            ),
                            React.createElement(
                                'span', null, '52,400'
                            ),
                            React.createElement(
                                'span', null, 'Followers'
                            ),
                            React.createElement(
                                'i', {
                                className: 'fa fa-plus'
                            }
                            )
                        )
                    ),

                    React.createElement(
                        'li', {
                        key: 'google-plus'
                    },
                        React.createElement(
                            'a', {
                            className: 'google-plus',
                            href: '#'
                        },
                            React.createElement(
                                'i', {
                                className: 'fa fa-google social-icon'
                            }
                            ),
                            React.createElement(
                                'span', null, '19,101'
                            ),
                            React.createElement(
                                'span', null, 'Subscribers'
                            ),
                            React.createElement(
                                'i', {
                                className: 'fa fa-plus'
                            }
                            )
                        )
                    )


                )
            ),
            React.createElement(
                'div',{
                    className:'add-area'
                },
                React.createElement(
                    'a',{
                        href:'#'
                    },
                    React.createElement(
                        'img',{
                            src:'assets/img/add/6.png',
                            alt:'img'
                        }
                    )
                )
            )
        )

    )
);

ReactDOM.render(trend, trending);