

const pl = React.createElement(
    'div', {
    className: 'preloader-inner'
},
    React.createElement(
        'div', {
        className: 'spinner'
    },
        React.createElement(
            'div', {
            className: 'dot1'
        }
        ),
        React.createElement(
            'div', {
            className: 'dot2'
        }
        )
    )
)

preloader = document.getElementById('preloader');
ReactDOM.render(pl,preloader);