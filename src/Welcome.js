function Welcome(props) {
  let age = props.age
  console.log(age)
  if (age > 0)
  console.log("not a child")
    return (
      <div>
      <h1>Hello, {props.name}</h1>
    <h1>Your age is, {props.age}</h1>
    </div>)
  }
export default Welcome;