import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  // Usamos la API de prueba oficial de k6
  let res1 = http.get('https://test.k6.io'); 
  check(res1, { 'status es 200': (r) => r.status === 200 });

  sleep(1);

  let res2 = http.get('https://test.k6.io/contacts.php');
  check(res2, { 'status es 200': (r) => r.status === 200 });

  sleep(1);
}