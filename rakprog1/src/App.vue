<template>
    <div>
        <h1>Header</h1>
        <p>Hello World!</p>
        <app-nav/>
        <router-view></router-view>
    </div>    
</template>

<script>
import appNav from './components/Navigation.vue'
export default {
    components:{
        appNav
    }

}
</script>
   

<style scoped>
    
</style>


