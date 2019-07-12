import request from 'request-promise-native';
import moment from 'moment';

export function pointUrl(point:string|Date, pkg?:string){
  return `https://api.npmjs.org/downloads/point/${point}${ pkg ? `/${pkg}` : ''}`
}

export function rangeUrl(start:Date, end:Date, pkg?:string){
  let format = 'YYYY-MM-DD';
  let period = `${moment(start).format(format)}:${moment(end).format(format)}`
  return `https://api.npmjs.org/downloads/range/${period}${ pkg ? `/${pkg}` : ''}`
}

export async function fetchToday() {
  console.log('url: ',pointUrl('last-day'))
  const todaysDownloads = await request.get(pointUrl('last-day'), {
    json : true
  })
  console.log('length of todaysDownloads: ',todaysDownloads);
}