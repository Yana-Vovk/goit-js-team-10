import { api, fetch } from './fetcher';

document.addEventListener('DOMContentLoaded', onLoadedDocument);

if (window.matchMedia("(min-width: 480px) and (max-width: 769px)").matches) {
  api.perPage = 21;
}

function onLoadedDocument() {
  fetch();
}
