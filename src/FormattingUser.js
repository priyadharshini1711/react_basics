// function formatName(user) {
//     return user.firstName + ', ' + user.lastName;
//   }
  
import formatName from './utils.js'
const user = {
firstName: 'Harper',
lastName: 'Perez'
  };
  
function FormattingUser() {
    return(
        <h1>Hello! <formatName user={user}></formatName></h1>
    )
}

export default FormattingUser;