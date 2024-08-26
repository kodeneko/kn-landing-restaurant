<script lang="ts" setup>
import TitleCompo from '@components/title/TitleCompo.vue';
import { socialList } from '@globals/social';

</script>

<template>
  <div class="main-footer">
    <div class="left">
      <div class="logo">
        <TitleCompo />
      </div>
      <ul class="social">
        <li 
          v-for="social in socialList" 
          :key="social.id"
          class="ele"
        >
          <a class="icon-link">
            <fai 
              class="icon"
              :icon="social.icon" 
            />
          </a>
        </li>
      </ul>
    </div>
    <div class="center">
      <span>Created by Kodeneko</span>
    </div>
    <div class="right">
      <ul class="list">
        <li class="ele">
          <a class="link">Terms & Conditions</a>
        </li>
        <li class="ele">
          <a class="link">Private Policy</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import 'global.less';

.main-footer {
  display: flex;
  justify-content: space-between;
  background-color: @c-dark;
  padding: 40px;

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .logo {
      font-size: .3rem;
    }

    .social {
      display: flex;
      gap: 10px;

      .ele {
        .icon-link {
          transition: all .3s;
          .icon {
            height: 18px;
          }
          &:hover {
            cursor: pointer;
            color: @c-red;
          }
        }
      }
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .list {
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 10px;

      .ele {

        text-align: right;
        
        .link {
          transition: all .3s;
          display: block;
          
          &:hover {
            cursor: pointer;
            transform: translateX(-4px);
          }
        }
      }
    }
  }
}
</style>