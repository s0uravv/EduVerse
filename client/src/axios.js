// src/axios.js

import axios from "axios";

// ✅ Automatically send cookies (like JWT) with every request
axios.defaults.withCredentials = true;

export default axios;