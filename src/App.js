import React from 'react'
import TstProp from './components/child/TstProp'
import Parent from './components/parent/parent'

const App = () => {


    const obj ={
        name: "reegan",
        age: 35,
        prof: "web developer"
    }
    return (
        <div>
            <Parent />
            {/* <TstProp name="vanaja" /> */}
            <TstProp object={obj} />

        </div>
    )
}

export default App
