import React from "react";
import "../Home/dashboard.css";
import BrandsCard from "./BrandsCard";

const Brands = () => {
  return (
    <>
      <div className="container-fluid m-0  p-0 bg_paleYellow">
        <div className="row p-0 m-0">
          <div className="d-flex flex-column justify-content-center">
            <p className="number m-4">
              Below are the Brands available with <span>&#8220;</span>
              Beauty Fashions Sales Group<span>&#8221;</span>
            </p>
            <div className="mb-4 d-flex gap-4 flex-wrap justify-content-start align-items-center mx-auto" style={{width:"93.6%"}}>
              <BrandsCard BandName="Diptyque" imageWithExtension="Diptyque.jpg" verified={true} />
              <BrandsCard BandName="Byredo" imageWithExtension="Byredo.jpg" verified={true} />
              <BrandsCard BandName="Maison Margiela" imageWithExtension="Maison Margiela.jpg" verified={false} />
              <BrandsCard BandName="Bobbi Brown" imageWithExtension="Bobbi Brown.jpg" verified={true} />
              <BrandsCard BandName="Estee Lauder" imageWithExtension="Estee Lauder.jpg" verified={false} />
              <BrandsCard BandName="RMS Beauty" imageWithExtension="RMS Beauty.jpg" verified={false} />
              <BrandsCard BandName="ReVive" imageWithExtension="ReVive.jpg" verified={true} />
              <BrandsCard BandName="R Co " imageWithExtension="R Co.jpg" verified={false} />
              <BrandsCard BandName="R Co Bleu" imageWithExtension="R Co Bleu.jpg" verified={true} />
              <BrandsCard BandName="Bumble and Bumble" imageWithExtension="Bumblea and Bumble.jpg" verified={true} />
              <BrandsCard BandName="By Terry" imageWithExtension="By Terry.jpg" verified={false} />
              <BrandsCard BandName="Susanne Kaufmann " imageWithExtension="Susanne Kaufmann.jpg" verified={true} />
              <BrandsCard BandName="Kevyn Aucoin" imageWithExtension="Kevyn Aucoin.jpg" verified={true} />
              <BrandsCard BandName="Smashbox" imageWithExtension="Smashbox.jpg" verified={true} />
              <BrandsCard BandName="EVE LOM" imageWithExtension="Eve Lom.jpg" verified={false} />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
