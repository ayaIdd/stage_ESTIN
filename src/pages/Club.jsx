import React from "react";
import { Bytecraft, Gdsc, Ldc, Soai, Sirius, Nexus } from "../components";
const Club = () => {
  return (
    <main >
      <section id="bytecraft" className="py-4">
        <Bytecraft />
      </section>
    <section id="gdsc" className="py-4">
        <Gdsc />
      </section>
        <section id="ldc" className="py-4">
        <Ldc />
      </section>
      <section id="soai" className="py-4" >
        <Soai />
      </section>
      <section id="sirius" className="py-4" >
        <Sirius />
      </section>
      <section id="nexus" className="py-4">
        <Nexus />
      </section>
    </main>
  )
}
export default Club