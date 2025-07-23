<template>
  <aside class="app-sidebar" aria-label="Навигация">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/app" aria-current="page">🏠 {{ $t('sidebar.main') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/app/editor">💻 {{ $t('sidebar.editor') }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped lang="scss">
@use '@/shared/styles/mixins.scss' as *;
@use '@/shared/styles/breakpoints.scss' as *;

.app-sidebar {
  width: var(--sidebar-width);
  background: var(--color-muted);
  border-right: 1px solid var(--color-border);
  padding: 1rem;

  @include respond-max($breakpoint-tablet) {
    display: none;
  }
}
</style>
