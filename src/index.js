import './sass/main.scss';
//import 'material-design-icons/iconfont/material-icons.css';
import ApiService from './services/api-service';
import cardTpl from './templates/template-card.hbs';
import { eventAdapter } from './utils/event-adapter';

const refs = {
  eventList: document.querySelector('.card-list')
}

const api = new ApiService();

api.fetchEvents()
  .then(({ _embedded }) => {
    buildCards(_embedded);
  })

// api.fetchEventDetail("1kk8v94-GA5YE-w").then(console.log);


function buildCards({events}) {
  console.log(events);
  refs.eventList.innerHTML = cardTpl(events.map(eventAdapter));
}
