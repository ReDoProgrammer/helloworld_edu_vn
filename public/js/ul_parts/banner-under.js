const banner_under = document.getElementById('banner-under');

const postsList = [
    {
        title: 'The FAA will test drone detecting technologies in airports this year',
        timespan: '08.22.2020',
        img: 'assets/img/post/1.png',
        classbtn: 'tag-base tag-blue',
        textbtn: 'Tech'
    },
    {
        title: 'Rocket Lab will resume launches no sooner than August 27th',
        timespan: '08.22.2020',
        img: 'assets/img/post/2.png',
        classbtn: 'tag-base tag-orange',
        textbtn: 'Food'
    },
    {
        title: 'Google Drive flaw may attackers fool you into install malware',
        timespan: '08.22.2020',
        img: 'assets/img/post/3.png',
        classbtn: 'tag-base tag-blue',
        textbtn: 'Tech'
    },
    {
        title: 'TikTok will sue the US over threatened ban',
        timespan: '08.22.2020',
        img: 'assets/img/post/4.png',
        classbtn: 'tag-base tag-orange',
        textbtn: 'Food'
    }
]

const bnud = React.createElement(
    'div', {
    className: 'row'
},

    postsList.map((p,idx) => {
       return (
        React.createElement(
            'div', {
            className: 'col-lg-3 col-sm-6',
            key:idx
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
                        src: p.img,
                        alt: 'img'
                    }
                    ),
                    React.createElement(
                        'a', {
                        className: p.classbtn,
                        href: '#'
                    }, p.textbtn
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
                            href: '#'
                        }, p.title
                        )
                    ),
                    React.createElement(
                        'div', {
                        className: 'post-meta-single mt-3'
                    },
                        React.createElement(
                            'ul', null,
                            React.createElement(
                                'li', null,
                                React.createElement(
                                    'i', {
                                    className: 'fa fa-clock-o'
                                }
                                ), p.timespan
                            )
                        )
                    )
                )
            )
        )
       )
    })

);

ReactDOM.render(bnud, banner_under);