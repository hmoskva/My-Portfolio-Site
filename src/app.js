import {db} from './js/firebase';

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    projects: [],
    lightMode: true,
    form: {
      email: '',
      message: ''
    },
    sending: false,
    mailFnURL: 'https://us-central1-portfolio-faed7.cloudfunctions.net/sendMail'
  },
  methods: {
    async sendMail() {
      try {
        this.sending = !this.sending;
        const mesgResp = await axios.post(this.mailFnURL, {...this.form});

        Object.keys(this.form).forEach(key => {
          this.form[key] = '';
        });
        alert('Thanks for reaching out. Your message is on its way!');
      } catch (e) {
        alert('Something went wrong. Please try again.');
      } finally {
        this.sending = !this.sending;
      }
    }
  },
  mounted() {
    db.collection('projects').where('active', '==', true).get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        this.projects.unshift(doc.data());
      });
    });
  }
});