<script setup lang="ts">
import BtnCompo from '@components/btn/BtnCompo.vue';
import { motion as m } from 'motion-v';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <section class="not-found">
    <m.div 
      class="content"
      :initial="{
        opacity: 0,
        y: 100
      }"
      :animate="{
        opacity: 1,
        y: 0
      }"
      :transition="{
        delay: 0.3,
        duration: 0.7
      }"
    >
      <div class="title">
        <h2>Not Found</h2>
        <h3>Error 404</h3>
      </div>
      <div class="desc">
        <p>The page you are looking for does not exist.</p>
        <BtnCompo 
          label="Back to Home"
          size="sm"
          :line="false"
          :full="false"
          @click="() => router.push('/')"
        />
      </div>
    </m.div>
  </section>
</template>

<style scoped lang="less">

.not-found {
  display: flex;
  justify-content: center;
  text-align: center;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: @c-red-trans;
  padding: 2rem;
  border-radius: 1rem;


  .title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  
    h2 {
      font-size: 3rem;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  .desc {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      font-size: 1.5rem;
    }
    .back {
      text-decoration: none;
      display: inline-block;
      padding: 0.6rem 1rem;
      border-radius: 0.5rem;
      background: @c-red;
      color: @c-light;
    }
  }

}

</style>


