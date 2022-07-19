import React from "react";
import axios from "axios";
import { CountryType } from "../types";

const fetchCountry = async () => {
  const { data } = await axios.get<CountryType[]>(
    "https://restcountries.com/v3.1/all"
  );
  return data;
};

export default fetchCountry;
