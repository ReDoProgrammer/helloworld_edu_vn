const latest_videos = [
    {
        timespan:'08.22.2020',
        thumbnail:'assets/img/post/list/1.png',
        title:'Himachal Pradesh rules in order to allow tourists'
    },
    {
        timespan:'08.22.2020',
        thumbnail:'assets/img/post/list/2.png',
        title:'Online registration, booking for Vaishno Devi '
    },
    {
        timespan:'08.22.2020',
        thumbnail:'assets/img/post/list/3.png',
        title:'Detecting technologies in airports this year'
    },
    {
        timespan:'08.22.2020',
        thumbnail:'assets/img/post/list/4.png',
        title:'The FAA will drone detect-ing in airports this year'
    },
    {
        timespan:'08.22.2020',
        thumbnail:'assets/img/post/list/5.png',
        title:'Thailand makes it mand-atory for tourists to stay'
    },
];

const posts = (
    React.createElement(
        'div',{
            className:'section-title'
        },
        React.createElement(
            'h6',{
                className:'title'
            },'Latest Videos'
        )
    ),
    React.createElement(
        'div',{
            className:'post-slider owl-carousel owl-loaded owl-drag'
        },
        React.createElement(
            'div',{
                className:'owl-stage-outer'
            },
            React.createElement(
                'div',{
                    className:'owl-stage'
                },
                React.createElement(
                    'div',{
                        className:'owl-item cloned'
                    },
                    React.createElement(
                        'div',{
                            className:'item'
                        },
                        React.createElement(
                            'div',{
                                className:'single-post-list-wrap'
                            },
                            React.createElement(
                                'div',{
                                    className:'media'
                                },
                                React.createElement(
                                    'div',{
                                        className:'media-left'
                                    },
                                    React.createElement(
                                        'img',{
                                            src:'assets/img/post/list/1.png',
                                            alt:'img'
                                        }
                                    )
                                ),
                                React.createElement(
                                    'div',{
                                        className:'media-body'
                                    },
                                    React.createElement(
                                        'div',{
                                            className:'details'
                                        },
                                        React.createElement(
                                            'div',{
                                                className:'post-meta-single'
                                            },
                                            React.createElement(
                                                'ul',null,
                                                React.createElement(
                                                    'li',null,
                                                    React.createElement(
                                                        'i',{
                                                            className:'fa fa-clock-o'
                                                        }
                                                    ),'08.22.2020'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'h6',{
                                                className:'title'
                                            },
                                            React.createElement(
                                                'a',{
                                                    href:'#'
                                                },'Himachal Pradesh rules in order to allow tourists'
                                            )
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
            'div',{
                className:'owl-nav'
            },
            React.createElement(
                'button',{
                    type:'button',
                    role:'presentation',
                    className:'owl-prev'
                },
                React.createElement(
                    'i',{
                        className:'la la-angle-left'
                    }
                )
            ),
            React.createElement(
                'button',{
                    type:'button',
                    role:'presentation',
                    className:'owl-next'
                },
                React.createElement(
                    'i',{
                        className:'la la-angle-right'
                    }
                )
            )
        )
    )
)

const r2_latest_videos= document.getElementById('r2_latest_videos');
ReactDOM.render(posts,r2_latest_videos);