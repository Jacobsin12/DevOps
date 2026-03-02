import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, 
    { duration: '1m', target: 20 }, 
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  // USA ESTA URL QUE ME PASASTE
  const BASE_URL = 'https://devops-afzn.onrender.com'; 

  // Prueba 1: Items
  let res1 = http.get(`${BASE_URL}/items`);
  check(res1, { 'Status 200 en Items': (r) => r.status === 200 });

  sleep(1);

  // Prueba 2: Usuarios
  let res2 = http.get(`${BASE_URL}/users`);
  check(res2, { 'Status 200 en Usuarios': (r) => r.status === 200 });

  sleep(1);
}