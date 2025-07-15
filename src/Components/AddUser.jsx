import React, { useState } from "react";
import NavBar from "./NavBar";

const AddUser = () => {
  const [Input, ChangeInput] = useState({
    id: "",
    nodeId: "",
    avata_url: "",
    gravator_url: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gist_url: "",
    started_url: "",
    subscription_url: "",
    organisation_url: "",
    repo_url: "",
    event_url: "",
    rec_event_url: "",
    type: "",
    user_view_type: "",
  });

  const InputHandler = (event) => {
    ChangeInput({...Input,[event.target.name]:event.target.value})

  }

  const readValues = () =>
  {
    console.log(Input);
    
  }



  return (
    <div>
      <NavBar />
      <div className="container">
        <h4 className="mt-4">Add User</h4>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  id
                </label>
                <input type="text" className="form-control" name="id" value={Input.id}  onChange={InputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Node id
                </label>
    
                <input type="text" className="form-control" name="nodeId" value={Input.nodeId} onChange={InputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="from-label">
                  Avatar url
                </label>
                <input type="url"  id="" className="form-control" name="avata_url" value={Input.avata_url} onChange={InputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="from-label">
                  Gravater url
                </label>
                <input type="url" id="" className="form-control" name="gravator_url" value={Input.gravator_url} onChange={InputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Url
                </label>
                <input type="url" id="" className="form-control" name="url"  value={Input.url} onChange={InputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Html url
                </label>
                <input type="url"id="" className="form-control" name="html_url" value={Input.html_url} onChange={InputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Followers url
                </label>
                <input type="url"  id="" className="form-control" name="followers_url" value={Input.followers_url} onChange={InputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Following Url
                </label>
                <input type="url"  id="" className="form-control" name="following_url" value={Input.following_url} onChange={InputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Gist Url
                </label>
                <input type="url"  id="" className="form-control" name="gist_url" value={Input.gist_url}  onChange={InputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Started Url{" "}
                </label>
                <input type="url" id="" className="form-control" name="started_url" value={Input.started_url} onChange={InputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Subscription url
                </label>
                <input type="url"  id="" className="form-control" name="subscription_url" value={Input.subscription_url} onChange={InputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Organisational Url
                </label>
                <input type="url"  id="" className="form-control" name="organisation_url" value={Input.organisation_url}  onChange={InputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Repo Url
                </label>
                <input type="url"  id="" className="form-control" name="repo_url" value={Input.repo_url}  onChange={InputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Event Url
                </label>
                <input type="url" id="" className="form-control"  name="event_url" value={Input.event_url} onChange={InputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Received Event Url
                </label>
                <input type="url" id="" className="form-control" name="rec_event_url" value={Input.rec_event_url}  onChange={InputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Type
                </label>
                <input type="text" className="form-control" name="type" value={Input.type} onChange={InputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  User View Type
                </label>
                <input type="text" className="form-control" name="user_view_type" value={Input.user_view_type}  onChange={InputHandler}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readValues}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
