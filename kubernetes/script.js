import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 500 },
    { duration: '5m30s', target: 2000 },
    { duration: '20s', target: 20 },
  ],
};

export default function () {
  const res = http.get('http://rawbeeen.com/helm');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
