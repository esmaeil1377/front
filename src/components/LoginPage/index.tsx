import MainModal from "components/Modal";
import { Credentials, ModalOpen } from "intefaces/Interfaces";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "utilities/api";

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const [isModalOpen, setIsModalOpen] = useState<ModalOpen>({
    open: false,
    text: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!credentials.username) {
      setIsModalOpen({
        open: true,
        text: "Please Enter Username",
      });
      return;
    } else if (!credentials.password) {
      setIsModalOpen({
        open: true,
        text: "Please Enter Password",
      });
      return;
    }
    const data = await login(credentials);
    if (data?.result === "success") {
      localStorage.setItem("token", data?.token ?? "");
      navigate("/");
    } else if (data?.result === "wrong_pass") {
      setIsModalOpen({
        open: true,
        text: "Username Or Password is Wrong",
      });
    } else {
      setIsModalOpen({
        open: true,
        text: "Something is Wrong",
      });
    }
  };

  return (
    <div>
      <MainModal
        isOpen={isModalOpen?.open}
        onClose={() => setIsModalOpen({ open: false, text: "" })}
      >
        {isModalOpen?.text}
      </MainModal>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your username and password!
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label">
                        <input
                          type="text"
                          value={credentials.username}
                          placeholder="username"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          onChange={(event) =>
                            setCredentials({
                              ...credentials,
                              username: event.target.value,
                            })
                          }
                        />
                      </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          value={credentials.password}
                          placeholder="password"
                          onChange={(event) =>
                            setCredentials({
                              ...credentials,
                              password: event.target.value,
                            })
                          }
                        />
                      </label>
                    </div>
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
