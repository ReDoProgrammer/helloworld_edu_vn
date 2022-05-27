const postsList = [
    {
        thumb: {
            src: 'assets/img/post/1.png',
            header: 'Tech', 
            class:'tag-base tag-blue'         
            
        },
        detail: {
            title: 'The FAA will test drone detecting technologies in airports this year',
            timespan: '08.22.2020'
        }
    },
    {
        thumb: {
            src: 'assets/img/post/2.png',
            header: 'Food',
            class:'tag-base tag-orange'
        },
        detail: {
            title: 'Rocket Lab will resume launches no sooner than August 27th',
            timespan: '08.22.2020'
        }
    },
    {
        thumb: {
            src: 'assets/img/post/3.png',
            header: 'Food',
            class:'tag-base tag-blue'         
        },
        detail: {
            title: 'Google Drive flaw may attackers fool you into install malware',
            timespan: '08.22.2020'
        }
    },
    {
        thumb: {
            src: 'assets/img/post/4.png',
            header: 'Tech',
            class:'tag-base tag-orange'
        },
        detail: {
            title: 'TikTok will sue the US over threatened ban',
            timespan: '08.22.2020'
        }
    }
];

const carousel = React.createElement(
    'div', {
    className: 'row'
},
    postsList.map((p, index) => {
        return (
            React.createElement(
                'div', {
                className: 'col-lg-3 col-sm-6',
                key: index
            },
                React.createElement(
                    'div', {
                    className: 'single-post-wrap style-white'
                },
                    React.createElement(
                        'div', {
                        className: 'thumb'
                    },
                        React.createElement(
                            'img', {
                            src: p.thumb.src,
                            alt: 'img'
                        }
                        ),
                        React.createElement(
                            'a',{
                                className:p.thumb.class
                            },
                            p.thumb.header
                        )
                    ),
                    React.createElement(
                        'div', {
                        className: 'details'
                    },
                        React.createElement(
                            'h6', {
                            className: 'title'
                        },
                            React.createElement(
                                'a', {
                                href: '#',

                            },
                                p.detail.title
                            )
                        ),
                        React.createElement(
                            'div', {
                            className: 'post-meta-single mt-3'
                        },
                            React.createElement(
                                'ul', {},
                                React.createElement(
                                    'li', {},
                                    React.createElement(
                                        'i', {
                                        className: 'fa fa-clock-o'
                                    },
                                        p.detail.timespan
                                    )
                                )
                            )
                        )
                    )
                )

            )
        )
    })
)

const r1_carousel = document.getElementById('r1_carousel');
ReactDOM.render(carousel, r1_carousel)

