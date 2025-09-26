<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked'
import spinner from '@/assets/pics/spinner.png';
import { i18next } from '@i18n/index';

const docMap: Record<string, string> = {
  '/cookies': 'cookies',
  '/legal': 'legal',
  '/privacy': 'privacy'
};

const getLang = () => navigator.language.startsWith('es') ? 'es' : 'en';

const route = useRoute();

const content = ref('');
const loading = ref(true);
const error = ref<string | null>(null);

const fetchDoc = async () => {
  loading.value = true;
  error.value = null;
  const docKey = docMap[route.path];
  if (!docKey) {
    error.value = i18next.t('errors.docNotFound');
    loading.value = false;
    return;
  }
  const lang = getLang();
  const url = `/docs/${docKey}-${lang}.md`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(i18next.t('errors.docNotLoaded'));
    const rawDoc = await res.text()
    content.value = await marked.parse(rawDoc);
  } catch {
    error.value = i18next.t('errors.docNotLoaded');
  } finally {
    loading.value = false;
  }
};

onMounted(fetchDoc);
watch(() => route.path, fetchDoc);
</script>

<template>
  <div class="contDoc">
    <img v-if="loading" :src="spinner" />
    <p v-else-if="error">{{ error }}</p>
    <div v-else >
      <div class="doc" v-html="content"></div>
    </div>
  </div>
</template>

<style lang="less">
.contDoc {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: @c-red-trans;
  border-radius: 1rem;
}

.contDoc .doc {
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
    margin-top: 0.5rem;
  }
  p {
    margin-bottom: 1.2rem;
  }
  ul {
    list-style-type: disc;
    margin-left: 2rem;
    margin-bottom: 1.2rem;
  }
  strong {
    font-weight: bold;
  }
  a {
    color: @c-light
  }
}
</style>
