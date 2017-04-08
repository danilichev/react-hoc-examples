import React from 'react'
import ReactDOM from 'react-dom'

// Props Proxy demonstration

const PPHOC = (WrappedComponent, newProps) => (props) => (
  <WrappedComponent {...props} {...newProps}/>
);

class Example extends React.Component {
  render() {
    return (
      <div>
        <p>
          As you can see, all original props (date), are being passed through or proxied,
          and also new props (user) are being added.
        </p>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    )
  }
}

const EnhancedExample = PPHOC(Example, {
  user: {
    name: 'Fran',
    email: 'franleplant@gmail.com'
  }
})

ReactDOM.render(<EnhancedExample date={(new Date).toISOString()}/>, document.getElementById('root'))
