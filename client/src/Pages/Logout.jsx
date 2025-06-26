const handleLogout = async () => {
  try {
    const response = await fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data.message);
      window.location.href = "/login";
    } else {
      console.error("Logout failed:", data.message);
    }
  } catch (error) {
    console.error("Error during logout:", error);
  }
};