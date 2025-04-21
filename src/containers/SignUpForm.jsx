import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";

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
        console.error("Roles error", err);
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
      alert("You need to click link in email to activate your account!");
      navigate("/");
    } catch (err) {
      alert("An error occurred during signup.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-10/12 mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4"
      >
        {/* Genel Alanlar */}
        <input
          {...register("name", { required: true, minLength: 3 })}
          placeholder="Full Name"
          className="border p-2"
        />
        {errors.name && (
          <p className="text-red-500">Name must be at least 3 characters</p>
        )}

        <input
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+\.\S+$/,
          })}
          placeholder="Email"
          className="border p-2"
        />
        {errors.email && <p className="text-red-500">Invalid email</p>}

        <input
          type="password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
          })}
          placeholder="Password"
          className="border p-2"
        />
        {errors.password && (
          <p className="text-red-500">
            Password must be at least 8 characters and include uppercase,
            lowercase, number, and special char
          </p>
        )}

        <input
          type="password"
          {...register("password2", {
            required: true,
            validate: (value) => value === watch("password"),
          })}
          placeholder="Confirm Password"
          className="border p-2"
        />
        {errors.password2 && (
          <p className="text-red-500">Passwords do not match</p>
        )}

        {/* Mağaza Seçilirse Ekstra Alanlar */}
        {isStore && (
          <>
            <input
              {...register("storeName", { required: true, minLength: 3 })}
              placeholder="Store Name"
              className="border p-2"
            />
            {errors.storeName && (
              <p className="text-red-500">At least 3 characters</p>
            )}

            <input
              {...register("phone", {
                required: true,
                pattern: /^(\+90|0)?5\d{9}$/,
              })}
              placeholder="Phone (e.g. 05551234567)"
              className="border p-2"
            />
            {errors.phone && (
              <p className="text-red-500">Invalid Türkiye phone number</p>
            )}

            <input
              {...register("tax_no", {
                required: true,
                pattern: /^T\d{4}V\d{6}$/,
              })}
              placeholder="Tax ID (TXXXXVXXXXXX)"
              className="border p-2"
            />
            {errors.tax_no && <p className="text-red-500">Invalid Tax No</p>}

            <input
              {...register("bank_account", {
                required: true,
                pattern: /^TR\d{24}$/,
              })}
              placeholder="Bank Account (IBAN)"
              className="border p-2"
            />
            {errors.bank_account && (
              <p className="text-red-500">Invalid IBAN (TR + 24 digits)</p>
            )}
          </>
        )}

        {/* Rol Seçimi En Altta */}
        <select {...register("role_id")} className="border p-2">
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
