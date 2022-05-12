<template>
  <div class=" md:px-16 px-5 py-0">
    <my-header></my-header>
    <my-muvie></my-muvie>
    <child-component/>
    <homeFooter></homeFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import header from '@/components/Header'
import movie from '../components/muvie.vue'
import cComponent from '../components/childComponent.vue'
import homeFooter from '../components/footer.vue'

export default {
  name: 'HomeView',
  components: {
    MyHeader: header,
    MyMuvie: movie,
    childComponent: cComponent,
    homeFooter: homeFooter
  }
}
</script>
