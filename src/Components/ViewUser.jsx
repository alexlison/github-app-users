import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const ViewUser = () => {
  const [UserData, ChangeData] = useState([]);

  const [isloading, changeLoading] = useState(true);

  const fetchData = () => {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        changeLoading(false);
        ChangeData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container">
        <h4 className="mt-4">View All Users</h4>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">login</th>
                  <th scope="col">Avatar_url</th>
                  <th scope="col">html_url</th>
                  <th scope="col">Followers_url</th>
                </tr>
              </thead>

              {isloading ? (
                <div class="spinner-border text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                <tbody>
                  {UserData.map((value, index) => {
                    return (
                      <tr>
                        <td>{value.id}</td>
                        <td>{value.login}</td>
                        <td><img className="rounded-circle" src={value.avatar_url} height="50px" width="50px" /></td>
                        <td>{value.followers_url}</td>

                        <td>{value.html_url}</td>

                           
                        
                      </tr>
                    );
                  })}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
