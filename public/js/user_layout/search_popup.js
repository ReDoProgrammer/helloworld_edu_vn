const search = React.createElement(
    'form',{
        className:'search-form',
        action:'index.html'
    },
    React.createElement(
        'div',{
            className:'form-group'
        },
        React.createElement(
            'input',{
                type:'text',
                className:'form-control',
                placeholder:'Search.....'
            }
        )
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

const search_popup = document.getElementById('td-search-popup');
ReactDOM.render(search,search_popup);