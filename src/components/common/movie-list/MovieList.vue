<template>
	<div class="list-wrap">
		<div v-if="$route.name==='coming'" class="coming-list">
			<div v-for="(value,key) of groupedMovies" :key="key">
				<p class="group-date">{{ key }}</p>
				<movie-item :item="item" v-for="item of value" :key="item.id"></movie-item>
			</div>
		</div>
		<template v-else>
			<movie-item :item="item" v-for="item of movies" :key="item.id"></movie-item>
		</template>
	</div>
</template>

<script>
import MovieItem from './MovieItem'
import { scroll } from 'utils/scroll'
import _ from 'lodash'
import { setTimeout } from 'timers';

export default {
  props: {
    resource: Object
  },

  data () {
    return {
      movies: []
    }
  },

  computed: {
    groupedMovies () {
      return _.groupBy(this.movies, (item) => {
        return item.comingTitle
      })
    }
  },

  components: {
    MovieItem
  },

  watch: {
    
    resource () {
      this.movies = this.resource 
        && (this.$route.name === 'intheater' 
          ? this.resource.movieList
          : this.resource.coming)
        || []

      
      setTimeout(() => {
        scroll({
          el: '#movie-scroll',
          data: this.movies,
          horizontal: false,
          inTheater: this.resource,
          url: '/ajax/moreComingList',
          vm: this
        })
      }, 300)
    }
  }
}
</script>


<style lang="stylus" scoped>
</style>
