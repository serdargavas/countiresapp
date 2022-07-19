import React, { FunctionComponent, useEffect } from "react";
import { CountryType } from "../types";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../features/modal/modalSlice";

interface ICountryProps {
  country: CountryType;
}

const Country: FunctionComponent<ICountryProps> = (props) => {
  const { country } = props;

  const currentCountry: any = useSelector((state: any) => state);
  const dispatch = useDispatch();

  return (
    <div
      className="item"
      onClick={() => dispatch({ type: change, payload: { country } })}
    >
      <div className="country">
        <img src={country.flags.png} />
      </div>
      <div className="cover-title">
        <p>{country.name.common}</p> <br /> <p>{country.capital}</p>
      </div>
    </div>
  );
};

export default Country;
