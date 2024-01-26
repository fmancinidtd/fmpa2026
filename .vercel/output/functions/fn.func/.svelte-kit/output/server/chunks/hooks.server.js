import jsforce from "jsforce";
import { r as redirect } from "./index.js";
const handle = async ({ event, resolve }) => {
  let loggedstandard = false;
  let loggedasseveratore = false;
  let cookiesfuidstd = event.cookies.get("session_id_std");
  let cookiesfuidass = event.cookies.get("session_id_ass");
  if (cookiesfuidstd)
    loggedstandard = true;
  if (cookiesfuidass)
    loggedasseveratore = true;
  if (!(loggedstandard || loggedasseveratore) && !(event.url.pathname === "/" || //event.url.pathname.startsWith('/entiipa') ||
  event.url.pathname.startsWith("/accesso"))) {
    throw redirect(303, "/accesso");
  }
  let utentestandard = event.locals.utentestandard;
  let utenteasseveratore = event.locals.utenteasseveratore;
  let sessionerror = "";
  if (loggedstandard && !utentestandard) {
    const conn = new jsforce.Connection({
      instanceUrl: "https://padigitale2026.my.salesforce.com",
      accessToken: cookiesfuidstd
    });
    let idutentesf;
    try {
      await conn.identity(function(err, res) {
        if (err) {
          sessionerror = err.message;
          event.cookies.delete("session_id_std", { path: "/" });
          loggedstandard = false;
          cookiesfuidstd = null;
        } else {
          idutentesf = res.user_id;
        }
      });
      let soqlUtente = `select Username, Name, Title, Email, FullPhotoUrl   from User where Id = '` + idutentesf + `'`;
      let result_ = await conn.query(soqlUtente);
      utentestandard = result_.records[0];
      utentestandard.idsf = idutentesf;
    } catch (error) {
      sessionerror = error.message;
      event.cookies.delete("session_id_std", { path: "/" });
      loggedstandard = false;
      cookiesfuidstd = null;
      utentestandard = null;
    }
  }
  if (loggedasseveratore && !utenteasseveratore) {
    const conn = new jsforce.Connection({
      instanceUrl: "https://padigitale2026.my.salesforce.com",
      accessToken: cookiesfuidass
    });
    let idutentesf;
    try {
      await conn.identity(function(err, res) {
        if (err) {
          sessionerror = err.message;
          event.cookies.delete("session_id_ass", { path: "/" });
          loggedasseveratore = false;
          cookiesfuidass = null;
        } else {
          idutentesf = res.user_id;
        }
      });
      let soqlUtente = `select Username, Name, Title, Email, FullPhotoUrl   from User where Id = '` + idutentesf + `'`;
      let result_ = await conn.query(soqlUtente);
      utenteasseveratore = result_.records[0];
      utenteasseveratore.idsf = idutentesf;
    } catch (error) {
      sessionerror = error.message;
      event.cookies.delete("session_id_ass", { path: "/" });
      loggedasseveratore = false;
      cookiesfuidass = null;
      utenteasseveratore = null;
    }
  }
  event.locals.user = {
    loggedstandard,
    connectionStandard: cookiesfuidstd,
    utentestandard,
    loggedasseveratore,
    connectionAsseveratore: cookiesfuidass,
    utenteasseveratore,
    sessionerror
  };
  return resolve(event);
};
export {
  handle
};
