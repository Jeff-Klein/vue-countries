<template>

    <div id="container">

        <div class="search">
            <input id="filter-countries" v-model="search" placeholder="Filter" class="searchTerm" type="text">
        </div>

        <ul class="clist">
            <li v-for="item in filteredItems"  :key="item.alpha2Code" >
                <a class="card-link" href="#" @click="viewItemDetails(item)">
                    <article class="blog-card">
                        <img class="post-image" :src="item.flag" />
                        <div class="article-details">
                        <h4 class="post-category">{{ item.subregion }}</h4>
                        <h3 class="post-title">{{ item.name }}</h3>
                        <p class="post-description">{{ item.capital }}</p>
                        <p class="post-author">{{ item.nativeName }}</p>
                        </div>
                    </article>
                </a>
            </li>
        </ul>
    </div>    
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                items: null,
                search: null
            }
        },
        mounted () {
            axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => (this.items = response.data))
        },
        computed: {
            filteredItems: function() {

                if (!this.search)
                    return this.items;

                let searchValue = this.search;

                let filter = item => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >-1;
      
                return this.items.filter(filter)
            }
        },
        methods: {
          viewItemDetails: function (item) {
            console.log(item.name);
            //this.$router.push('Details');
            this.$router.push({ name: 'Details', params: { item: item }})
          }
        }
    }    
</script>

<style>

@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
* {
  box-sizing: border-box;
}
*::before, *::after {
  box-sizing: border-box;
}

.search {
  width: 100%;
  position: relative;
  padding: 20px;
}

.searchTerm {
  width: 500px;
  height:50px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  font-size:24px;
  background: transparent;
  border: none;
  outline: none;
}

.clist {
    list-style: none;
    margin: 0 auto;
    text-align: center;
    columns: 3;
    width: 1200px;
}



li {
    display: inline-block;
    vertical-align: top;
    padding-top:20px;
}


#container {
  width: 100%;
  height: 13.625rem;
}

.blog-card {
  display: flex;
  flex-direction: row;
  background: #fff;
  box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  overflow: hidden;
}

.card-link {
  position: relative;
  display: block;
  color: inherit;
  text-decoration: none;
}
.card-link:hover .post-title {
  transition: color 0.3s ease;
  color: #e04f62;
}
.card-link:hover .post-image {
  transition: opacity 0.3s ease;
  opacity: 0.9;
}

.post-image {
  transition: opacity 0.3s ease;
  display: block;
  width: 200px;
  object-fit: cover;
}

.article-details {
  padding: 1.5rem;
}

.post-category {
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
  border-bottom: 0.125rem solid #ebebeb;
}

.post-title {
  transition: color 0.3s ease;
  font-size: 1.125rem;
  line-height: 1.4;
  color: #121212;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.post-author {
  font-size: 0.875rem;
  line-height: 1;
  margin: 1.125rem 0 0 0;
  padding: 1.125rem 0 0 0;
  border-top: 0.0625rem solid #ebebeb;
}

@media (max-width: 40rem) {
  #container {
    width: 18rem;
    height: 27.25rem;
  }

  .blog-card {
    flex-wrap: wrap;
  }
}
@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: ". main main ." ". main main .";
  }

  #container {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }

  .post-image {
    height: 100%;
  }

  .blog-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 40rem) {
    .blog-card {
      grid-template-columns: auto;
      grid-template-rows: 12rem 1fr;
    }
  }
}

</style>
