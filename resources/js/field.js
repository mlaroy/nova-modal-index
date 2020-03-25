Nova.booting((Vue, router, store) => {
  Vue.component('index-modal-index', require('./components/IndexField'))
  Vue.component('detail-modal-index', require('./components/DetailField'))
  Vue.component('form-modal-index', require('./components/FormField'))
})
