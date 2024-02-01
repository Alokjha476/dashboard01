import { useAuth0 } from "@auth0/auth0-react";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = ({ notification, handleNotification }) => {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <div className="bg-pink-300 z-50 top-0 overflow-hidden">
        <header
          className="pl-20 pt-0 mb-0 border-bottom navbar-body"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="container pt-2">
            <div className="flex justify-between items-center p-1">
              <img
                src="https://railworld.co.in/assets/img/logo.png"
                alt=""
                style={{
                  width: "158px",
                  height: "60px",
                  margin: "0px 0px 0px -92px",
                }}
              />

              <a
                href="/"
                className=" flex items-center link-body-emphasis text-decoration-none"
              >
                <svg
                  className="bi me-2 pb-2"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                >
                  <use xlinkHref="#bootstrap"></use>
                </svg>
              </a>

              <div className="flex justify-center items-center -mt-6 -ml-56">
                <form className="col-12 col-lg-auto mt-4" role="search">
                  <IoIosSearch
                    className="ml-7"
                    style={{
                      fontSize: "20px",
                      marginBottom: "-30px",
                      paddingBottom: "3px",
                    }}
                  />
                  <input
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{
                      width: "500px",
                      marginLeft: "26px",
                      paddingLeft: "25px",
                    }}
                    className="form-control"
                  />
                </form>
              </div>
              <div className="position-relative ">
                <IoNotificationsOutline
                  style={{ fontSize: "30px", marginLeft: "20px" }}
                  onClick={() => handleNotification()}
                />
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  notification={notification}
                >
                  {notification}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </div>
              <button
                type="button"
                className="btn btn-primary -m-7 font-extrabold p-2"
                style={{ marginLeft: "27px", width: "82px" }}
                onClick={() => loginWithRedirect()}
              >
                logout
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
