<template>
  <!-- component -->
  <div
    class="z-30 relative items-center justify-center w-full h-full overflow-auto"
  >
    <div
      class="inset-0 h-screen bg-cover bg-center"
      :style="{ backgroundImage: imageUrl }"
    ></div>
    <button
      @click="goBack"
      type="button"
      class="bg-white z-50 text-center w-36 rounded-2xl h-12 absolute top-10 left-10 font-sans text-black group"
    >
      <div
        class="bg-green-400 rounded-xl h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[136px] z-10 duration-500"
      >
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
          ></path>
          <path
            fill="#000000"
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
          ></path>
        </svg>
      </div>
      <p class="translate-x-2">Go Back</p>
    </button>

    <div
      class="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"
    ></div>
    <div
      class="absolute inset-0 z-30 flex flex-col items-center justify-center"
    >
      <div class="w-full relative flex justify-center items-center">
        <div class="absolute bg-black bg-opacity-70 h-72 w-4/5"/>
        <div
          class="shadow-2xl rounded-lg w-4/5 h-72 bg-cover bg-center"
          :style="{ backgroundImage: imageUrl }"
        >

          <div
            v-if="category"
            class="flex flex-row justify-between items-center"
          >
            <div
              class="relative bg-opacity-70 md:w-1/2 w-full bg-black text-center flex justify-center items-center px-8"
            >
              <div
                class="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0"
              >
                <p
                  class="italic text-white text-xl md:text-2xl lg:text-3xl uppercase text-center font-semibold"
                >
                  Your Category : {{ category }}
                </p>
              </div>
              <!-- <div
              class="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"
            ></div> -->
            </div>
            <div class="md:w-1/2 w-full">
              <div
                class="relative bg-black h-full md:h-72 w-full bg-opacity-90 rounded-tr-lg rounded-br-lg"
              >
                <div
                  class="p-8 h-full flex justify-center items-center text-center"
                >
                  <p
                    v-if="isFetching"
                    class="text-white text-xs md:text-sm lg:text-xl mb-4"
                  >
                    Fetching quote...
                  </p>
                  <p
                    v-else-if="quote"
                    class="text-white flex flex-col justify-center text-justify items-start gap-5 h-full text-sm md:text-base lg:text-xl mb-4"
                  >
                    <span>{{ quote }}</span>
                    <span>Author : {{ author }}</span>
                  </p>

                  <p
                    v-else
                    class="text-white text-xs md:text-sm lg:text-xl mb-4"
                  >
                    Error fetching quote!
                  </p>

                  <div class="bottom-0 absolute p-2 right-5">
                    <button
                      @click="fetchQuote()"
                      class="bg-black text-white border border-grey-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                    >
                      <span
                        class="bg-grey-400 shadow-grey-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"
                      ></span>
                      Get New Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      category: this.$route.query.category, // Get category from query parameters
      quote: null,
      author: null,
      bgimage: null,
      isFetching: false,
      error: null,
    };
  },
  created() {
    this.fetchQuote();
    this.setImageUrl();
  },
  methods: {
    async fetchQuote() {
      this.isFetching = true;
      this.error = null; // Clear any previous errors
      // console.log(this.category)
      try {
        const apiKey = "jt53ZurG3vP13Jm1QOUZHw==4ZbEo1OjL4lkKU40"; // Replace with a placeholder (don't use this in production)
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/quotes?category=${this.category}`, // Replace 'happiness' with your desired category
          { headers: { "X-Api-Key": apiKey } }
        );
        this.quote = response.data[0].quote;
        this.author = response.data[0].author;
      } catch (error) {
        this.error = error.message; // Handle errors appropriately
      } finally {
        this.isFetching = false; // Always set isFetching to false after request
      }
    },
    setImageUrl() {
      const category = this.category;
      const imageUrls = {
        car: "url(https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        humor:
          "url(https://images.unsplash.com/photo-1606145166375-714fe7f24261?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        movies:
          "url(https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        alone:
          "url(https://images.unsplash.com/photo-1473830394358-91588751b241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        fitness:
          "url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        faith:
          "url(https://images.unsplash.com/photo-1602677416425-c84311bd217c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        family:
          "url(https://images.unsplash.com/photo-1504439268584-b72c5019471e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        health:
          "url(https://images.unsplash.com/photo-1507120410856-1f35574c3b45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      };
      this.imageUrl = imageUrls[category] || ""; // Use default empty string if category not found
    },
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>