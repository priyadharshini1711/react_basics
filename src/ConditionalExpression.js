
import './App.css';

function ConditionalExpression() {
    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };

    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
      }

function getGreeting(user) {
    if (user) {
      return <h1 className="sample">Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
          
    return(
        getGreeting(user)
    )
}

export default ConditionalExpression;