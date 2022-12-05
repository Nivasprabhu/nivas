import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function dashbord(){
  
    const dashbord = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var phoneno = document.getElementById("phoneno").value;
        var password = document.getElementById("password").value;
    }
}

return(

    <div className="container">
        <div className="row mt-2">
            <div className="col-lg-12">
                <p className="text-center">Signup form</p>
            </div>
        
        </div>
        <div className="row mt-3">
            <div className="col-lg-3">
                <p className="text-left">Add Details</p>
            </div>
            <form onSubmit={dashbord}>
            <div className="row mt-5">
                <div className="col-lg-2">
                    <label>First Name</label>
                </div>
                <div className="col-lg-3">
                    <input type="text" name="firstname" id="firstname" className="form-control"/>
                </div>
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <label>Last Name</label>
                </div>
                <div className="col-lg-3">
                    <input type="text" name="lastname" id="lastname" className="form-control"/>
                </div>
            </div>
            <div className="row mt-1">
                <div className="col-lg-2">
                    <label>Email</label>
                </div>
                <div className="col-lg-3">
                    <input type="email" name="email" id="email" className="form-control"/>
                </div>
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <label>Phone no</label>
                </div>
                <div className="col-lg-3">
                    <input type="date" name="phoneno" id="phoneno" className="form-control"/>
                </div>
            </div>
            <div className="row mt-1">
                <div className="col-lg-2">
                    <label>Password</label>
                </div>
                </div>
                <div className="col-lg-3">
                    <input type="text" name="password" id="password" className="form-control"/>
                </div>
                <div className="row mt-2 mb-3">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary">
                    Signup
                </button>
                </div>
            </div>
            </form>
        </div>
        </div>

        );
        
