import axios from 'axios';

export default
   axios.create({
      baseURL: 'http://private-anon-9497e85da7-narration.apiary-mock.com',
      timeout: 2000
   });