<template>
  <div class="container max-w-4xl mx-auto">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer">
        <p>Here's some contact info</p>
      </slot>
    </footer>
  </div>
</template>