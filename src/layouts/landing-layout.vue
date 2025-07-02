<template>
  <main class="landing-layout">
    <slot />
  </main>
</template>

<style scoped lang="scss">
.landing-layout {
  display: grid;
  place-items: center;
  height: 100dvh;
}
</style>
