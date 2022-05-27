const navbar = document.getElementById('navbar');

const nav = React.createElement(
    'div',{
        className:'container nav-container'
    },
    React.createElement(
        'div',{
            className:'responsive-mobile-menu'
        },
        React.createElement(
            'div',{
                className:'logo d-lg-none d-block'
            },
            React.createElement(
                'a',{
                    className:'main-logo',
                    href:'/'
                },
                React.createElement(
                    'img',{
                        src:'assets/img/logo.png',
                        alt:'img'
                    }
                )
            )
        ),
        React.createElement(
            'button',{
                className:'menu toggle-btn d-block d-lg-none',
                data_target:'#nextpage_main_menu',
                aria_expanded:'false',
                aria_label:'Toggle navigation'
            },
            React.createElement(
                'span',{
                    className:'icon-left'
                }
            ),
            React.createElement(
                'span',{
                    className:'icon-right'
                }
            )
        )
    ),
    React.createElement(
        'div',{
            className:'nav-right-part nav-right-part-mobile'
        },
        React.createElement(
            'a',{
                className:'search header-search',
                href:'#'
            },
            React.createElement(
                'i',{
                    className:'fa fa-search'
                }
            )
        )
    ),
    React.createElement(
        'div',{
            className:'collapse navbar-collapse',
            id:'nextpage_main_menu'            
        },
        React.createElement(
            'ul',{
                className:'navbar-nav menu-open'
            },
            React.createElement(
                'li',{
                    className:'current-menu-item'
                },
                React.createElement(
                    'a',{
                        href:'#banner'
                    },
                    React.createElement(
                        'i',{
                            className:'fa fa-home'
                        }
                    ),  
                    'Home'
                )
            ),
            React.createElement(
                'li',{
                    className:'current-menu-item'
                },
                React.createElement(
                    'a',{
                        href:'#trending'
                    },                   
                    'Trending News'
                )
            ),
            React.createElement(
                'li',{
                    className:'current-menu-item'
                },
                React.createElement(
                    'a',{
                        href:'#latest'
                    },                   
                    'Latest News'
                )
            ),
            React.createElement(
                'li',{
                    className:'current-menu-item'
                },
                React.createElement(
                    'a',{
                        href:'#grid'
                    },                   
                    'News Grid'
                )
            ),
            React.createElement(
                'li',{
                    className:'current-menu-item'
                },
                React.createElement(
                    'a',{
                        href:'#grid'
                    },                   
                    'Pro Version'
                )
            )
        )
    ),
    React.createElement(
        'div',{
            className:'nav-right-part nav-right-part-desktop'
        },
        React.createElement(
            'div',{
                className:'menu-search-inner'
            },
            React.createElement(
                'input',{
                    type:'text',
                    placeholder:'Search...'
                }
            ),
            React.createElement(
                'button',{
                    type:'submit',
                    className:'submit-btn'
                },
                React.createElement(
                    'i',{
                        className:'fa fa-search'
                    }
                )
            )
        )
    )
)

ReactDOM.render(nav,navbar);