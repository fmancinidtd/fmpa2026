import { c as create_ssr_component, v as validate_component, e as escape, f as each } from "../../../../../chunks/ssr.js";
import { C as Cite } from "../../../../../chunks/cite.js";
import moment from "moment/min/moment-with-locales.js";
import { e as euro, b as formatBytes } from "../../../../../chunks/shared.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  moment.locale("it");
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container my-4"><h1 data-svelte-h="svelte-b1gl0t">Dettaglio candidatura</h1> ${validate_component(Cite, "Cite").$$render(
    $$result,
    {
      text: "La verità della storia è nei dettagli",
      author: "Paul Auster"
    },
    {},
    {}
  )}</div> <div class="container"><div class="row"><div class="col-12 col-lg-2" data-svelte-h="svelte-333lay"><div data-bs-toggle="sticky" data-bs-stackable="true"><nav class="navbar it-navscroll-wrapper navbar-expand-lg it-bottom-navscroll it-right-side" data-bs-navscroll><button class="custom-navbar-toggler" type="button" aria-controls="navbarNavProgress" aria-expanded="false" aria-label="Toggle navigation" data-bs-toggle="navbarcollapsible" data-bs-target="#navbarNavProgress"><span class="it-list"></span>1. Riepilogo</button> <div class="progress custom-navbar-progressbar"><div class="progress-bar it-navscroll-progressbar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div></div> <div class="navbar-collapsable" id="navbarNavProgress"><div class="overlay"></div> <button type="button" class="it-back-button btn w-100 text-start"><svg class="icon icon-sm icon-primary align-top"><use href="/svg/sprites.svg#it-chevron-left" xlink:href="/svg/sprites.svg#it-chevron-left"></use></svg> <span>Indietro</span></button> <div class="menu-wrapper"><div class="link-list-wrapper"><h3>sezioni</h3> <div class="progress"><div class="progress-bar it-navscroll-progressbar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div></div> <ul class="link-list"><li class="nav-item"><a class="nav-link active" href="#storia"><span>1. Storico</span></a> <a class="nav-link active" href="#servizi"><span>2. Servizi</span></a> <a class="nav-link active" href="#fornitori"><span>3. Fornitori</span></a> <a class="nav-link active" href="#files"><span>4. Files</span></a></li></ul></div></div></div></nav></div></div> <div class="col-12 col-lg-10 it-page-sections-container"><div class="it-page-section my-5" id="storia"><h4 data-svelte-h="svelte-1a03b0p">Storico della candidatura</h4> <p data-svelte-h="svelte-1nrrec7">In questa sezione puoi vedere lo storico della candidatura con tutte le informazioni
					relative agli eventi salienti della stessa.</p> <h6>ENTE: ${escape(data.c.outfunds__Applying_Organization__r.Name)}</h6> <h6>Stato attuale candidatura: ${escape(data.c.outfunds__Status__c)}</h6> <h6>Stato attuale del progetto:
					${escape(data.c.Stato_Progetto__c ? data.c.Stato_Progetto__c : "n.a.")}</h6> <div class="it-timeline-wrapper"><div class="row my-4">${each(Object.entries(data.chgrouped), ([key, value], index) => {
    return `<div class="col-12"><div class="timeline-element"><div class="${"it-pin-wrapper " + escape(key.split(":")[1] === "D" ? "it-now" : "it-evidence", true)}">${key.split(":")[1] === "D" ? `<div class="pin-icon bg-white" data-svelte-h="svelte-ml3v0x"><svg class="icon icon-primary"><use href="/svg/sprites.svg#it-team-digitale"></use></svg> </div>` : `<div class="pin-icon" data-svelte-h="svelte-1av9mp1"><svg class="icon"><use href="/svg/sprites.svg#it-pa"></use></svg> </div>`} <div class="pin-text"><span>${escape(key.split(":")[0])} - (${escape(index != Object.entries(data.chgrouped).length - 1 ? moment(key.split(":")[0], "DD/MM/YYYY").startOf("day").fromNow() : moment(key.split(":")[0], "DD/MM/YYYY").startOf("day").fromNow())})</span> </div></div> <div class="card-wrapper"><div class="card"><div class="card-body"><div>${each(value, (h, i) => {
      return `<h5 class="card-title">${escape(h.title)}</h5> <p>${escape(h.subtitle)}</p> ${h.Field === "COMUNICAZIONE" ? `<div class="accordion" id="collapsedetails"><div class="accordion-item"><h2 class="accordion-header" id="${"heading" + escape(i, true) + "c"}" data-svelte-h="svelte-17ewmx4"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="${"#collapse" + escape(i, true) + "c"}" aria-expanded="true" aria-controls="${"collapse" + escape(i, true) + "c"}">Comunicazione
																		</button></h2> <div id="${"collapse" + escape(i, true) + "c"}" class="accordion-collapse collapse" role="region" aria-labelledby="${"heading" + escape(i, true) + "c"}"><div class="accordion-body"><!-- HTML_TAG_START -->${h.NewValue}<!-- HTML_TAG_END --></div> </div></div> </div>` : ``} ${h.Field === "outfunds__Status__c" && h.OldValue === "AMMESSA" && h.NewValue === "ACCETTATA" ? `<p class="text-success"><strong>CUP: ${escape(data.c.Codice_CUP__c)}</strong> </p>` : ``} ${h.Field === "Stato_Progetto__c" && h.OldValue === "IN LIQUIDAZIONE" && h.NewValue === "LIQUIDATO" ? `<p class="text-success"><strong>${escape(euro(data.c.outfunds__Awarded_Amount__c))}</strong> </p>` : ``}`;
    })}</div> </div></div> </div></div> </div>`;
  })}</div></div></div> <div class="it-page-section my-5" id="servizi"><h4 data-svelte-h="svelte-10i5te8">Servizi</h4> <p data-svelte-h="svelte-zdmsd5">In questa sezione puoi vedere informazioni relative ai servizi appartenenti alla
					candidatura.</p> <div class="container my-4"><div class="table-responsive"><table class="table table-hover table-sm caption-top align-middle"><caption data-svelte-h="svelte-1qu6906">Servizi</caption> <thead data-svelte-h="svelte-2go8kf"><tr><th>#</th> <th>Nome</th> <th>Stato</th> <th>Data di completamento</th> <th>Data di attivazione in esercizio</th> <th>Esito controlli automatici</th></tr></thead> <tbody>${each(data.sr, (s, index) => {
    return `<tr><td><small>${escape(index + 1)} </small></td> <td><small>${escape(s.Name)} </small></td> <td><small>${escape(s.Stato_Attivit__c)} </small></td> <td><small>${escape(s.Data_di_completamento__c ? moment(s.Data_di_completamento__c).format("DD/MM/YYYY") : "n.d.")} </small></td> <td><small>${escape(s.Data_attivazione_servizio__c ? moment(s.Data_attivazione_servizio__c).format("DD/MM/YYYY") : "n.d.")}</small></td> <td><small>${escape(s.Esito_controlli__c ? s.Esito_controlli__c : "n.d.")} </small></td> </tr>`;
  })}</tbody></table></div></div></div> <div class="it-page-section my-5" id="fornitori"><h4 data-svelte-h="svelte-mhud18">Fornitori</h4> <p data-svelte-h="svelte-1pvd4ka">In questa sezione puoi vedere informazioni relative ai fornitori dei servizi della
					candidatura e scaricarne la documentazione contrattuale.</p> <div class="container my-4"><div class="table-responsive"><table class="table table-hover table-sm caption-top align-middle"><caption data-svelte-h="svelte-wjn3bu">Fornitori</caption> <thead data-svelte-h="svelte-xfl0xv"><tr><th>#</th> <th>Servizio</th> <th>Fornitore</th> <th>Data di contrattualizzazione</th> <th></th></tr></thead> <tbody>${each(data.soggettiRealizzatori, (s, index) => {
    return `${data.sr.filter((x) => s.Servizio__c === x.Id && s.Denominazione_Soggetto_Realizzatore__c)[0] ? `<tr><td><small>${escape(index + 1)} </small></td> <td><small>${escape(data.sr.filter((x) => s.Servizio__c === x.Id)[0].Name)} </small></td> <td><small>${escape(s.Denominazione_Soggetto_Realizzatore__c ? s.Denominazione_Soggetto_Realizzatore__c : "n.d.")} </small></td> <td><small>${escape(moment(s.Data_Contrattualizzazione__c).format("DD/MM/YYYY"))} </small></td> <td>${s.contratti && s.contratti.length > 0 ? `${each(s.contratti, (fc, i) => {
      return `<a href="${"/api/file/" + escape(fc.ContentDocumentId, true)}" target="_blank"><svg class="icon icon-sm icon-primary"><use href="/svg/sprites.svg#it-download"></use></svg> </a>`;
    })}` : ``}</td> </tr>` : ``}`;
  })}</tbody></table></div></div></div> <div class="it-page-section my-5" id="files"><h4 data-svelte-h="svelte-1odape7">Files</h4> <p data-svelte-h="svelte-1w60rno">In questa sezione puoi vedere e scaricare i files appartenenti alla candidatura</p> <div class="container my-4"><div class="table-responsive"><table class="table table-hover table-sm caption-top align-middle"><caption data-svelte-h="svelte-k9vsg">Files appartenenti alla candidatura</caption> <thead data-svelte-h="svelte-1qpkfgb"><tr><th>#</th> <th>Nome</th> <th>Data</th> <th>Tipo</th> <th>Dimensione</th> <th></th></tr></thead> <tbody>${each(data.filesCandidatura, (file, index) => {
    return `<tr><td><small>${escape(index + 1)} </small></td> <td><small>${escape(file.ContentDocument.Title)} </small></td> <td><small>${escape(moment(file.ContentDocument.LastModifiedDate).format("DD/MM/YYYY - HH:mm:ss"))} </small></td> <td><small>${escape(file.ContentDocument.FileExtension)} </small></td> <td><small>${escape(formatBytes(file.ContentDocument.ContentSize))} </small></td> <td><a href="${"/api/file/" + escape(file.ContentDocumentId, true)}" target="_blank"><svg class="icon icon-sm icon-primary"><use href="/svg/sprites.svg#it-download"></use></svg> </a></td> </tr>`;
  })}</tbody></table></div></div></div></div></div></div>`;
});
export {
  Page as default
};
