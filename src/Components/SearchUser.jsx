import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchUser = () => {
const [Input,ChangeInput] = useState(
    {username:""}
)

const InputHandler = (event) => {
    ChangeInput({...Input,[event.target.name]:event.target.value})
}

const readValues = () => {
    console.log(Input);
    
}

  return (
    <div>
        <NavBar />
        <div className="container">
            <h4 className="mt-4">Search User</h4>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">User Name</label>
                            <input type="text" className="form-control" name='username' value={Input.username} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchUser