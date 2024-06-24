<template>
  <div
    class="bg-black md:h-screen h-fit min-h-screen flex flex-col items-center justify-center"
  >
    <h1 class="text-gray-200 text-5xl">Get your Quote !</h1>
    <p class="py-3 text-white italic">Pick a Cateory</p>
    <div v-if="isLoadingImages">Loading Categories...</div>
    <div
      v-else
      class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 justify-center items-center gap-10 lg:px-52 md:px-20 px-10 mt-8"
    >
      <div
        v-for="category in categories"
        :key="category"
        class="flex flex-col items-center group gap-2"
        @click="selectCategory(category)"
      >
        <img
          width="120"
          class="rounded border border-gray-100 h-36 object-cover border-transparent group-hover:border-4 group-hover:border-orange-500"
          :src="category.imageUrl"
        />
        <p class="text-gray-500 group-hover:text-gray-300 capitalize">
          {{ category.name }}
        </p>
      </div>
    </div>
  </div>
  
</template>
  
<script>
export default {
  name: "CategorySelector",
  data() {
    return {
      categories: [
        {
          id: "a",
          name: "car",
          imageUrl:
            "https://images.unsplash.com/photo-1623006772851-a8bf2c47d304?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "b",
          name: "humor",
          imageUrl:
            "https://images.unsplash.com/photo-1567111089028-9abb29aa1102?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "c",
          name: "movies",
          imageUrl:
            "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "d",
          name: "alone",
          imageUrl:
            "https://images.unsplash.com/photo-1494995971821-13e351803d47?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "e",
          name: "fitness",
          imageUrl:
            "https://images.unsplash.com/photo-1528720208104-3d9bd03cc9d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "f",
          name: "faith",
          imageUrl:
            "https://images.unsplash.com/photo-1520187044487-b2efb58f0cba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "g",
          name: "family",
          imageUrl:
            "https://images.unsplash.com/photo-1559734840-f9509ee5677f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "h",
          name: "health",
          imageUrl:
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      isLoadingImages: true, // Track image loading state for visual feedback
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoadingImages = false;
    }, 1000);
  },
  methods: {
    selectCategory(category) {
      this.$router.push({
        path: "/quote",
        query: { category: category.name }, // Send category name as a query parameter
      });
    },
  },
};
</script>

  