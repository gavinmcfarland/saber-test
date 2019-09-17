---
title: First Post
layout: post
date: 2019-04-29
author: Jane
categories:
  - meta
slug: first-post
assets:
  cover: ./first-post.png
featured: true
---

This is the first post!

> Nisi ullamco eu excepteur eu eu culpa enim elit veniam ut dolore ullamco aute.
>
> -- Surely someone

You can do all crazy things with Saber!

<Section>Test</Section>

```js
console.log('woah!')
```

<Button>Hello</Button>

In fact, <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="count++">{{ count }}</button> crazy things!

<script>
import Button from '@/theme/components/Button'

export default {
  components: {
    Button,
  },
  data() {
    return {
      count: 69
    }
  }
}
</script>
