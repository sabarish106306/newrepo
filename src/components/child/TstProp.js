import React from 'react'

const TstProp = (props) => {

    console.log(props);
    return (
        <div>
            <h1> {props.object.age} </h1>
            <h2> {props.object.name} </h2>
        </div>
    )
}

export default TstProp
