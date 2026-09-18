import type { Metadata } from "next";

// TODO(legal): solid template, not legal advice — have it reviewed before
// launch.
export const metadata: Metadata = {
  title: "Politica de cookie-uri",
  description:
    "Ce cookie-uri folosim pe acest site și cum le puteți controla din browser.",
};

export default function CookiePolicyPage() {
  return (
    <div className="px-lg py-4xl sm:px-2xl md:px-4xl">
      <div className="mx-auto max-w-prose">
        <h1 className="text-[40px] md:text-[48px]">Politica de cookie-uri</h1>
        <p className="mt-lg text-[14px] text-charcoal/70">
          Ultima actualizare: [TODO: dată]
        </p>

        <div className="mt-2xl flex flex-col gap-2xl">
          <section>
            <h2 className="text-[22px] md:text-[24px]">
              1. Ce sunt cookie-urile
            </h2>
            <p className="mt-sm">
              Cookie-urile sunt fișiere de mici dimensiuni stocate pe
              dispozitivul dumneavoastră atunci când vizitați un site web.
              Acestea permit site-ului să rețină anumite informații despre
              vizita dumneavoastră.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              2. Ce cookie-uri folosim
            </h2>
            <p className="mt-sm">
              <strong>Cookie-uri strict necesare.</strong> Site-ul poate seta
              cookie-uri esențiale funcționării tehnice de bază (de exemplu,
              pentru securitate). Acestea nu necesită consimțământ separat.
            </p>
            <p className="mt-sm">
              <strong>Cookie-uri de analiză (Google Analytics).</strong> La
              prima vizită, vi se afișează un banner prin care vă solicităm
              acordul înainte de a activa Google Analytics. Dacă alegeți
              „Accept”, Google Analytics poate seta cookie-uri precum{" "}
              <code>_ga</code> și <code>_ga_&lt;ID container&gt;</code>{" "}
              pentru a distinge vizitatorii și sesiunile, cu o durată de
              păstrare de până la 2 ani (setare implicită Google). Dacă
              alegeți „Refuz”, aceste cookie-uri nu sunt setate, iar traficul
              dumneavoastră nu este trimis către Google Analytics.
            </p>
            <p className="mt-sm">
              Alegerea dumneavoastră este reținută local, în browser, și nu
              este trimisă către noi sau către terți.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">3. Temeiul legal</h2>
            <p className="mt-sm">
              Plasarea cookie-urilor care nu sunt strict necesare
              funcționării site-ului se face doar cu consimțământul
              dumneavoastră prealabil, conform Legii nr. 506/2004 privind
              prelucrarea datelor cu caracter personal și protecția vieții
              private în sectorul comunicațiilor electronice, cu
              modificările ulterioare, coroborată cu Regulamentul (UE)
              2016/679.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">
              4. Cum vă puteți schimba alegerea
            </h2>
            <p className="mt-sm">
              Puteți retrage sau modifica oricând consimțământul, folosind
              linkul „Setări cookie-uri” din subsolul (footer-ul) site-ului
              — acesta redeschide bannerul de consimțământ. Suplimentar,
              puteți gestiona sau bloca cookie-urile direct din setările
              browserului dumneavoastră (Chrome, Firefox, Safari, Edge
              etc.), de obicei din secțiunea „Confidențialitate” sau
              „Cookie-uri” a browserului. Dezactivarea cookie-urilor poate
              afecta funcționarea corectă a anumitor secțiuni ale site-ului.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">5. Modificări</h2>
            <p className="mt-sm">
              Această politică poate fi actualizată periodic, pentru a
              reflecta modificări ale cookie-urilor folosite pe site. Data
              ultimei actualizări este afișată la începutul paginii.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px]">6. Contact</h2>
            <p className="mt-sm">
              Pentru orice întrebări legate de această politică, ne puteți
              contacta la [Email].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
