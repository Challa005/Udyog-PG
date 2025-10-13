import { useState } from "react";
// import { loginApi } from "../api/auth"; // your API
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle login submit
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await loginApi(formData);

      if (data?.token) {
        localStorage.setItem("token", data.token);
      }

      if (data?.user) {
        setUser(data.user); // Save student info in state
        localStorage.setItem("user", JSON.stringify(data.user)); // persist
      }

      if (data?.message) {
        toast.success(data.message);
        navigate("/dashboard"); // redirect student
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleLogin,
    loading,
    error,
    user,
  };
};

export default useLogin;
