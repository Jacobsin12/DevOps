import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 5, // 5 usuarios simulados
  duration: '10s', // prueba cortita de 10 segundos
};

export default function () {
  // 1. Probamos la ruta principal (raiz)
  // CAMBIA "tu-app.render.com" por la URL donde esté subida tu app
  let res1 = http.get('https://devops-jacobsin.onrender.com/'); 
  check(res1, { 'status es 200': (r) => r.status === 200 });

  sleep(1);

  // 2. Probamos otra ruta (ejemplo: la de usuarios o index)
  let res2 = http.get('https://devops-jacobsin.onrender.com/users');
  check(res2, { 'status es 200': (r) => r.status === 200 });

  sleep(1);
}