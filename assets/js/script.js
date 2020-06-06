/* Options */
const dateOpts = { weekday: 'short', month: 'numeric', day: 'numeric' };
const timeOpts = { hour: '2-digit', minute: '2-digit' };

const locale = navigator.language || 'en-US';

const updateFrequency = 10000; // in milliseconds

const timeSelector = 'h1 time';
const dateSelector = 'h2 time';

/***************************************************************/


/* DOM Nodes */
const timeEl = document.querySelector(timeSelector);
const dateEl = document.querySelector(dateSelector);

/* Date prep */
let today = new Date();
let formattedDate = new Intl.DateTimeFormat( locale, dateOpts ).format(today);
let formattedTime = new Intl.DateTimeFormat( locale, timeOpts ).format(today);

/* Init */
timeEl && dateEl && updateTime();

/**
 * Recursive function for updating the time every second
 */
function updateTime() {

  // Update date
  today = new Date();
  formattedDate = new Intl.DateTimeFormat(locale, dateOpts).format(today);
  formattedTime = new Intl.DateTimeFormat(locale, timeOpts).format(today);

  // Update DOM
  updateEl(timeEl, formattedTime.split(' ')[0], today);
  updateEl(dateEl, formattedDate, today);
  
  // Recurse
  setTimeout(updateTime, updateFrequency);
}

/**
 * Update innterHTML and [datetime] with new dates
 * The datetime attribute needs to be in ISO format (or similar)
 * @param {Node} el Element to be updated
 * @param {String} date Formatted date for `el` innerHTML
 * @param {Date} rawDate 
 */
function updateEl(el, date, rawDate) {
  el.innerHTML = date;
  el.setAttribute('datetime', rawDate.toISOString());
}