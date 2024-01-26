import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape } from "../../chunks/ssr.js";
import { p as page, n as navigating } from "../../chunks/stores.js";
import { c as checkAbilitazione } from "../../chunks/shared.js";
const css = {
  code: "#myVideo.svelte-1ep8m65{right:0;bottom:0;min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}",
  map: null
};
function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loggedstandard;
  let loggedasseveratore;
  let $page, $$unsubscribe_page;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  loggedstandard = data.loggedstandard;
  loggedasseveratore = data.loggedasseveratore;
  $$unsubscribe_page();
  $$unsubscribe_navigating();
  return `<div class="it-header-wrapper "><div class="it-header-slim-wrapper"><div class="container"><div class="row"><div class="col-12"><div class="it-header-slim-wrapper-content"><a class="d-none d-lg-block navbar-brand" target="_blank" href="https://innovazione.gov.it/" data-svelte-h="svelte-m9e8kz">Dipartimento per la Trasformazione Digitale</a> <div class="nav-mobile" data-svelte-h="svelte-cpw5zz"><nav aria-label="Navigazione accessoria"><a class="it-opener d-lg-none" data-bs-toggle="collapse" href="#menu1a" role="button" aria-expanded="false" aria-controls="menu4"><span>Dipartimento per la Trasformazione Digitale</span> <svg class="icon" aria-hidden="true"><use href="/svg/sprites.svg#it-expand"></use></svg></a> </nav></div> <div class="it-header-slim-right-zone"><div class="it-access-top-wrapper">${loggedstandard || loggedasseveratore ? `<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap"><ul class="avatar-group-stacked">${loggedstandard ? `<li><a class="avatar size-md" href="/accesso"><img${add_attribute("src", "/api/img/" + encodeURIComponent(data.utentestandard.FullPhotoUrl), 0)}${add_attribute("alt", data.utentestandard.Name, 0)}></a></li>` : ``} ${loggedasseveratore ? `<li><a class="avatar size-md" href="/accesso"><img${add_attribute("src", "/api/img/" + encodeURIComponent(data.utenteasseveratore.FullPhotoUrl), 0)}${add_attribute("alt", data.utenteasseveratore.Name, 0)}></a></li>` : ``}</ul></div>` : `<a class="btn btn-primary btn-sm" href="/accesso" data-svelte-h="svelte-1mcbjza">Accedi</a>`}</div></div></div></div></div></div></div> <div class="it-nav-wrapper"><div class="it-header-center-wrapper" data-svelte-h="svelte-1xkc1ku"><div class="container"><div class="row"><div class="col-12"><div class="it-header-center-content-wrapper"><div class="it-brand-wrapper"><a href="/"><svg class="icon" aria-hidden="true"><use href="/svg/sprites.svg#it-team-digitale"></use></svg> <div class="it-brand-text"><div class="it-brand-title">APPortafoglio</div> <div class="it-brand-tagline d-none d-md-block">PA2026 in tasca</div></div></a></div> <div class="it-right-zone"></div></div></div></div></div></div> <div class="it-header-navbar-wrapper"><div class="container"><div class="row"><div class="col-12"> <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale"><button class="custom-navbar-toggler" type="button" aria-controls="nav0" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav0" data-svelte-h="svelte-19uty4a"><svg class="icon bg-override"><use href="/svg/sprites.svg#it-burger"></use></svg></button> <div class="navbar-collapsable" id="nav0" style="display: none;"><div class="overlay" style="display: none;"></div> <div class="close-div" data-svelte-h="svelte-1zfr21"><button class="btn close-menu" type="button"><span class="visually-hidden">Nascondi la navigazione</span> <svg class="icon"><use href="/svg/sprites.svg#it-close-big"></use></svg></button></div> <div class="menu-wrapper"><ul class="navbar-nav"><li class="nav-item active"><a class="${"nav-link " + escape($page.url.pathname === "/" ? "active" : "", true)}" href="/"><span data-svelte-h="svelte-1oquwmp">home</span></a></li> <li class="nav-item active"><a class="${"nav-link " + escape($page.url.pathname === "/opendata" ? "active" : "", true)}" href="/opendata"><span data-svelte-h="svelte-t31xle">open data</span></a></li>  ${loggedstandard ? `<li class="nav-item dropdown" data-svelte-h="svelte-1ekvz8q"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="ddconsulta"><span>consulta</span> <svg class="icon icon-xs"><use href="/svg/sprites.svg#it-expand"></use></svg></a> <div class="dropdown-menu" role="region" aria-labelledby="ddconsulta" data-sveltekit-preload-data="off"><div class="link-list-wrapper"><ul class="link-list"><li><a class="dropdown-item list-item" href="/op/avvisi"><span>avvisi</span></a></li> <li><a class="dropdown-item list-item" href="/op/enti"><span>enti</span></a></li> <li><a class="dropdown-item list-item" href="/op/referenti"><span>referenti</span></a></li> <li><span class="divider"></span></li> <li><a class="dropdown-item list-item" href="/op/contatti"><span>report accounting</span></a></li> <li><a class="dropdown-item list-item" href="/op/scadenze"><span>scadenze</span></a></li></ul></div></div></li>` : ``}  ${loggedstandard ? `<li class="nav-item dropdown" data-svelte-h="svelte-sivetq"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="ddcruscotti"><span>cruscotti</span> <svg class="icon icon-xs"><use href="/svg/sprites.svg#it-expand"></use></svg></a> <div class="dropdown-menu" role="region" aria-labelledby="ddcruscotti" data-sveltekit-preload-data="off"><div class="link-list-wrapper"><ul class="link-list"><li><a class="dropdown-item list-item" href="/cruscotti/generale"><span>generale</span></a></li> <li><a class="dropdown-item list-item" href="/cruscotti/fornitori"><span>fornitori</span></a></li></ul></div></div></li>` : ``} ${loggedstandard || loggedasseveratore ? `${data.utentestandard && checkAbilitazione(data.utentestandard.idsf, "monitor") ? ` <li class="nav-item dropdown" data-svelte-h="svelte-je7ymq"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="ddmonitoraggio"><span>monitoraggio</span> <svg class="icon icon-xs"><use href="/svg/sprites.svg#it-expand"></use></svg></a> <div class="dropdown-menu" role="region" aria-labelledby="ddmonitoraggio" data-sveltekit-preload-data="off"><div class="link-list-wrapper"><ul class="link-list"><li data-sveltekit-preload-data="off"><a class="dropdown-item list-item" href="/monitoraggio/risorse"><span>board risorse</span></a></li> <li data-sveltekit-preload-data="off"><a class="dropdown-item list-item" href="/monitoraggio/asseverazioni"><span>board asseverazioni</span></a></li> <li data-sveltekit-preload-data="off"><a class="dropdown-item list-item" href="/monitoraggio/avvisi"><span>board avvisi</span></a></li> <li data-sveltekit-preload-data="off"><a class="dropdown-item list-item" href="/monitoraggio/crono"><span>crono</span></a></li></ul></div></div></li>` : ``}` : ``}</ul></div></div></nav></div></div></div></div></div></div> <div class="container my-4">${$navigating ? `<section class="it-hero-wrapper it-primary it-overlay"> <div class="img-responsive-wrapper"><div class="img-responsive"><div class="img-wrapper"><video autoplay muted loop id="myVideo" class="svelte-1ep8m65"><source src="${"/vids/wait" + escape(getRandomArbitrary(0, 5), true) + ".mp4"}" type="video/mp4"></video></div></div></div>  <div class="container" data-svelte-h="svelte-1ocqww3"><div class="row justify-content-center"><div class="col-12"><div class="it-hero-text-wrapper bg-dark"><h1 class="h1"><strong>Caricamento in corso, attendere per favore...</strong></h1> <div class="progress progress-indeterminate"><span class="visually-hidden">In elaborazione...</span> <div class="progress-bar" role="progressbar"></div></div></div></div></div></div></section>` : `${slots.default ? slots.default({}) : ``}`}</div> <footer class="it-footer" data-svelte-h="svelte-y2si5q"><div class="it-footer-main"><div class="container py-4"><section><div class="row"><div class="col-lg-3 col-md-3 col-sm-6 pb-2"><h6>ISTITUZIONALI</h6> <div class="link-list-wrapper"><ul class="footer-list link-list clearfix"><li><a class="list-item" href="https://innovazione.gov.it/" target="_blank" title="Vai al sito del Dipartimento">Il Dipartimento<svg class="icon icon-white icon-sm ms-1"><use href="/svg/sprites.svg#it-external-link"></use></svg></a></li> <li><a class="list-item" href="https://www.agid.gov.it/" title="Vai al sito dell'AGID">AGID<svg class="icon icon-white icon-sm ms-1"><use href="/svg/sprites.svg#it-external-link"></use></svg></a></li> <li><a class="list-item" href="https://www.pagopa.it/it/" title="Vai al sito pagoPA">PagoPA S.p.A.<svg class="icon icon-white icon-sm ms-1"><use href="/svg/sprites.svg#it-external-link"></use></svg></a></li></ul></div></div> <div class="col-lg-3 col-md-3 col-sm-6 pb-2"><h6>PA Digitale 2026</h6> <div class="link-list-wrapper"><ul class="footer-list link-list clearfix"><li><a class="list-item" href="https://padigitale2026.gov.it/" target="_blank" title="Vai al sito pubblico">Sito pubblico<svg class="icon icon-white icon-sm ms-1"><use href="/svg/sprites.svg#it-external-link"></use></svg></a></li> <li><a class="list-item" href="https://padigitale2026.my.salesforce.com/" title="Vai al CRM">CRM
										<svg class="icon icon-white icon-sm ms-1"><use href="/svg/sprites.svg#it-external-link"></use></svg></a></li></ul></div></div></div></section></div></div> <a href="#" aria-hidden="true" tabindex="-1" data-bs-toggle="backtotop" class="back-to-top" id="btt"><svg class="icon icon-light"><use href="/svg/sprites.svg#it-arrow-up"></use></svg></a> </footer>`;
});
export {
  Layout as default
};
