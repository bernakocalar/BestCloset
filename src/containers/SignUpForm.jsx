import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../services/axiosInstance";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const selectedRoleId = watch("role_id");
  const selectedRole = roles.find((r) => r.id === Number(selectedRoleId));
  const isStore = selectedRole?.code === "store";

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((res) => {
        setRoles(res.data);
      })
      .catch((err) => {
        toast.error("Error fetching roles");
        console.error(err);
      });
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);

    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: Number(data.role_id),
      ...(isStore && {
        store: {
          name: data.storeName,
          phone: data.phone,
          tax_no: data.tax_no,
          bank_account: data.bank_account,
        },
      }),
    };

    try {
      await axiosInstance.post("/signup", payload);
      toast.success("Account created! Please verify via email link. ✨");
      navigate("/login");
    } catch (err) {
      toast.error("Signup failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Genel Alanlar */}
          <div>
            <input
              {...register("name", { required: true, minLength: 3 })}
              placeholder="Full Name"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">
                Name must be at least 3 characters
              </p>
            )}
          </div>

          <div>
            <input
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
              placeholder="Email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">Invalid email address</p>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
              })}
              placeholder="Password"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                Password must be at least 8 characters and include uppercase,
                lowercase, number, and special character
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password2", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
              placeholder="Confirm Password"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.password2
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.password2 && (
              <p className="text-xs text-red-500 mt-1">
                Passwords do not match
              </p>
            )}
          </div>

          {/* Mağaza Alanları */}
          {isStore && (
            <>
              <div>
                <input
                  {...register("storeName", { required: true, minLength: 3 })}
                  placeholder="Store Name"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.storeName
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                />
                {errors.storeName && (
                  <p className="text-xs text-red-500 mt-1">
                    Store name must be at least 3 characters
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("phone", {
                    required: true,
                    pattern: /^(\+90|0)?5\d{9}$/,
                  })}
                  placeholder="Phone (05551234567)"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">
                    Invalid phone number
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("tax_no", {
                    required: true,
                    pattern: /^T\d{4}V\d{6}$/,
                  })}
                  placeholder="Tax ID (TXXXXVXXXXXX)"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.tax_no
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                />
                {errors.tax_no && (
                  <p className="text-xs text-red-500 mt-1">Invalid Tax No</p>
                )}
              </div>

              <div>
                <input
                  {...register("bank_account", {
                    required: true,
                    pattern: /^TR\d{24}$/,
                  })}
                  placeholder="Bank Account (TR...)"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.bank_account
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                />
                {errors.bank_account && (
                  <p className="text-xs text-red-500 mt-1">Invalid IBAN</p>
                )}
              </div>
            </>
          )}

          {/* Rol Seçimi */}
          <div>
            <select
              {...register("role_id")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-400"
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>

          {/* Buton ve Alt Link */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 disabled:opacity-50"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
