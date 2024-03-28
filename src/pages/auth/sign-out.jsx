import { useEffect } from "react";
import Cookies from "js-cookie";

export default function SignOutPage() {
  useEffect(() => {
    Cookies.remove('Auth')
    // window.location.href = "/labwork/list";
  }, []);
}
