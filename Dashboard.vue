<template>
  <div class="dashboard-layout">
    <h1 class="products-title">Romobili</h1>
    <v-row class="">
      <v-col
        md="3"
        lg="3"
        sm="6"
        v-for="(item, idx) in productsData"
        :key="idx"
      >
        <ProductCard
          :source="item.source"
          :title="item.title"
          :rating="item.rating"
          :subtitle="item.subtitle"
          :price="item.price"
        />
      </v-col>
      <v-col v-if="isAdmin">
        <div class="add-product">
          <v-card
            sm="2"
            md="2"
            max-width="150"
            height="10rem"
            class="add-product-card"
          >
            <v-img
              height="50%"
              :src="plusIconUrl"
              class="add-product-card-image"
              contain
            >
            </v-img>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import firebase from "../../firebase/index";
import ProductCard from "../ProductCard";

export default {
  name: "Dashboard",
  components: {
    ProductCard,
  },
  data() {
    return {
      productsData: [],
      plusIconUrl:
        "https://firebasestorage.googleapis.com/v0/b/prodavnica-romobila-c1880.appspot.com/o/plus-icon-21715.png?alt=media&token=917ca481-0303-457a-897d-9682ebf8bf47",
      isAdmin: false,
    };
  },
  mounted() {
    this.fetchProducts();
    this.getUserData();
    this.checkIsAdmin();
    console.log("Test", userData.email)
  },
  methods: {
    async fetchProducts() {
      await firebase.firestore
        .collection("products")
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            this.productsData.push(doc.data());
          });
        });
    },
    async getUserData() {
      const user = await firebase.auth.currentUser;
      console.log(user);
      this.userData = user;
      if (user.email === "null") {
        this.$router.push("/auth");
      }
    },
    async checkIsAdmin() {
      const user = await firebase.auth.currentUser;
      if (user.email == "admin2@admin2.admin") {
        this.isAdmin = true;
      }
    },
  },
};
</script>

<style scoped>
.dashboard-layout {
  @apply flex flex-col mt-5 mx-5 p-5 bg-white rounded-md overflow-scroll;
  height: 48rem;
}
.products-title {
  @apply font-normal text-4xl text-center;
}
.add-product {
  @apply h-full flex flex-row justify-center items-center mx-auto;
}
.add-product-card {
  @apply flex justify-center items-center opacity-50;
}
.add-product-card:hover {
  @apply opacity-100 cursor-pointer;
}
</style>