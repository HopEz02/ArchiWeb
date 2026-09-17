import type { Metadata } from "next";

// TODO(legal): solid template, not legal advice — have it reviewed before
// launch, and replace bracketed placeholders with the firm's real details.
export const metadata: Metadata = {
  title: "Termeni și condiții",
  description:
    "Termenii de utilizare a site-ului și condițiile privind proprietatea intelectuală asupra materialelor din portofoliu.",
};

export default function TermsPage() {
  return (
    <div className="px-lg py-4xl sm:px-2xl md:px-4xl">
      <div className="mx-auto max-w-prose">
        <h1 className="text-[40px] md:text-[48px]">Termeni și condiții</h1>
        <p className="mt-lg text-[14px] text-charcoal/70">
          Ultima actualizare: [TODO: dată]
        </p>

        <div className="mt-2xl flex flex-col gap-2xl">
          <section>
            <h2 className="text-[22px] md:text-[24px]">1. Obiectul</h2>
            <p className="mt-sm">
              Acești Termeni și Condiții reglementează utilizarea acestui
              site, deținut și operat de [Nume_Firma_SRL/BIA] („ArchiVerse”,
              „noi”). Prin accesarea și utilizarea site-ului, sunteți de
              acord cu acești termeni.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              2. Natura informativă a conținutului
            </h2>
            <p className="mt-sm">
              Conținutul acestui site (texte, descrieri de servicii, exemple
              de proiecte din portofoliu) are caracter exclusiv informativ și
              de prezentare. Informațiile publicate nu constituie o ofertă
              fermă, contractuală, și nu înlocuiesc documentațiile tehnice
              oficiale necesare pentru autorizare sau execuție — precum
              Documentația Tehnică pentru Autorizarea Construcțiilor (DTAC)
              sau Proiectul Tehnic (PTh) — care se elaborează separat, în
              cadrul unei colaborări contractuale directe.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              3. Proprietate intelectuală
            </h2>
            <p className="mt-sm">
              Toate randările, planurile, schițele, fotografiile, textele și
              orice alt material grafic sau scris prezentat în portofoliul
              acestui site sunt proprietatea exclusivă a
              [Nume_Firma_SRL/BIA] sau sunt utilizate cu acordul titularilor
              drepturilor, fiind protejate conform Legii nr. 8/1996 privind
              dreptul de autor și drepturile conexe, republicată.
            </p>
            <p className="mt-sm">
              Este strict interzisă reproducerea, copierea, distribuirea,
              modificarea sau utilizarea acestor materiale, integral sau
              parțial, în orice scop, fără acordul scris prealabil al
              [Nume_Firma_SRL/BIA].
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              4. Limitarea răspunderii
            </h2>
            <p className="mt-sm">
              Depunem eforturi rezonabile pentru a menține informațiile de pe
              acest site actualizate și corecte, însă nu garantăm
              exactitatea, exhaustivitatea sau actualitatea permanentă a
              conținutului. [Nume_Firma_SRL/BIA] nu răspunde pentru eventuale
              decizii luate exclusiv pe baza materialelor de prezentare
              publicate pe site, acestea neavând valoare de proiect tehnic
              sau de document contractual.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              5. Legea aplicabilă
            </h2>
            <p className="mt-sm">
              Acești termeni sunt guvernați de legislația română. Orice
              litigiu decurgând din utilizarea acestui site va fi soluționat
              de instanțele competente din România.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              6. Modificarea termenilor
            </h2>
            <p className="mt-sm">
              Ne rezervăm dreptul de a modifica acești termeni în orice
              moment; versiunea actualizată va fi publicată pe această
              pagină, cu data ultimei actualizări afișată mai sus.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">7. Contact</h2>
            <p className="mt-sm">
              Pentru orice întrebări legate de acești termeni, ne puteți
              contacta la [Email].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
