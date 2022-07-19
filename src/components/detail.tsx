import React, { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import { CountryType } from "../types";

const Detail: FunctionComponent = () => {
  const count: any = useSelector((state: any) => state.modal.data);

  return (
    <div className="detail">
      <div className="detail-inner">
        <div className="detail-img">
          {count.country ? (
            <div className="detail-title-inner">
              <img
                src={count.country.coatOfArms.png}
                alt="coatofarms"
                className="coatofarms"
              />
              <div className="detail-title-inner-right">
                <h1 className="detail-title">
                  {count.country.name.common} ({count.country.name.official})
                </h1>
                <h2>{count.country.capital}</h2>
              </div>
            </div>
          ) : null}
          <img className="flag" />
        </div>
        {count.country ? <p>{count.country.name.common}</p> : null}
        {count.country ? (
          <div className="content">
            <div className="region">
              <p>Region</p>
              <p>{count.country.region}</p>
            </div>
            <div className="region">
              <p>Subregion</p>
              <p>{count.country.subregion}</p>
            </div>
            <div className="translation">
              <h1>Translations</h1>
              <div className="translation-inner">
                <div className="translation-item">
                  <p>{count.country.translations.ara.official}</p>
                  <p>{count.country.translations.ara.common}</p>
                </div>
                <div className="translation-item">
                  <p>{count.country.translations.ces.official}</p>
                  <p>{count.country.translations.ces.common}</p>
                </div>
                <div className="translation-item">
                  <p>{count.country.translations.cym.official}</p>
                  <p> {count.country.translations.cym.common}</p>
                </div>
                <div className="translation-item">
                  <p>{count.country.translations.deu.official}</p>
                  <p>{count.country.translations.deu.common}</p>
                </div>
                <div className="translation-item">
                  <p> {count.country.translations.est.official}</p>
                  <p> {count.country.translations.est.common}</p>
                </div>
                <div className="translation-item">
                  <p> {count.country.translations.fin.official}</p>
                  <p>{count.country.translations.fin.common}</p>
                </div>
                <div className="translation-item">
                  <p> {count.country.translations.fra.official}</p>
                  <p> {count.country.translations.fra.common}</p>
                </div>
                <div className="translation-item">
                  <p>{count.country.translations.hrv.official}</p>
                  <p>{count.country.translations.hrv.common}</p>
                </div>
                <div className="translation-item">
                  <p>{count.country.translations.hun.official}</p>
                  <p>{count.country.translations.hun.common}</p>
                </div>
                <div className="translation-item">
                  <p>{count.country.translations.ita.official}</p>
                  <p>{count.country.translations.ita.common}</p>
                </div>
                <div className="translation-item">
                  <p>
                    {" "}
                    {count.country.translations.jpn
                      ? count.country.translations.jpn.official
                      : null}
                  </p>
                  <p>
                    {" "}
                    {count.country.translations.jpn
                      ? count.country.translations.jpn.common
                      : null}
                  </p>
                </div>
                <div className="translation-item">
                  <p> {count.country.translations.kor.official}</p>
                  <p> {count.country.translations.kor.common}</p>
                </div>
                <div className="translation-item">
                  <p>{count.country.translations.nld.official}</p>
                  <p>{count.country.translations.nld.common}</p>
                </div>
                <div className="translation-item">
                  <p> {count.country.translations.per.official}</p>
                  <p>{count.country.translations.per.common}</p>
                </div>
                <div className="translation-item">
                  <p> {count.country.translations.pol.official}</p>
                  <p> {count.country.translations.pol.common}</p>
                </div>
                <div className="translation-item">
                  <p>{count.country.translations.por.official}</p>
                  <p>{count.country.translations.por.common}</p>
                </div>
                <div className="translation-item">
                  <p> {count.country.translations.rus.official}</p>
                  <p>{count.country.translations.rus.common}</p>
                </div>
                <div className="translation-item">
                  <p> {count.country.translations.slk.official}</p>
                  <p>{count.country.translations.slk.common}</p>
                </div>
                <div className="translation-item">
                  <p> {count.country.translations.spa.official}</p>
                  <p> {count.country.translations.spa.common}</p>
                </div>
                <div className="translation-item">
                  <p> {count.country.translations.swe.official}</p>
                  <p>{count.country.translations.swe.common}</p>
                </div>
                <div className="translation-item">
                  <p> {count.country.translations.urd.official}</p>
                  <p> {count.country.translations.urd.common}</p>
                </div>
                <div className="translation-item">
                  <p> {count.country.translations.zho ? count.country.translations.zho.official:null}</p>
                  <p> {count.country.translations.zho ? count.country.translations.zho.common :null}</p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Detail;
