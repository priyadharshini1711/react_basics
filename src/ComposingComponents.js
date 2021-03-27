function Welcome(props) {
    return <h1>Hi, {props.name}</h1>;
  }

const name = [{name:'priya'}, {name:'dharshini'},{name: 'saravanan'}, {name: 'elesa'}, {name:'rupuzel'}]

  function ComposingComponents() {
    // return (
    //   <div>
    //     <Welcome name="Sara" />
    //     <Welcome name="Cahal" />
    //     <Welcome name="Edite" />
    //   </div>
    // );
    return(
      <div>
        {name.map((item)=>{
          return(<Welcome name={item.name} />)
        })}
      </div>
    )
  }
  
export default ComposingComponents;