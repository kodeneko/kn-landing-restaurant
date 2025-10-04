<script lang="ts" setup>
import TitleCompo from '@components/title/TitleCompo.vue';
import { Paths } from '@globals/paths';
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
          <RouterLink class="link" :to="Paths.Legal">{{ $t('label.legal') }}</RouterLink>
        </li>
        <li class="ele">
          <RouterLink class="link" :to="Paths.Privacy">{{ $t('label.privacy') }}</RouterLink>
        </li>
        <li class="ele">
          <RouterLink class="link" :to="Paths.Cookies">{{ $t('label.cookies') }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-footer {
  display: flex;
  width: 1400px;
  justify-content: space-between;
  background-color: @c-dark;
  padding: 40px;
  font-size: 28px;

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .logo {
      font-size: .5rem;
    }

    .social {
      display: flex;
      gap: 10px;

      .ele {
        .icon-link {
          transition: all .3s;
          .icon {
            height: 32px;
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
    text-align: center;
    line-height: 38px;
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
        
        a {
          transition: all .3s;
          display: block;
          color: @c-light;
          
          &:hover {
            cursor: pointer;
            transform: translateX(-4px);
          }
        }
      }
    }
  }
}

@media @mediaTablet, @mediaMobile {
  .main-footer {

    flex-direction: column;
    gap: 40px;

    .right {
      .list {
        align-items: center;
      }
    }
  }
}
</style>