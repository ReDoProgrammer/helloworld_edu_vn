const adbar_area= document.getElementById('adbar-area');

const adbar = React.createElement(
    'div',{
        className:'container'
    },
    React.createElement(
        'div',{
            className:'row'
        },
        React.createElement(
            'div',{
                className:'col-xl-6 col-lg-5 align-self-center'
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
            'div',{
                className:'col-xl-6 col-lg-7 text-md-right text-center'
            },
            React.createElement(
                'a',{
                    className:'adbar-right',
                    href:'#'
                },
                React.createElement(
                    'img',{
                        src:'assets/img/add/1.png',
                        alt:'img'
                    }
                )
            )
        )
    )
)

ReactDOM.render(adbar,adbar_area);