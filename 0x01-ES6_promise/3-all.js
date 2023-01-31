import {uploadPhoto, createUser} from './utilis';


export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((res) => {
      console.log(`${res[0].body} ${res[1]} ${res[2]}`);
    })
    .catch(() => console.log('Signup system offline'));
}
