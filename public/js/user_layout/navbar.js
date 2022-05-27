const navbar = document.getElementById('navbar-area');

const nav = React.createElement(
    React.createElement(
        'div',{
            className:'topbar-area'
        },
        React.createElement(
            'div',{
                className:'container'
            }
        )
    )
)

ReactDOM.render(nav,navbar);