import type { Metadata } from "next";

// TODO(legal): this page is a solid GDPR/Legea 190/2018-aligned template,
// not legal advice. Have it reviewed by a lawyer or GDPR consultant
// before launch, and replace every bracketed placeholder with the firm's
// real details.
export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description:
    "Cum colectăm, folosim și protejăm datele cu caracter personal transmise prin acest site.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="px-lg py-4xl sm:px-2xl md:px-4xl">
      <div className="mx-auto max-w-prose">
        <h1 className="text-[40px] md:text-[48px]">
          Politica de confidențialitate
        </h1>
        <p className="mt-lg text-[14px] text-charcoal/70">
          Ultima actualizare: [TODO: dată]
        </p>

        <div className="mt-2xl flex flex-col gap-2xl">
          <section>
            <h2 className="text-[22px] md:text-[24px]">
              1. Operatorul de date cu caracter personal
            </h2>
            <p className="mt-sm">
              [Nume_Firma_SRL/BIA], cu sediul în [Adresa_Sediu], înregistrată
              la Registrul Comerțului sub nr. [Numar_Inregistrare], având CUI
              [Cod_Fiscal] (denumită în continuare „ArchiVerse” sau „noi”),
              este operator de date cu caracter personal în sensul
              Regulamentului (UE) 2016/679 („GDPR”).
            </p>
            <p className="mt-sm">
              Pentru orice întrebare legată de prelucrarea datelor
              dumneavoastră, ne puteți contacta la adresa de e-mail [Email].
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">2. Ce date colectăm</h2>
            <p className="mt-sm">
              Prin intermediul formularului de contact de pe acest site,
              colectăm următoarele categorii de date cu caracter personal:
            </p>
            <ul className="mt-sm list-disc pl-lg">
              <li>Nume și prenume</li>
              <li>Adresă de e-mail</li>
              <li>Număr de telefon</li>
              <li>
                Orice informație suplimentară pe care alegeți să ne-o
                furnizați în mesajul transmis (de exemplu, detalii despre
                proiectul dumneavoastră)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              3. Scopul prelucrării
            </h2>
            <p className="mt-sm">
              Datele transmise prin formularul de contact sunt prelucrate
              exclusiv în scopul:
            </p>
            <ul className="mt-sm list-disc pl-lg">
              <li>
                comunicării cu dumneavoastră, ca răspuns la solicitarea
                transmisă;
              </li>
              <li>
                pregătirii unei oferte pentru serviciile noastre de
                arhitectură, design și consultanță, dacă este cazul.
              </li>
            </ul>
            <p className="mt-sm">
              Nu folosim aceste date în scopuri de marketing, decât dacă
              v-ați exprimat separat consimțământul în acest sens.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              4. Temeiul legal al prelucrării
            </h2>
            <p className="mt-sm">
              Prelucrarea datelor dumneavoastră se bazează pe consimțământul
              dumneavoastră, exprimat prin completarea și transmiterea
              voluntară a formularului de contact, conform art. 6 alin. (1)
              lit. a) din GDPR. Vă puteți retrage consimțământul în orice
              moment, fără a afecta legalitatea prelucrării efectuate anterior
              retragerii.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              5. Durata stocării datelor
            </h2>
            <p className="mt-sm">
              Păstrăm datele dumneavoastră personale doar pe perioada
              necesară îndeplinirii scopului pentru care au fost colectate:
              [TODO: perioada exactă — de exemplu, „pe durata comunicării și,
              ulterior, timp de X luni/ani, cu excepția cazului în care
              rezultă o colaborare contractuală, situație în care se aplică
              termenele legale de arhivare”]. La expirarea acestei perioade
              sau la solicitarea dumneavoastră de ștergere, datele vor fi
              șterse sau anonimizate.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              6. Destinatarii datelor
            </h2>
            <p className="mt-sm">
              Datele dumneavoastră pot fi transmise către furnizori de
              servicii IT/găzduire (hosting) și de comunicare (de exemplu,
              servicii de e-mail) implicați în funcționarea site-ului, strict
              în măsura necesară furnizării acestor servicii. Nu vindem și nu
              închiriem datele dumneavoastră către terți în scopuri de
              marketing.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              7. Transferul datelor în afara Spațiului Economic European
            </h2>
            <p className="mt-sm">
              [TODO: de completat în funcție de furnizorii de hosting/e-mail
              folosiți. Dacă aceștia nu transferă date în afara SEE, se poate
              păstra formularea: „Nu transferăm datele dumneavoastră în afara
              Spațiului Economic European (SEE).”]
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              8. Drepturile dumneavoastră
            </h2>
            <p className="mt-sm">
              În conformitate cu GDPR, aveți următoarele drepturi cu privire
              la datele dumneavoastră cu caracter personal:
            </p>
            <ul className="mt-sm list-disc pl-lg">
              <li>dreptul de acces la date;</li>
              <li>dreptul la rectificarea datelor inexacte;</li>
              <li>
                dreptul la ștergerea datelor („dreptul de a fi uitat”);
              </li>
              <li>dreptul la restricționarea prelucrării;</li>
              <li>dreptul la portabilitatea datelor;</li>
              <li>dreptul de opoziție la prelucrare;</li>
              <li>
                dreptul de a nu face obiectul unei decizii bazate exclusiv pe
                prelucrare automată.
              </li>
            </ul>
            <p className="mt-sm">
              Pentru exercitarea acestor drepturi, ne puteți contacta la
              [Email]. De asemenea, aveți dreptul de a depune o plângere la
              Autoritatea Națională de Supraveghere a Prelucrării Datelor cu
              Caracter Personal (ANSPDCP), www.dataprotection.ro.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              9. Securitatea datelor
            </h2>
            <p className="mt-sm">
              Aplicăm măsuri tehnice și organizatorice adecvate pentru
              protejarea datelor dumneavoastră împotriva accesului
              neautorizat, pierderii sau divulgării accidentale.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              10. Modificări ale acestei politici
            </h2>
            <p className="mt-sm">
              Această politică poate fi actualizată periodic. Data ultimei
              actualizări este afișată la începutul paginii.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
