<template>
  <div class="container">
    <m-header
      :backIconShow="false"
      :listIconShow="true"
    />
    <pull-down-loading-text 
      :loadingText="loadingText"
      :topPosition=".44"
    />
    <scroll-wrapper :onPullDown="onPullDown">
      <m-swiper :sliderData="sliderData" />
      <main-title
        title="前端進修班"
        :linkShow="true"
      />
      <course-nav :navData="navData" />
      <main-title
        title="平台合作方"
        :linkShow="true"
      />
      <cooperation :linkData="linkData" />
      <main-title
        title="官方推薦課程"
        :linkShow="true"
      />
      <recom-course :recomCourseData="recomCourseData" />
      <collection :collectionData="collectionData" />
      <main-title
        title="全網優秀老師"
        :linkShow="false"
      />
      <teacher :teacherData="teacherData"/>
      <m-footer />
    </scroll-wrapper>
  </div>
</template>

<script>
  import MHeader from '@/components/common/header/index.vue';
  import ScrollWrapper from '@/components/common/scrollWrapper/index.vue';
  import MFooter from '@/components/common/footer/index.vue';
  import MSwiper from '~/components/index/swiper/index.vue';
  import MainTitle from '@/components/common/mainTitle/index.vue';
  import CourseNav from '@/components/index/courseNav/index.vue';
  import Cooperation from '@/components/index/cooperation/index.vue';
  import RecomCourse from '@/components/index/recomCourse/index.vue';
  import Collection from '@/components/index/collection/index.vue';
  import Teacher from '@/components/index/teacher/index.vue';
  import PullDownLoadingText from '@/components/common/pullDownLoadingText/index.vue'

  import { PULL_DOWN_TEXT } from '@/config/config';

  import IndexModel from '@/models/index.js';

  const indexModel = new IndexModel();

  export default {
    components: {
      MHeader,
      ScrollWrapper,
      MFooter,
      MSwiper,
      MainTitle,
      CourseNav,
      Cooperation,
      RecomCourse,
      Collection,
      Teacher,
      PullDownLoadingText
    },
    data(){
      return {
        sliderData: [],
        navData: [],
        linkData: [],
        recomCourseData: [],
        collectionData: [],
        teacherData: [],
        loadingText: PULL_DOWN_TEXT.ORIGIN
      }
    },
    // asyncData在組件每次加載前被調用
    async asyncData(){
      const {
        sliderData,
        navData,
        linkData,
        recomCourseData,
        collectionData,
        teacherData
      } = await indexModel.getHomeData(); 

      return {
        sliderData,
        navData,
        linkData,
        recomCourseData,
        collectionData,
        teacherData
      }
    },

    methods: {
      async getHomeData(){
        const {
          sliderData,
          navData,
          linkData,
          recomCourseData,
          collectionData,
          teacherData
        } = await indexModel.getHomeData(); 

        this.sliderData = sliderData;
        this.navData = navData;
        this.linkData = linkData;
        this.recomCourseData = recomCourseData;
        this.collectionData = collectionData;
        this.teacherData = teacherData;
      },
      
      onPullDown(scroll){
        this.loadingText = PULL_DOWN_TEXT.PULLING;
        this.getHomeData();

        setTimeout(() => {
          this.loadingText = PULL_DOWN_TEXT.FINISHED;

          setTimeout(() => {
            scroll.finishPullDown();
          }, 500);

          setTimeout(() => {
            this.loadingText = PULL_DOWN_TEXT.ORIGIN;
          }, 1000);
        }, 1500);
      }
    }
  }
</script>

<style>

</style>
