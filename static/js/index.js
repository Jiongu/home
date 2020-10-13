// Doc: https://br.vuejs.org/v2/guide/index.html

const base = { 
  data() {
    return {
      title: 'Jiongu',
      subtitle: 'ジオング'
    }
  }
}

Vue.createApp(base).mount('#base')


const footer = {
  data() {
    return {
      name: '2020 © Haruno',
      version: 'Version 0.1',
      by: 'sswellington'
    }
  }
}

Vue.createApp(footer).mount('#copyright')
