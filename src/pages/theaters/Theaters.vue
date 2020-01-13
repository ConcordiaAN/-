<template>
  <div>
    <Header :title="title"></Header>
    <nav-menu></nav-menu>
    <div class="content">
      <router-link tag="div" to="/cinemaList" class="wrap_content">
        {{ cinema }}
      </router-link>
    </div>
    <!-- <loading class="loading" v-if="isLoading"></loading> -->
  </div>

</template>

<script>
import Header from 'components/layout/Header'
import NavMenu from 'components/common/theares-nav/NavMenu'
import {mapState} from 'vuex'


export default {
  name: 'Theares',
  components: {
    Header,NavMenu
  },
  data () {
    return {
        title: '影院'
    }
  },
  computed: {
      ...mapState(['cinema'])
  }
}
</script>


<style lang="stylus" scoped>
@import '~styles/variables.styl'

  .loading
    margin-top:12px;
  .content
    position: fixed
    width: 100%
    top: 96px
    bottom: 56px
    .wrap_content
      overflow: hidden
      height: 100%
      .cinema
        padding: 13px 15px 13px 0;
        margin-left: 15px;
        background-color: #fff;
        position: relative;
        overflow: hidden;
        .title
          height: 23px;
          line-height: 23px;
          font-size: 16px;
          color: #000;
          .price-block
            padding-top: 9px;
            padding-left: 3px;
            color: $base-color
            .price
              font-size: 18px;
            .q
              margin-left: 3px;
        .location
          margin-top: 6px;
          font-size: 13px;
          color: #666;
          .distance
            margin-left: 5px;
        .label-block
          height: 17px;
          line-height: 17px;
          margin-top: 6px;
          margin-bottom: 4px;
          overflow: hidden;
          font-size: 0;
          flex-shrink: 0;
          .label
            position: relative;
            display: inline-block;
            padding: 0 3px;
            height: 15px;
            line-height: 15px;
            border-radius: 2px;
            font-size: 12px;
            margin-right:6px;
            &.endorse
              color: #589daf;
              border: 1px solid #589daf;
            &.snack
              color: #f90;
              border: 1px solid #f90;
        .discount-block
          color: #999;
          margin-bottom: 4px;
          .discount-label-icon
            padding: 0 2px;
            height: 14px;
            line-height: 14px;
            border-radius: 2px;
            font-size: 12px;
            margin-right:6px;
            display: inline-block;
            color: $base-color;
            border: 1px solid $base-color;
          .discount-label-text
            margin-left: 0;
            font-size: 11px;
</style>