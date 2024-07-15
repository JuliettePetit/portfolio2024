import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <div className="bg-pink-300 flex items-center flex-col p-4 pt-0 w-fit rounded-outer">
      <p className="text-white">About me</p>
      <div className="bg-white flex flex-col rounded-inner p-3 items-center">
      <pre className="text-center m-4">
      <span/>     _       _ _      _   _       <br/>    | |_   _| (_) ___| |_| |_ ___ <br/> _  | | | | | | |/ _ \ __| __/ _ \<br/>| |_| | |_| | | |  __/ |_| ||  __/<br/> \___/ \__,_|_|_|\___|\__|\__\___|
      </pre>
      <div className="flex m-4">
        <p className="flex flex-col m-2">
          Age <br />
          City <br />
          University <br/>
          Email <br />
            Tags <br />
          <p className="pt-7">Skills</p>
        </p>
        <p className="m-2">
          21 <br />
          Bordeaux, France <br />
          Universite de Bordeaux <br />
          juliette.petit@u-bordeaux.fr <br />
          sweets | dev | kind | black cat | <br/> zenyatta | keyboards <br />
            <img src={process.env.PUBLIC_URL + "/logos.svg"} />
          </p>
        </div>
        <p className="font-bold text-center m-4">I’m a student in computer science and mathematics.</p>
        <Button text="Contact me"></Button>
      </div>
    </div>
  );
}
