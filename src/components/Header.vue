<template>
  <div class=" w-full md:py-10 py-2 md:px-8 fixed left-0 top-0 z-10 bg-white mb-2">
    <header class=" container mx-auto flex justify-between md:px-9 px-5">

      
      <div>
        <a href=""
        class=" md:text-xl text-sm font-normal whitespace-nowrap">
          DWEL
          &#9415;
        </a>
      </div>
      <ul class=" flex gap-5 md:flex hidden">
        <li 
        v-for="link,n in links" :key="n"
        class=""
        :class="link.className"
        
        >
          <router-link 
              class="font-normal text-black uppercase text-xl font-normal" 
              :class="{'text-black': open}"
              :to="link.link">
              {{link.name}}
          </router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      links: [
        {
          link: '/project',
          name: 'Projects',
          className: 'section-1'
        },
        {
          link: '#section-2',
          name: 'Info',
          className: 'section-2'
        }
      ]
    } 
  }
}
</script>



