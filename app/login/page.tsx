import Link from "next/link";

export default function Login() {
  return (
    <nav>
      <p>
        Admin :{" "}
        <Link className="text-blue-400" href="/login/admin">
          Admin
        </Link>
      </p>
      <p>
        User :{" "}
        <Link className="text-blue-400" href="/login/user">
          User
        </Link>
      </p>
    </nav>
  );
}
