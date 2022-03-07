const axios = require("axios");
const baseURL = "http://catfact.ninja/fact";
const getFact = async () => {
    let { data } = await axios.get(`${baseURL}`);
    console.log("Fact : ", data.fact);
};
getFact();