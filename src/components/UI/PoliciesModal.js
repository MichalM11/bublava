import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./PoliciesModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <FontAwesomeIcon
        icon={faTimes}
        size="4x"
        color="#fff2e6"
        className={classes.icon}
        onClick={props.onClose}
        title="Skrýt galerii"
      />
      <div className={classes.test}>
        <div className={classes.container}>
          <h1>ZÁSADY OCHRANY OSOBNÍCH ÚDAJŮ</h1>
          <p>
            společnosti Tipfin finance s.r.o. se sídlem Oty Bubeníčka 1639/10,
            Uhříněves, 104 00 Praha, IČO: 10746579 zapsané v obch. rejstříku
            vedeném Městským soudem v Praze, oddíl C, vložka číslo 347723
          </p>

          <ol type="1" className={classes.mainList}>
            <li>Základní ustanovení</li>
            <ul>
              <li>
                1.1. Tyto zásady ochrany osobních údajů (dále jen „Zásady“)
                společnosti Tipfin finance s.r.o., IČO: 10746579, se sídlem Oty
                Bubeníčka 1639/10, Uhříněves, 104 00 Praha (dále jen
                „Obchodník“), shrnují postupy a procesy při ochraně osobních
                údajů, jež Obchodník uplatňuje při provozu webové stránky
                www.drevostavbaletovice.cz (dále jen „Webová stránka“) a při
                poskytování služeb klientům.
              </li>
            </ul>
            <li>Rozsah a účely zpracování osobních údajů</li>
            <ul>
              <li>
                2.1. Obchodník zpracovává osobní údaje pro účely, blíže
                stanovené níže v tomto článku těchto Zásad.
              </li>
              <ul>
                <li>
                  2.2.1. Za účelem zkontaktování a učinění nabídky ke
                  zprostředkování obchodu.
                </li>
                <p>
                  V případě, že Obchodník získá Vaše osobní údaje od třetí
                  osoby, zejména realitního makléře nebo tipaře, bude je
                  uchovávat po dobu jednoho týdne v rozsahu:
                </p>
                <ul>
                  <li>jméno a příjmení</li>
                  <li>telefonní číslo nebo emailová adresa</li>
                </ul>
                <p>
                  za účelem zkontaktování z titulu oprávněného zájmu správce,
                  neboť důvodně předpokládá, že byste mohli mít zájem na
                  zprostředkování obchodu.
                </p>
                <li>
                  2.2.2. Za účelem uzavření, změny nebo ukončení smluvního
                  vztahu a poskytování služeb mezi:
                </li>
                <ul>
                  <li>
                    (i) Obchodníkem a zákazníkem, který poptává prodej,
                    pronájem, nebo nákup nemovitosti, odhad tržní ceny
                    nemovitosti
                  </li>
                  <li>
                    (ii) Obchodníkem a spolupracujícím realitním makléřem nebo
                    tipařem (osobou, která doporučuje realitní, příp. finanční
                    obchody)
                  </li>
                  <p>
                    tedy abychom mohli naše smluvní partnery kontaktovat,
                    komunikovat s nimi ve věci poskytování služeb, vyplácet
                    peněžitá plnění apod.,
                  </p>
                  <p>
                    zpracovává Obchodník osobní údaje těchto osob v tomto
                    rozsahu:
                  </p>
                  <ul>
                    <li>jméno a příjmení,</li>
                    <li>rodné číslo, případně datum narození,</li>
                    <li>číslo občanského průkazu,</li>
                    <li>adresa bydliště,</li>
                    <li>
                      případně identifikační číslo a daňové identifikační číslo,
                    </li>
                    <li>telefonní číslo</li>
                    <li>číslo účtu</li>
                    <li>informace o vlastnickém právu k nemovitostem</li>
                    <li>zdroj financování</li>
                    <li>případně také adresa pro doručování.</li>
                    <p>
                      Tyto osobní údaje Obchodník nezbytně potřebuje za účelem
                      splnění svých povinností ze smlouvy a plnění zákonných
                      povinností.
                    </p>
                  </ul>
                </ul>
              </ul>
              <li>
                2.3. Za účelem vedení účetnictví zpracovává Obchodník fakturační
                údaje svých zákazníků nebo realitních makléřů či tipařů.
              </li>
              <p>
                Tyto osobní údaje Obchodník nezbytně nutně potřebuje k plnění
                svých povinností vyplývajících z platných právních předpisů.
              </p>
              <li>
                2.4. Pokud zákazník udělil Obchodníkovi souhlas ke zpracování
                osobních údajů za účelem zasílání obchodních nabídek a sdělení
                Obchodníka, vč. šíření obchodních sdělení ve smyslu § 7 zákona
                č. 480/2004 Sb., o některých službách informační společnosti
                (dále jen „Obchodní sdělení“), zpracovává Obchodník za těmito
                účely následující osobní údaje zákazníka:
              </li>
              <ul>
                <li>jméno a příjmení,</li>
                <li>emailová adresa,</li>
                <p>
                  Tyto osobní údaje poskytujete Obchodníkovi dobrovolně a svůj
                  souhlas můžete kdykoliv odvolat podle níže uvedených
                  instrukcí.
                </p>
              </ul>
              <li>
                2.5. Pokud zákazník nebo potenciální zákazník udělil souhlas se
                zpracováním svých osobních údajů za účelem evidence k budoucí
                spolupráci, zpracovává Obchodník osobní údaje v rozsahu:
              </li>
              <ul>
                <li>jméno a příjmení,</li>
                <li>rodné číslo, případně datum narození,</li>
                <li>adresa bydliště,</li>
                <li>
                  případně identifikační číslo a daňové identifikační číslo,
                </li>
                <li>emailová adresa</li>
                <li>telefonní číslo</li>
                <li>informace o vlastnickém právu k nemovitostem.</li>
                <p>
                  Tyto osobní údaje poskytujete Obchodníkovi dobrovolně a svůj
                  souhlas můžete kdykoliv odvolat podle níže uvedených
                  instrukcí.
                </p>
              </ul>
              <li>
                2.6. Za účelem zkvalitňování služeb Obchodníka můžeme
                zpracovávat cookies . Pokud byste s takovým způsobem zpracování
                nesouhlasili, můžete kdykoliv vznést námitku proti takovému
                způsobu zpracování Vašich osobních údajů podle níže uvedených
                instrukcí.
              </li>
            </ul>
            <li>Podmínky zpracování osobních údajů</li>
            <ul>
              <li>
                3.1. Osobní údaje budou zpracovány pouze po dobu nezbytně nutnou
                k výše uvedeným účelům, za jakými byly shromážděny, standardně
                tedy po celou dobu trvání smluvního vztahu s Obchodníkem a ještě
                dalších deset let po jeho skončení. Údaje využívané s Vaším
                souhlasem užíváme po dobu pěti let.
              </li>
              <p>
                Osobní údaje Obchodník zpracovává elektronicky i fyzicky
                manuálním i automatizovaným způsobem.
              </p>
            </ul>
            <li>Sdílení a předávání údajů</li>
            <p>Obchodník může shromážděné údaje sdílet:</p>
            <ul>
              <li>4.1 S obchodními partnery</li>
              <p>
                Obchodník může poskytovat informace svým spolupracovníkům,
                dodavatelům, konzultantům a poradcům, poskytovatelům software,
                marketingovým partnerům a dalším poskytovatelům služeb nebo
                obchodním partnerům. Informace těmto stranám poskytuje například
                proto, aby vám mohl poskytnout služby při realizaci vaší
                zakázky, které Obchodník sám neumí.
              </p>
              <p>
                Rádi bychom Vás ujistili, že všichni naši obchodní partneři jsou
                vázáni povinností mlčenlivosti a Vaše údaje jsou u nich v
                bezpečí.
              </p>
              <li>4.2 Z právních důvodů nebo v případě sporů</li>
              <p>
                Obchodník může vaše údaje sdílet, pokud je to vyžadováno
                zákonem, regulacemi, provozními smlouvami, právními procesy nebo
                státními úřady.
              </p>
              <ul>
                <li>
                  Sem patří sdílení údajů s policií a soudy, státními úřady nebo
                  jinými třetími stranami, pokud je to nutné k vymáhání našich
                  smluv nebo jiných zásad, pokud je to nutné k ochraně práv nebo
                  majetku Obchodníka nebo jiných stran, případně pokud v
                  souvislosti s vaším používáním našich služeb nebo obchodní
                  spoluprací s Obchodníkem dojde ke sporům nebo právním nárokům.
                </li>
                <li>
                  Dále sem patří sdílení vašich údajů s jinými stranami v
                  souvislosti s případným slučováním společností, prodejem
                  majetků, konsolidací nebo restrukturalizací, financováním nebo
                  přechodem celé naší společnosti nebo její části do vlastnictví
                  jiné společnosti.
                </li>
              </ul>
              <li>4.3 S vaším souhlasem</li>
              <p>
                Obchodník může vaše údaje sdílet i jinými způsoby, pokud vás na
                to upozorní a vy s tím budete souhlasit.
              </p>
            </ul>
            <li>
              Práva subjektů údajů související se zpracováním jeho osobních
              údajů
            </li>
            <ul>
              <li>5.1. Právo odvolat souhlas se zpracováním osobních údajů</li>
              <ul>
                <li>
                  5.1.1. Máte právo kdykoliv odvolat souhlas se zpracováním
                  osobních údajů, který jste nám udělil, a to zasláním žádosti
                  na email zurab.kereselidze@darfin.cz.
                </li>
              </ul>
              <li>5.2. Právo na přístup k osobním údajům</li>
              <ul>
                <li>
                  5.2.1. Máte právo na přístup ke zpracovávaným osobním údajům o
                  své osobě. Můžete se na nás kdykoliv obrátit a zeptat se nás,
                  zda zpracováváme Vaše osobní údaje, a pokud tomu tak je, máte
                  právo získat detailní informace o zpracování Vašich osobních
                  údajů.
                </li>
                <li>
                  5.2.2. Poskytneme Vám kopii zpracovávaných osobních údajů
                  bezplatně. V případě dalších kopií za poplatek 150,- Kč za
                  každou opakovanou žádost v rámci období jednoho čtvrtletí.
                </li>
              </ul>
              <li>5.3. Právo na opravu osobních údajů</li>
              <ul>
                <li>
                  5.3.1. Máte právo na opravu nepřesných údajů, které
                  zpracováváme. Zároveň máte právo na doplnění jeho osobních
                  údajů.
                </li>
              </ul>
              <li>5.4. Právo na výmaz osobních údajů</li>
              <ul>
                <li>
                  5.4.1. Máte právo na výmaz osobních údajů, které zpracováváme,
                  a to v případě kdy:
                </li>
                <ul>
                  <li>
                    osobní účely již nejsou potřebné pro účely, pro které byly
                    shromážděny nebo jinak zpracovány
                  </li>
                  <li>
                    zákazník odvolá souhlas, a neexistuje žádný další právní
                    důvod pro zpracování;
                  </li>
                  <li>osobní údaje byly zpracovány protiprávně;</li>
                  <li>
                    osobní údaje musí být vymazány ke splnění právní povinnosti
                    stanovené v právu Unie nebo členského státu, které se na
                    správce vztahuje;
                  </li>
                  <li>
                    osobní údaje byly shromážděny v souvislosti s nabídkou
                    služeb informační společnosti dítěti.
                  </li>
                </ul>
              </ul>
              <li>5.5. Právo na omezení zpracování</li>
              <ul>
                <li>
                  5.5.1. Máte právo žádat omezení zpracování Vašich osobních
                  údajů v případě kdy:
                </li>
                <ul>
                  <li>
                    zákazník popírá přesnost osobních údajů, a to na dobu
                    potřebnou k tomu, aby správce mohl přesnost osobních údajů
                    ověřit;
                  </li>
                  <li>
                    zpracování je protiprávní a zákazník odmítá výmaz osobních
                    údajů a žádá místo toho omezení jejich použití;
                  </li>
                  <li>
                    Obchodník již osobní údaje nepotřebuje pro účely zpracování,
                    zákazník je požaduje pro určení, výkon nebo obhajobu
                    právních nároků;
                  </li>
                </ul>
              </ul>
              <li>5.6. Právo na přenositelnost osobních údajů</li>
              <ul>
                <li>
                  5.6.1. Máte právo požádat o přenositelnost údajů, v rámci
                  kterého nás můžete požádat, abychom Vaše osobní údaje přenesli
                  jinému správci, a to v běžně čitelném formátu.
                </li>
              </ul>
              <li>5.7. Právo na stížnost u dozorového úřadu</li>
              <ul>
                <li>
                  5.7.1. V případě, že nabydete dojmu, že Vaše osobní údaje
                  nejsou zpracovávány podle platného a účinného zákona, máte
                  právo stěžovat si dozorovému úřadu, jímž je Úřad pro ochranu
                  osobních údajů.
                </li>
              </ul>
              <p>
                Veškerá Vaše práva můžete uplatnit prostřednictvím e-mailu na
                adrese: zurab.kereselidze@darfin.cz
              </p>
            </ul>
            <li>Automatizované rozhodování</li>
            <ul>
              <li>
                6.1. V rámci zpracování osobních údajů nedochází ke zpracování
                prostřednictvím automatizovaného rozhodování ani profilování.
              </li>
            </ul>
            <li>Cookies</li>
            <ul>
              <li>
                7.1. Pro zkvalitnění Webových stránek používá Obchodník tzv.
                cookies, které ukládají prostřednictvím prohlížeče malé soubory,
                které umožňují lépe přizpůsobit Webové stránky a zkvalitňovat
                obsah. Cookies jsou malé textové soubory, které jsou z Webových
                stránek a umožňují získávat informace jako např. informace o
                návštěvě či další nastavení, a to tak, aby každá návštěva byla
                co nejpříjemnější (např. pro zobrazení na mobilním telefonu) či
                k zobrazování reklam.
              </li>
              <li>
                7.2. Používáním Webových stránek souhlasí návštěvník s ukládáním
                souborů cookies. Použití cookies lze omezit nebo úplně
                zablokovat v nastavení webového prohlížeče. Informace o
                nastavení konkrétního prohlížeče lze naleznout na těchto
                adresách:
              </li>
              <ul>
                <li>Internet Explorer: windows.microsoft.com</li>
                <li>Google Chrome: support.google.com</li>
                <li>Mozilla Firefox: support.mozilla.org</li>
                <li>Opera: help.opera.com</li>
                <li>Safari: support.apple.com</li>
              </ul>
              <li>
                7.3. Více informací ke cookies lze naleznout{" "}
                <a
                  href="
              https://www.google.cz/intl/cs/policies/technologies/cookies"
                >
                  zde
                </a>
              </li>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
};

const PoliciesModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          images={props.images}
          onClose={props.onClose}
          curImage={props.curImage}
        />,
        document.querySelector("#overlay-root")
      )}
    </Fragment>
  );
};

export default PoliciesModal;
