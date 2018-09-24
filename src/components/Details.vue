<template>
    <div class="masterDetail">
        <router-link to="/">Go back</router-link>
        <div class="detail">
            <img class="post-image" :src="this.$route.params.item.flag" />  
            <h1>{{ this.$route.params.item.name }}</h1>
            <p>Capital: {{ this.$route.params.item.name }} </p>
            <p>Region: {{ this.$route.params.item.region }} </p>
            <p>Subregion: {{ this.$route.params.item.subregion }} </p>
            <p>Population: {{ this.$route.params.item.population }} habitants</p>
            <p>Area: {{ this.$route.params.item.area }} </p> 
        </div>             
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>
    .detail {
        position: relative;
        width: 100%;
    }

    img {
        padding-top:20px;
        position: relative;
        width:400px;
        height:280px;
    }
</style>